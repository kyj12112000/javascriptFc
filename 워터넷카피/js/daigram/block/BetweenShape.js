
BetweenShape = draw2d.shape.node.Between.extend({

	NAME: "BetweenShape",
	
    init : function(attr)
    {
		this._super($.extend({bgColor:"#2CD451", color:"#ffffff", stroke:1, radius:3,padding:10,resizeable:true},attr));
		this.setWidth(100);
		this.setHeight(20);
		/*this.classLabel = new draw2d.shape.basic.Label({
            text:"블록명", 
            stroke:0,
            fontColor:"#000000",  
            bgColor:"#2CD451", 
            radius: this.getRadius(), 
            padding:10,
            resizeable:true,
			editor:new draw2d.ui.LabelInplaceEditor({
				onCommit: $.proxy(function(value){
				},this),
				onCancel: function(){
				}
			})
        });
		
		this.add(this.classLabel, new draw2d.layout.locator.CenterLocator());*/
		this.setUserData(userData={blockNm:"블록명",tagId:"111"});
		this.context();
    },
     
 
	addPorts: function()
    {
        var port=new draw2d.OutputPort();
		var locator=draw2d.layout.locator.RightLocator();
		this.addPort(port,locator);
		
		var port=new draw2d.InputPort();
		var locator=draw2d.layout.locator.LeftLocator();
		this.addPort(port,locator);
    },	
	context: function()
    {
        this.on("contextmenu", function(emitter, event){
             $.contextMenu({
                 selector: 'body', 
                 events:
                 {  
                     hide:function(){ $.contextMenu( 'destroy' ); }
                 },
                 callback: $.proxy(function(key, options) 
                 {
                    switch(key){
                    case "add port":
						emitter.addPorts();
						emitter.setVisible(false);
						emitter.setVisible(true);
                        break;
					case "add tag":
						emitter.tagLabel = new draw2d.shape.basic.Label({
							text:"태그", 
							stroke:0,
							fontColor:"#5856d6",  
							bgColor:"#dbddde", 
							radius: emitter.getRadius(), 
							padding:10,
							resizeable:true,
							editor:new draw2d.ui.LabelInplaceEditor({
								onCommit: $.proxy(function(value){
								},this),
								onCancel: function(){
								}
							})
						});
						emitter.tagLabel.setUserData(userData={tagId:"111"});
						emitter.add(emitter.tagLabel, new draw2d.layout.locator.DraggableLocator());
                        break;
                    case "delete port":
                        setTimeout(function(){
							var ports = app.view.getAllPorts();
							var allCnt = ports.getSize();
							if(allCnt>1){
								for(var i = allCnt-1;0<=i;i--){
									var port = ports.get(i);
									if(emitter==port.getParent()){
										if(i==allCnt-1){
											port.removePort(port);
										}
									}
								}
							}
                        },10);
                        break;
                    default:
                        break;
                    }
                 
                 },this),
                 x:event.x,
                 y:event.y,
                 items: 
                 {
                     "add port": {name: "포트추가"},
					 "add tag": {name: "태그 추가"}
                     //"delete port": {name: "delete port"}
                 }
             });
         });
    }

});
