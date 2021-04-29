example.PropertyPane = Class.extend({
	
	init:function(elementId, view)
	{
		this.html = $("#"+elementId);
		// console.log(this.html);
		this.view = view;
		// console.log(this.view);

		// Databinding: helper attributes for the databinding
		this.selectedFigure = null;
		this.updateCallback = null;

        view.on("select", $.proxy(this.onSelectionChanged,this));
    },

	/**
	 * @method
	 * Called if the selection in the canvas has been changed. You must register this
	 * on the canvas to receive this event.
	 *
     * @param {draw2d.Canvas} emitter
     * @param {Object} event
     * @param {draw2d.Figure} event.figure
	 */
	onSelectionChanged : function(emitter, event)
	{
		// Databinding: deregister the old update listener
		if(this.selectedFigure!==null && this.updateCallback !==null){
			this.selectedFigure.off(this.updateCallback);
		}
		// console.log(event.figure);
		this.selectedFigure = event.figure;
		
        this.html.html("");
        if(event.figure instanceof draw2d.shape.node.Node){
            // console.log(1);
        	this.showPropertiesOpAmp(event.figure);
        }
	},


	/**
	 * @method
	 * Called if the selection in the canvas has been changed. You must register this
	 * on the canvas to receive this event.
	 * 
	 * @param {draw2d.Figure} figure
	 */
	showPropertiesOpAmp : function(figure)
	{
        // Set some good defaults
        // (better you create  new class and set the defaults in the init method)
        var userData = figure.getUserData();
        // console.log(userData);
        if(userData===null){
          figure.setUserData(userData={name:""});   
        }
        
        // simple x/y coordinate display
        //
        this.html.append(
                '<div id="property_position_container" class="panel panel-default">'+
                ' <div class="panel-heading " >'+
                '     Position'+
                '</div>'+
                ' <div class="panel-body" id="position_panel">'+
                '   <div class="form-group">'+
                '       <div class="input-group" ></div> '+
                '       x <input id="property_position_x" type="text" class="form-control"/><br>'+
                '       y <input id="property_position_y" type="text" class="form-control"/>'+
                '   </div>'+
                ' </div>'+
                '</div>'+
                
                '<div id="property_position_container" class="panel panel-default">'+
                ' <div class="panel-heading " >'+
                '     Custom Property'+
                '</div>'+
                ' <div class="panel-body" id="userdata_panel">'+
                '   <div class="form-group">'+
                '       <div class="input-group" ></div> '+ 
                '       Value <input id="property_name" type="text" class="form-control" value="'+figure.getUserData().name+'"/>'+
                '   </div>'+
                ' </div>'+
                '</div>' +
				`<input type='checkbox' name="fff" id='순시유량' value='순시유량'/> 순시유량 <br>
				<input type='checkbox' name="fff" id='적산유량' value='적산유량'/> 적산유량 <br>
				<input type='checkbox' name="fff" id='수압' value='수압'/> 수압 <br>
				<input type='checkbox' name="fff" id='야간최소유량' value='야간최소유량'/> 야간최소유량<br>
				<input type='checkbox' name="fff" id='탁도' value='탁도'/> 탁도<br>
				<input type='checkbox' name="fff" id='pH' value='pH'/> pH<br>
				<input type='checkbox' name="fff" id='잔류염소' value='잔류염소'/> 잔류염소<br>
				<input type='checkbox' name="fff" id='전기전도도' value='전기전도도'/> 전기전도도<br>
				<input type='checkbox' name="fff" id='수온' value='수온'/> 수온<br>

				`);
        
    	// Databinding: Figure --> UI
        //
        var isInUpdate=false;
    	figure.on("move",function(){
            // console.log("됨");
    		if(isInUpdate) return;
    		isInUpdate = true; // avoid recursion
    		$("#property_position_x").val(figure.getPosition().x);
       		$("#property_position_y").val(figure.getPosition().y);
       		isInUpdate=false;
       	});
    	
    	// Databinding: UI --> Figure
        //
    	$("#position_panel input").on("change", function(){
    	    // with undo/redo support
    	    var cmd = new draw2d.command.CommandMove(figure);
    	    cmd.setPosition(parseInt($("#property_position_x").val()),parseInt($("#property_position_y").val()));
    	    figure.getCanvas().getCommandStack().execute(cmd);
    	});
    	$("#property_name").on("change", function(){
    		figure.getUserData().name=$("#property_name").val();
    	});


        var cnt = 0;
		$("[name='fff']").on("click", function(){
            console.log(this.value);
			// var testcmd = new draw2d.command.CommandAdd(this, figure, x, y);
            var table;
            console.log(figure.getChildren());
            if(figure.getChildren().data.length === 1) {
                 table = new draw2d.shape.layout.TableLayout();
                figure.add(table);
            } else {
                table = figure.getChildren().data[1];
            }

            
            $()
            //TODO: checked unchecked
            //TODO: table가 있는지 없는지 어떻게 함
            console.log($(this).is(":checked"))
            cnt++;
            if($(this).is(":checked")) {
                // table.addRow(new draw2d.shape.basic.Label({text: "test"+ cnt}, {row: 1}));
                table.addRow("x", "132", "123","x");
            } else {
                console.log('delete');
            }

            



            // fi
			// figure.add(new draw2d.shape.basic.Label({text: "test"}));
            // console.log(figure.getChildren());
			// figure.getCanvas().getCommandStack().execute();
		})

	}
});