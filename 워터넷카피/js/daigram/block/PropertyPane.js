
example.PropertyPane = Class.extend({
	
	init:function(elementId, view)
	{
		this.html = $("#"+elementId);
		this.view = view;

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
		
		this.selectedFigure = event.figure;
		
        this.html.html("");
        
        this.showPropertiesOpAmp(event.figure);

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
        if(userData===null){
          figure.setUserData(userData={name:"",group:""});   
        }
        // simple x/y coordinate display
		//var addPort = this.setAddPortHtml(figure);
		if(figure instanceof draw2d.shape.basic.Label){
			var group = figure.userData.group;
			var position = this.setPositionHtml(figure);
			var color = this.setColorHtml(figure);
			if(group=="TAG"){
				var addTag = this.setAddTagHtml(figure);
				this.html.append(position, color,addTag);
			}else{
				this.html.append(position,color);
			}
		}else if(figure instanceof draw2d.Connection){
			var lineColor = this.setLineColorHtml(figure);
			this.html.append(lineColor);
		}
        jscolor.bind();
    	// Databinding: Figure --> UI
        //
        var isInUpdate=false;
        figure.on("click",function(){
    		var tagInfos = figure.userData.tagInfo;
    		if(tagInfos==null||tagInfos.length==0){
    			getTagInfo();
    		}
       	});
        
    	figure.on("move",function(){
    		if(isInUpdate) return;
    		isInUpdate = true; // avoid recursion
    		$("#property_position_x").val(figure.getPosition().x);
       		$("#property_position_y").val(figure.getPosition().y);
			$("#property_resize_width").val(figure.getWidth());
       		$("#property_resize_height").val(figure.getHeight());
       		isInUpdate=false;
       	});
		
		figure.on("resize",function(){
    		if(isInUpdate) return;
    		isInUpdate = true; // avoid recursion
    		$("#property_resize_width").val(figure.getWidth());
       		$("#property_resize_height").val(figure.getHeight());
       		isInUpdate=false;
       	});
    	
    	// Databinding: UI --> Figure
        //
    	$("#position_panel input").on("change", function(){
    	    // with undo/redo support
    		var x = $("#property_position_x").val();
			var y = $("#property_position_y").val();
    	    var cmdMove = new draw2d.command.CommandMove(figure);
    	    cmdMove.setPosition(parseInt(x),parseInt(y));
			cmdMove.execute();
    	});
		
		$("#resize_panel input").on("change", function(){
    	    // with undo/redo support
			var width = $("#property_resize_width").val();
			var height = $("#property_resize_height").val();
			var cmdResize = new draw2d.command.CommandResize(figure);
			cmdResize.setDimension(parseInt(width),parseInt(height));
			cmdResize.execute();
    	});
		
		$("#block_name").on("change", function(){
    		figure.getUserData().blockNm=$("#block_name").val();
			//figure.header.getChildren().get(0).text = $("#block_name").val();
			//figure.header.getChildren().get(0).setWidth(parseInt($("#property_position_x").val())+50);
			figure.text = $("#block_name").val();

    	});
    	$("#tag_id").on("change", function(){
    		figure.getUserData().tagId=$("#tag_id").val();
    	});
		$("#background_color").on("change", function(){
    		var color = "#"+$("#background_color").val();
			if(figure instanceof draw2d.shape.node.Node){
				figure.setBackgroundColor(color);
				if(figure.classLabel!=null){figure.classLabel.setBackgroundColor(color)};
				if(figure.tagLabel!=null){figure.tagLabel.setBackgroundColor(color)};
			}else{
				figure.setColor(color);
			}
    	});

		$("#text_color").on("change", function(){
    		var color = "#"+$("#text_color").val();
			if(figure.classLabel!=null){
				figure.classLabel.setFontColor(color)
			}else{
				figure.setFontColor(color);
			}
    	});
		
		$("#add_port").on("click", function(){
			figure.addPorts();
			figure.setVisible(false);
			figure.setVisible(true);
    	});
		
		$("#add_tag").on("click", function(){
			var tag_info_html =  '<input name="tag-sn" type="text" class="form-input"/>';
			tag_info_html += '<select name="calc-type" class="form-input"><option>+</option><option>-</option></select>';
			var tag_info = $("#tag-info");
			tag_info.append(tag_info_html);
			/*figure.tagLabel = new draw2d.shape.basic.Label({
				text:"태그", 
				stroke:0,
				fontColor:"#5856d6",  
				bgColor:"#dbddde", 
				radius: figure.getRadius(), 
				padding:10,
				resizeable:true,
				editor:new draw2d.ui.LabelInplaceEditor({
					onCommit: $.proxy(function(value){
					},this),
					onCancel: function(){
					}
				})
			});
			figure.tagLabel.setUserData(userData={tagId:"111"});
			figure.add(figure.tagLabel, new draw2d.layout.locator.DraggableLocator());*/
    	});
		
		$("#delete_tag").on("click", function(){
			var tagLength = $("input[name=tag-sn]").length;
			if(tagLength>1){
				var idx = tagLength-1;
				$("input[name=tag-sn]:eq(" + idx + ")").remove();
				$("select[name=calc-type]:eq(" + idx + ")").remove();
			}
    	});
		
		var getTagInfo = function getTagInfo(){
			var userData = figure.getUserData();
			userData.tagInfo = [];
			console.log("==========================getTagInfo=================================");
			$("input[name=tag-sn]").each(function(idx){ 
				var tagSn = $(this).val();
				if(tagSn!=null&&tagSn!==""){
					var param = {};
					param = {
						"tagSn" : tagSn	
					};
					console.log("tagSn::"+tagSn);
					$.ajax({
						type : "POST",
						data : param,
						url:ctxPath+"/ajax/tag/selectTagInfo",
						success : function (data){
							var tagInfo = data.tag;
							var calcType = $("select[name=calc-type]:eq(" + idx + ") > option:selected").val() ;
							if(tagInfo!=null){
								userData.tagInfo.push({
									"IDX":idx
									,"TAG_SN":tagSn
									,"TAG_SE_CD":tagInfo.tagSeCd
									,"TAG_SE_NM":tagInfo.tagSeNm
									,"TAG_DESC":tagInfo.tagDesc
									,"CALC_TYPE":calcType
								});
							}else{
								$(this).val("");
								//alert("태그정보가 없습니다.");
								console.log("태그정보가 없습니다.");
								return false;
							}
						},error: function (jqXHR, textStatus, errorThrown) {
				        	console.log("조회 실패했습니다.");
				        }
					});
				}
			});
    	};
    	
    	$("#tag-form").off();
    	$("#tag-form").on("mouseleave",getTagInfo);
    	
    	//$("#div_editor").off();
		//$("#div_editor").on("click",getTagInfo);
		//$("#tag-form > button").on("click",getTagInfo);
    	//$(".TableShape").on("click",getTagInfo);
    	
		/*
    	$("#tag-info > .form-input").off("change");
		$(document).on("change","#tag-info > .form-input",function(){
			var userData = figure.getUserData();
			userData.tagInfo = [];
			$("input[name=tag-sn]").each(function(idx){ 
				var tagSn = $(this).val();
				if(tagSn!=null&&tagSn!==""){
					var param = {};
					param = {
						"tagSn" : tagSn	
					};
					console.log("tagSn::"+tagSn);
					$.ajax({
						type : "POST",
						data : param,
						url:ctxPath+"/ajax/tag/selectTagInfo",
						success : function (data){
							var tagInfo = data.tag;
							var calcType = $("select[name=calc-type]:eq(" + idx + ") > option:selected").val() ;
							if(tagInfo!=null){
								userData.tagInfo.push({
									"TAG_SN":tagSn
									,"TAG_SE_CD":tagInfo.tagSeCd
									,"TAG_SE_NM":tagInfo.tagSeNm
									,"TAG_DESC":tagInfo.tagDesc
									,"CALC_TYPE":calcType
								});
							}else{
								$(this).val("");
								alert("태그정보가 없습니다.");
								return false;
							}
						},error: function (jqXHR, textStatus, errorThrown) {
				        	console.log("조회 실패했습니다.");
				        }
					});
				}
			});
			//this.removeEventListener("change",arguments.callee);//함수 실행 후 제거
			//console.log("userData=="+JSON.stringify(userData));
    	});*/
	},
	setPositionHtml : function(figure)
	{
		var layer =  '<div id="property_position_container" class="panel panel-default">'+
		' <div class="panel-heading " >'+
		'     '+inzLabel["diagram.loc"]+
		'</div>'+
		' <div class="panel-body" id="position_panel">'+
		'   <div class="form-group">'+
		'       <div class="input-group" ></div> '+
		'       x <input id="property_position_x" type="text" class="form-input"/><br>'+
		'       y <input id="property_position_y" type="text" class="form-input"/><br>'+
		'   </div>'+
		' </div>'+
		'</div>'+
		'</div>';
		return layer
	},	setColorHtml : function(figure)
	{ 
		var bgColor = figure.getBackgroundColor();
		var fColor = figure.getFontColor();
		bgColor = rgba2hex('rgba('+bgColor.red+','+bgColor.green+','+bgColor.blue+')');
		fColor = rgba2hex('rgba('+fColor.red+','+fColor.green+','+fColor.blue+')');
		var layer =  '<div id="property_position_container" class="panel panel-default">'+
		' <div class="panel-heading " >'+
		'     '+inzLabel["diagram.color"]+
		'</div>'+
		' <div class="panel-body" id="userdata_panel">'+
		'   <div class="form-group">'+
		'       <div class="input-group" ></div> '+ 
		'       '+inzLabel["diagram.backColor"]+' <input id="background_color" value="'+bgColor+'" class="form-input jscolor {position:\'right\',borderColor:\'#FFF #666 #666 #FFF\',insetColor:\'#666 #FFF #FFF #666\',backgroundColor:\'#CCC\'}"><br>'+
		'       '+inzLabel["diagram.textColor"]+' <input id="text_color" value="'+fColor+'" class="form-input jscolor {position:\'right\',borderColor:\'#FFF #666 #666 #FFF\',insetColor:\'#666 #FFF #FFF #666\',backgroundColor:\'#CCC\'}">'+
		'   </div>'+
		' </div>'+
		'</div>'
		return layer
	},
	setLineColorHtml : function(figure)
	{ 
		var color = figure.getColor();
		color = rgba2hex('rgba('+color.red+','+color.green+','+color.blue+')');
		var layer =  '<div id="property_position_container" class="panel panel-default">'+
		' <div class="panel-heading " >'+
		'     '+inzLabel["diagram.color"]+
		'</div>'+
		' <div class="panel-body" id="userdata_panel">'+
		'   <div class="form-group">'+
		'       <div class="input-group" ></div> '+ 
		'       '+inzLabel["diagram.backColor"]+' <input id="background_color" value="'+color+'" class="form-input jscolor {position:\'right\',borderColor:\'#FFF #666 #666 #FFF\',insetColor:\'#666 #FFF #FFF #666\',backgroundColor:\'#CCC\'}"><br>'+
		'   </div>'+
		' </div>'+
		'</div>'
		return layer
	},
	/*,
	setAddPortHtml : function(figure)
	{
		var layer =  '<div id="property_position_container" class="panel panel-default">'+
		' <div class="panel-body" id="position_panel">'+
		'   <div class="form-group">'+
		'       <div class="input-group" ></div> '+
		'       <button id="add_port" class="gray">포트 추가</button>'+
		'   </div>'+
		' </div>'+
		'</div>'+
		'</div>';
		return layer
	},*/
	setAddTagHtml : function(figure)
	{
		var layer = "";
		var tagInfos = figure.userData.tagInfo;
		
		layer =  '<div id="property_position_container" class="panel panel-default">'+
		' <div class="panel-body" id="position_panel">'+
		'   <div id="tag-form" class="form-group">'+
		'       <div id="tag-info" class="input-group" >';
		if(tagInfos!=null&&tagInfos.length>0){
			tagInfos = sortArrayByKey(tagInfos,"IDX");
			for(var i in tagInfos){
				var tagInfo = tagInfos[i];
				var tagSn = tagInfo.TAG_SN;
				var calcType = tagInfo.CALC_TYPE;
				var selectedPlus="";
				var selectedMinus="";
				console.log("tagSn::"+tagSn);
				if(calcType=="+"){
					selectedPlus = "selected";
				}else{
					selectedMinus = "selected";
				}
				layer +='<input name="tag-sn" type="text" class="form-input" value="'+tagSn+'"/>'+
						'<select name="calc-type" class="form-input"><option value="+"'+selectedPlus+'>+</option><option value="-"'+selectedMinus+'>-</option></select>';
			}
		}else{
			var tagSn = figure.getText();
			layer += '<input name="tag-sn" type="text" class="form-input" value="'+tagSn+'"/>'+
					 '<select name="calc-type" class="form-input"><option value="+">+</option><option value="-">-</option></select>';
		}
		layer +='</div> '+
		'       <button id="add_tag" class="form-input">'+inzLabel["pipe.addTag"]+'</button>'+
		'       <button id="delete_tag" class="form-input">'+inzLabel["pipe.dltTag"]+'</button>'+
		' </div>'+
		'</div>'+
		'</div>';
		
		return layer
	}
});