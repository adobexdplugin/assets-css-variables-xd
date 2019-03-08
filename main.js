const {Rectangle, Color} = require("scenegraph");
const assets = require("assets");

function assetsCssVariables(selection) {

  let test = assets.colors.get();
  console.log(test);


  // Go to Plugins > Development > Developer Console to see this log output
  // console.log("Plugin command is running!");

  // Insert a red square at (0, 0) in the current artboard or group/container
  // var shape = new Rectangle();
  // shape.width = 100;
  // shape.height = 100;
  // shape.fill = new Color("#f00");
  // selection.insertionParent.addChild(shape);
}

module.exports = {
  commands: {
    myPluginCommand: assetsCssVariables
  }
};
