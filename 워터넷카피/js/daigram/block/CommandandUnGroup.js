
/**
 * @class
 * Command to group a given set of figures
 *
 * @extends draw2d.command.Command
 */
 draw2d.command.CommandGroup = draw2d.command.Command.extend(
    /** @lends draw2d.command.CommandGroup.prototype */
    {
    
    NAME: "draw2d.command.CommandGroup",
  
    /**
     * Create a group command for the given figure.
     *
     * @param {draw2d.util.ArrayList} figures the figures to group
     */
    init: function (canvas, figures) {
      this._super(draw2d.Configuration.i18n.command.groupShapes)
      if (figures instanceof draw2d.Selection) {
        this.figures = figures.getAll()
      }
      else {
        this.figures = figures
      }
  
      // figures which already part of an non "Group" composite will be removed from the set.
      // It is not possible to assign a figure to two different composites.
      //
      this.figures.grep(function (figure) {
        return figure.getComposite() === null
      })
  
      this.canvas = canvas
      
      var group = new draw2d.shape.composite.Group();
      var inputPort = group.createPort("input");
      var outputPort = group.createPort("output");
      
      var color = new draw2d.util.Color(252,140,3);
      inputPort.attr({
         "cssClass": "blue_group_port"
      });
      
      outputPort.attr({
          "cssClass": "blue_group_port"
      });
      
      inputPort.on("connect", function(emitterPort, obj){
          obj.connection.setColor("#9aa0a1");
          obj.connection.setStroke(1);
      });
      
      outputPort.on("connect", function(emitterPort, obj){
          obj.connection.setColor("#9aa0a1");
          obj.connection.setStroke(1);
      });
      
      this.group = group
    },
  
  
    /**
     * 
     * Returns [true] if the command can be execute and the execution of the
     * command modifies the model. e.g.: a CommandMove with [startX,startX] == [endX,endY] should
     * return false. The execution of this Command doesn't modify the model.
     *
     * @returns {Boolean} return try if the command modify the model or make any relevant changes
     **/
    canExecute: function () {
      return !this.figures.isEmpty()
    },
  
  
    /**
     * 
     * Execute the command the first time
     *
     **/
    execute: function () {
      this.redo()
    },
  
    /**
     * 
     * Undo the command
     *
     **/
    undo: function () {
      let _this = this
      this.figures.each(function (i, figure) {
        _this.group.unassignFigure(figure)
      })
  
      this.canvas.remove(this.group)
      this.canvas.setCurrentSelection(this.figures)
    },
  
    /**
     * 
     * Redo the command after the user has undo this command
     *
     **/
    redo: function () {
      let _this = this
      this.figures.each(function (i, figure) {
        _this.group.assignFigure(figure)
      })
  
      this.canvas.add(this.group)
      this.canvas.setCurrentSelection(this.group)
    }
  })
  