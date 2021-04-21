

example.View = draw2d.Canvas.extend({
	
	init:function(id)
    {
		this._super(id, 10000,20000);
		this.setScrollArea("#"+id);
	},

    
    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop : function(droppedDomNode, x, y, shiftKey, ctrlKey)
    {
    	var areasecd = $("#3depth option:selected").attr("areasecd");
    	if(areasecd==""){
    		alert(inzLabel["pipe.msg.mgcCd"]);
    		return false;
    	}
    	
    	var shape = $(droppedDomNode).data("shape");
        var group = $(droppedDomNode).data("group");
        var type = $(droppedDomNode).data("type");
        var figure = eval("new "+shape+"(\""+type+"\");");
        if(figure instanceof draw2d.shape.composite.Raft){
        	var group = new draw2d.shape.composite.Raft({width:50,height:50,x:x,y:y});
        	var inputPort = group.createPort("input");
        	var outputPort = group.createPort("output");
            inputPort.attr({"cssClass": "blue_group_port"});
            outputPort.attr({"cssClass": "blue_group_port"});
        	this.add(group);
        }else{
        	if(type=="PRI2"){
        		type="PRI";
        	}
        	figure.setUserData(userData={group:group,type:type}); 
        	// create a command for the undo/redo support
            var command = new draw2d.command.CommandAdd(this, figure, x, y);
            this.getCommandStack().execute(command);
        }
		
        /*figure.getPorts().each(function(i,port){
            port.setConnectionAnchor(new draw2d.layout.anchor.FanConnectionAnchor(port));
        });*/
    }
});

