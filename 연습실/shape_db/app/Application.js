// declare the namespace for this example
var example = {};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
example.Application = Class.extend(
{
    NAME : "example.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
        아래는 생성자...마냥...생성 
    */
    init : function()
    {
         //canvas 생성
	      this.view    = new example.View("canvas");
          //toolbar
          this.toolbar = new example.Toolbar("toolbar",  this.view );
          //text에서 속성 넣어줌
        //   this.properties = new example.Properties("properties",this.view);
	}


});
