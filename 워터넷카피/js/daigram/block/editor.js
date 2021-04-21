
/**
 * ======================================================================================================
 * 전역 변수 설정
 * ======================================================================================================
 */
 var app;
 $(document).ready(function () {
     app  = new example.Application();
     
     //app.view.installEditPolicy(new draw2d.policy.canvas.FadeoutDecorationPolicy());
     //app.view.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
     app.view.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
         createConnection: function(){
             var connection = new draw2d.Connection({
                 stroke:3,
                 outlineColor:"#303030",
                 color:"91B93E",
                 router:new draw2d.layout.connection.InteractiveManhattanConnectionRouter()
             });
             return connection;
         }
     }));
 
     // unmarshal the JSON document into the canvas
     // (load)
     var reader = new draw2d.io.json.Reader();
     /*reader.unmarshal(app.view, jsonDocument);
     
     var figures = app.view.getFigures(); 
     figures.each(function(i,figure){
         figure.setSelectable(false);
         figure.setDraggable(false);
     },false); 
 
     var lines = app.view.getLines(); 
     lines.each(function(i,line){
         line.setSelectable(false);
         line.setDraggable(false);
     },false); 
     
     var ports = app.view.getAllPorts();
     ports.each(function(i,port){
         port.setVisible(false);
     },false);*/
     selectDiagramBlock(app.view);
     app.view.getCommandStack().addEventListener(function(e){
         if(e.isPostChangeEvent()){
              var json = displayJSON(app.view);
              //console.log(json);
         }
     });
 
     $('#sortDiagramBlock').on('click', function(e){
         var selectedFeatures = app.view.getSelection().all.data;
         var featureX = 0;
         var verticeX = 0;
         
         /*var lBlockFeagre;
         var features = app.view.getFigures().data; 
         for(var i = 0;i<features.length;i++){
             var userData = features[i].getUserData();
             if(userData.group!=null&&userData.type=="L"){
                 lBlockFeagre = features[i];
             }
         }
         sortFeagure(lBlockFeagre);*/
         for(var i = 0;i<selectedFeatures.length;i++){
             var selectedFeature = selectedFeatures[i];
             if(selectedFeature.getConnections().data.length>0){
                 var conns = selectedFeature.getConnections().data[0];
                 var vertices = conns.getVertices().data;
                 for(var j = 0;j<vertices.length;j++){
                     if(i==0&&j==0){
                         verticeX = vertices[j].getX();
                     }
                 }
                 selectedFeature.setX(verticeX+50);
             }else{
                 if(i==0){
                     featureX = selectedFeature.getX();
                 }
                 selectedFeature.setX(featureX);
             }
         }
     });
     
     $('#saveDiagramBlock').on('click', function(e){
         var mgcCd = $("#3depth option:selected").val();
         if(mgcCd!=null&&mgcCd!=""&&confirm(inzLabel["msg.confirm.save"])){
             showWrapLoading();
             var content = displayJSON(app.view);
             var image = displayImage(app.view);
             var sendData = {"mgcCd":mgcCd+"","content":content+"","image":image+""};
             sendData = JSON.stringify(sendData);
             $.ajax({
                 type: "POST",
                 url:  '/diagram/block/ajax/saveDiagramBlock',
                 data: sendData,
                 dataType: "json",
                 contentType:"application/json;charset=UTF-8",
                 success:function(data){
                     var ports = app.view.getAllPorts().data;
                     for(var i = 0;i<ports.length;i++){
                         ports[i].setVisible(true);
                     }
                     alert(data.resultMsg);
                     hideWrapLoading();
                },
                error:function(request,status,error){
                     hideWrapLoading();
                     alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
             });
         }else{
             alert(inzLabel["pipe.msg.mgcCd"]);
         }
     });
 });
 
 function sortFeagure(_feagure){
     var featureX = _feagure.getX();
     var conns = _feagure.getConnections().data;
     for(var i = 0;i<conns.length;i++){
         var conn = conns[i];
         var feagure = conn.targetPort.parent;
         feagure.setX(featureX);
         sortFeagure(feagure);
     }
 }
 
 function displayJSON(canvas){
     var returnJson;
     var writer = new draw2d.io.json.Writer();
     writer.marshal(canvas,function(json){
         returnJson = JSON.stringify(json, null, 2)
         //console.log(json);
     });
     
     return returnJson;
 }
 
 function displayImage(canvas){
     var returnImage;
     /*var features = app.view.getFigures().data; 
     for(var i = 0;i<features.length;i++){
         if(!(features[i] instanceof draw2d.shape.composite.Raft)){
             var userData = features[i].getUserData();
             if(userData.group!=null&&userData.group=="TAG"){
                 features[i].setText("");
             }
         }
     }*/
     
     var ports = app.view.getAllPorts().data;
     for(var i = 0;i<ports.length;i++){
         ports[i].setVisible(false);
     }
     
     var writer = new draw2d.io.png.Writer();
     writer.marshal(canvas,function(png){
         returnImage = png;
         /*$('#canvas').hide();
         $('#canvasImg').attr('src',png);
         $('#canvasImg').show();*/
     });
     return returnImage;
 }
 
 function selectDiagramBlock(_view){
     showLoadingBar('#blockDiagram');
     var param = {};
     param = {
         "mgcCd" : mgcCd,
         "edit" : "true"
     };
     param = JSON.stringify(param);
     $.ajax({
         type: "POST",
         url:ctxPath+"/diagram/block/ajax/selectDiagramBlock",
         dataType : 'json',
         contentType : 'application/json;charset=UTF-8',
         data: param,
         error:function(request,status,error){
             alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
             hideLoadingBar('#blockDiagram');
         },
         success: function (data) {
             if(data.result!=null){
                 //_view.uninstallEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
                 var content = data.result.content;
                 var reader = new draw2d.io.json.Reader();
                 
                 var jsonArr = JSON.parse(content);
                 
                 for ( var i = 0; i < jsonArr.length; i ++ ){
                     jsonArr[i].alpha = 1;
                 }
                 
                 content = JSON.stringify(jsonArr);
                 
                 reader.unmarshal(app.view, content);
                 
                 //_view.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
             }
             hideLoadingBar('#blockDiagram');
         }
     });
 }
 