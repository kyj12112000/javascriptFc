// var table = new draw2d.shape.layout.VerticalLayout();
//     canvas.add(table,200,100);
//     table.add(new draw2d.shape.basic.Label({text:"Header of the table",bold:true, stroke:4, resizeable:true}));

TableShape = draw2d.shape.layout.VerticalLayout.extend({

	NAME: "TableShape",
	
    init : function(type)
    {

        // 라벨 설정 생성자
        var fontColor; //글씨색상
    	var bgColor; // 배경색상
    	var text; //글자

        
    	if(type=="Large"){//대블록
    		fontColor = "#111111";
    		bgColor = "#FFFFFF";
            text = "대블록";
    	}else if(type=="Middle"){//중블록
    		fontColor = "#f7f5f5";
    		bgColor = "#FFFFFF";
            text = "중블록";
    	}else if(type=="Small"){//소블록
    		bgColor = "#FFFFFF";
            text = "소블록";
    	}

        //여기서 라벨에 대한 설정을 진행함.
        
    	this._super($.extend({
    		// text: " asdasdasdasdasdasdasdasdads", //글자
            stroke:1, //선 굵기
            // fontColor:fontColor,  //글씨색
            // bgColor:bgColor, //배경색상
            // radius: 10, //모 깎기
            // padding:10,
            // height:300, //높이
            // resizeable:true,
            // editor:new draw2d.ui.LabelInplaceEditor()
    	},[]));


        var inputPort = this.createPort("input");
        var outputPort = this.createPort("output");

        inputPort.attr({"cssClass": "blue_group_port"});
        outputPort.attr({"cssClass": "blue_group_port"});
        

        // this.classLabel = new draw2d.shape.basic.Label({
        //     text:"ClassName", 
        //     stroke:1,
        //     fontColor:"#5856d6",  
        //     bgColor:"#f7f7f7", 
        //     radius: this.getRadius(), 
        //     padding:10,
        //     resizeable:true,
        //     editor:new draw2d.ui.LabelInplaceEditor()
        // });

        this.add(new draw2d.shape.basic.Label({
            text: text,
            bold:true,
            // stroke:5,
            resizeable:true
        }));
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
	   	     padding:{left:10, top:3, right:10, bottom:5},
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
         this.classLabel.setText(name);
         
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

        memento.name = this.classLabel.getText();
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
     },

    onSelect: function(canvas, figure, isPrimarySelection)
	{
		this._super(canvas, figure, isPrimarySelection);

		if (this.overlay === null) {
			this.overlay= $("<div class='overlayMenu'>&#x2295;</div>");
			$("body").append(this.overlay);
			this.overlay.on("click",function(){

				// use a Command and CommandStack for undo/redo support
				//
				var consoeommand= new draw2d.command.CommandDelete(figure);
				canvas.getCommandStack().execute(command);
			})
		}
		this.posOverlay(figure);
	},


	/**
	 * @method
	 *
	 * @param {draw2d.Canvas} canvas the related canvas
	 * @param {draw2d.Figure} figure the unselected figure
	 */
	onUnselect: function(canvas, figure)
	{
		this._super(canvas, figure);

		this.overlay.remove();
		this.overlay=null;
	},

});
