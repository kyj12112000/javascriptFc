
TableShape = draw2d.shape.basic.Label.extend({

	NAME: "TableShape",
	
    init : function(type)
    {
    	var fontColor = "#000000";
    	var bgColor = "#f7f7f7";
    	var text ="블록명";
    	if(type=="L"){//대블록
    		fontColor = "#f7f5f5";
    		bgColor = "#000000";
    	}else if(type=="M"){//중블록
    		fontColor = "#f7f5f5";
    		bgColor = "#00579A";
    	}else if(type=="S"){//소블록
    		bgColor = "#E7E7E7";
    	}else if(type=="J"){//정수장
    		bgColor = "#07a330";
    	}else if(type=="FRI"){//순시유량
    		bgColor = "#FDD833";
    		text ="순시";
    	}else if(type=="FRD"){//적산차유량
    		bgColor = "#FF9494";
    		text ="적산차";
    	}else if(type=="PRI"){//압력
    		bgColor = "#8DDE99";
    		text ="압력";
    	}else if(type=="LEI"){//수위
    		bgColor = "#7985CB";
    		text ="수위";
    	}else if(type=="PRI2"){//감압밸브 2차압력
    		bgColor = "#0CE5CE";
    		text ="감압";
    	}
    	this._super($.extend({
    		text:text, 
            stroke:0,
            fontColor:fontColor,  
            bgColor:bgColor, 
            radius: 10, 
            padding:10,
            resizeable:true,
            editor:new draw2d.ui.LabelInplaceEditor()
    	},[]));
    	var inputPort = this.createPort("input");
    	var outputPort = this.createPort("output");
        
    	/*inputPort.on("connect", function(emitterPort, obj){
    		obj.connection.setColor("#9aa0a1");
    		obj.connection.setStroke(1);
        });
    	
    	outputPort.on("connect", function(emitterPort, obj){
    		obj.connection.setColor("#9aa0a1");
    		obj.connection.setStroke(1);
        });*/
    },
     
 
    /**
     * @method
     * Add an entity to the db shape
     * 
     * @param {String} txt the label to show
     * @param {Number} [optionalIndex] index where to insert the entity
     */
    addEntity: function(txt, optionalIndex)
    {
	   	 var label =new draw2d.shape.basic.Label({
	   	     text:txt,
	   	     stroke:0,
	   	     radius:0,
	   	     bgColor:null,
	   	     padding:{left:10, top:10, right:10, bottom:10},
	   	     fontColor:"#4a4a4a",
	   	     resizeable:true,
             editor:new draw2d.ui.LabelEditor()
	   	 });

//        label.installEditor(new draw2d.ui.LabelEditor());
	     var input = label.createPort("input");
	     var output= label.createPort("output");
	     
         input.setName("input_"+label.id);
         output.setName("output_"+label.id);
         
         var _table=this;
         label.on("contextmenu", function(emitter, event){
             $.contextMenu({
                 selector: 'body', 
                 events:
                 {  
                     hide:function(){ $.contextMenu( 'destroy' ); }
                 },
                 callback: $.proxy(function(key, options) 
                 {
                    switch(key){
                    case "rename":
                        setTimeout(function(){
                            emitter.onDoubleClick();
                        },10);
                        break;
                    case "new":
                        setTimeout(function(){
                            _table.addEntity("_new_").onDoubleClick();
                        },10);
                        break;
                    case "delete":
                        // with undo/redo support
                        var cmd = new draw2d.command.CommandDelete(emitter);
                        emitter.getCanvas().getCommandStack().execute(cmd);
                    default:
                        break;
                    }
                 
                 },this),
                 x:event.x,
                 y:event.y,
                 items: 
                 {
                     "rename": {name: "Rename"},
                     "new":    {name: "New Entity"},
                     "sep1":   "---------",
                     "delete": {name: "Delete"}
                 }
             });
         });
         
	     if($.isNumeric(optionalIndex)){
             this.add(label, null, optionalIndex+1);
	     }
	     else{
	         this.add(label);
	     }

	     return label;
    },
    
    /**
     * @method
     * Remove the entity with the given index from the DB table shape.<br>
     * This method removes the entity without care of existing connections. Use
     * a draw2d.command.CommandDelete command if you want to delete the connections to this entity too
     * 
     * @param {Number} index the index of the entity to remove
     */
    removeEntity: function(index)
    {
        this.remove(this.children.get(index+1).figure);
    },

    /**
     * @method
     * Returns the entity figure with the given index
     * 
     * @param {Number} index the index of the entity to return
     */
    getEntity: function(index)
    {
        return this.children.get(index+1).figure;
    },
     

     /**
      * @method
      * Set the name of the DB table. Visually it is the header of the shape
      * 
      * @param name
      */
     setName: function(name)
     {
         this.setText(name);
         
         return this;
     },
     
     
     /**
      * @method 
      * Return an objects with all important attributes for XML or JSON serialization
      * 
      * @returns {Object}
      */
     getPersistentAttributes : function()
     {
         var memento= this._super();

        memento.name = this.getText();
        memento.entities   = [];
        this.children.each(function(i,e){
            
            if(i>0){ // skip the header of the figure
                memento.entities.push({
                    text:e.figure.getText(),
                    id: e.figure.id
                });
            }
        });
         
         return memento;
     },
     
     /**
      * @method 
      * Read all attributes from the serialized properties and transfer them into the shape.
      *
      * @param {Object} memento
      * @return
      */
     setPersistentAttributes : function(memento)
     {
         this._super(memento);
         
         this.setName(memento.name);

         if(typeof memento.entities !== "undefined"){
             $.each(memento.entities, $.proxy(function(i,e){
                 var entity =this.addEntity(e.text);
                 entity.id = e.id;
                 entity.getInputPort(0).setName("input_"+e.id);
                 entity.getOutputPort(0).setName("output_"+e.id);
             },this));
         }

         return this;
     }  

});
