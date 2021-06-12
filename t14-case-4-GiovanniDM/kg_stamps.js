"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 4
   
   Filename: kg_stamps.js
   Author: Giovanni Munoz
   Date:   May 17, 2021
   

*/

// Custom stamp obj
function stamp(shape, size, shade) {
    this.shape = shape;
    this.size = size;
    this.shade = shade;
    this.posX;
    this.posY;
    this.rotate = 0;
}

// Custome game object
function game(shape, size, shade, tool) {
    this.currentShape = shape;
    this.currentSize = size;
    this.currentShade = shade;
    this.stamps = [];
    this.currentTool = tool;
}

//Method to empty stamps array
game.prototype.removeStamps = function () {
    this.stamps = [];
}

// Method to add stamp to stamps array
stamp.prototype.addToGame = function(game) {
    game.stamps.push(this);
}

window.addEventListener("load", function() {
    // References to page elements
    var shapeElements = document.getElementsByClassName("controlShape");
    var sizeElements = document.getElementsByClassName("controlSize");
    var shadeElements = document.getElementsByClassName("controlShade");
    var canvasElem = document.getElementById("canvas");
    var toolButtons = document.querySelectorAll("button.toolButtons");
    var addButton = document.getElementById("addStamp");
    var garbageIcon = document.getElementById("garbage");

    // Highlight selected options
    addButton.style.border = "5px insert rgba(121, 191, 121, 0.8)";
    addButton.style.backgroundColor = "rgba(121, 191, 121, 0.4)";
    addButton.style.boxShadow = "0px 0px 10px rgb(101, 101, 101)";
    
    shapeElements[0].style.outline = "2px dotted rgb(0, 78, 171)";
    sizeElements[1].style.outline = "2px dotted rgb(0, 78, 171)";
    shadeElements[4].style.outline = "2px dotted rgb(0, 78, 171)";

    // Create initial game values
    var myGame = new game("kg_stamp0.png", 100, 1, "addStamp");

    // Event handlers for shape controls
    for(var i =0; i < shapeElements.length; i++) {
        shapeElements[i].onclick = function() {
            myGame.currentShape = "kg_" + this.id + ".png";
            restoreShapes();
            highlightShape(this);
        };
    }
    // Event handlers for size controls
    for(var i =0; i < sizeElements.length; i++) {
        sizeElements[i].onclick = function() {
            if(this.id === "size0") {
                myGame.currentSize = 40;
            } else if (this.id === "size1") {
                myGame.currentSize = 100;
            } else {
                myGame.currentSize = 160;
            }
            restoreSizes();
            highlightSize(this);
        };
    }

    // Event handlers for shading
    for(var i =0; i < shadeElements.length; i++) {
        shadeElements[i].onclick = function() {
            if(this.id === "shade10") {
                myGame.currentShade = 0.1;
            } else if (this.id === "shade30") {
                myGame.currentShade = 0.3;
            } else if (this.id === "shade50") {
                myGame.currentShade = 0.5;
            } else if (this.id === "shade70") {
                myGame.currentShade = 0.7;
            } else {
                myGame.currentShade = 1;
            }
            restoreShades();
            highlightShade(this);
        };
    }

    // Event handler for toolbar buttons
    for(var i =0; i < toolButtons.length; i++) {
        toolButtons[i].onclick = function() {
            myGame.currentTool = this.id;
            restoreButtons();
            highlightButton(this);
        };
    }

    //Event handler to clear canvas and stamps array
    garbageIcon.onclick = function() {
        myGame.removeStamps();
        canvasElem.removeChildren();
    };

    // When canvas is clicked, perform action
    canvasElem.onclick = function(e) {
        // Create stamp image
        if(myGame.currentTool === "addStamp") {
            var myStamp = new stamp(myGame.currentShape, myGame.currentSize, myGame.currentShade);
            myStamp.addToGame(myGame);

            // Create image object on canvas
            var imageObj = document.createElement("img");
            imageObj.style.position = "absolute";
            imageObj.className = "canvasStamp";
            imageObj.src = myStamp.shape;
            imageObj.style.opacity = myStamp.shade;
            imageObj.style.width = myStamp.size + "px";
            imageObj.style.height = "auto";
            imageObj.style.transform = "rotate(0deg)";
            imageObj.style.opacity = myStamp.shade;

            myStamp.posX = e.elementX();
            myStamp.posY = e.elementY();

            imageObj.style.left = myStamp.posX + "px";
            imageObj.style.top = myStamp.posY + "px";
            canvasElem.appendChild(imageObj);

            // When stamp image is clicked perform a tool action
            imageObj.onclick = function() {
                // Removes stamps
                if(myGame.currentTool === "removeStamp") {
                    canvasElem.removeChild(imageObj);
                }
                // Increase stamp size
                if(myGame.currentTool === "enlargeStamp") {
                    myStamp.size += 10;
                    this.style.width = myStamp.size + "px";
                }
                // Reduce stamp size
                if(myGame.currentTool === "shrinkStamp") {
                    myStamp.size -= 10;
                    this.style.width = myStamp.size + "px";
                }
                // Move stamp to left
                if(myGame.currentTool === "moveLeft") {
                    myStamp.posX -= 5;
                    this.style.left = myStamp.posX + "px";
                }
                // Move stamp to right
                if(myGame.currentTool === "moveRight") {
                    myStamp.posX += 5;
                    this.style.left = myStamp.posX + "px";
                }
                // Move stamp up
                if(myGame.currentTool === "moveUp") {
                    myStamp.posY -= 5;
                    this.style.top = myStamp.posY + "px";
                }
                // Move stamp down
                if(myGame.currentTool === "moveDown") {
                    myStamp.posY += 5;
                    this.style.top = myStamp.posY + "px";
                }
                // Rotate stamp right
                if(myGame.currentTool === "rotateRight") {
                    myStamp.rotate += 5;
                    this.style.transform = "rotate(" + myStamp.rotate + "deg)";
                }
                // Rotate stamp left
                if(myGame.currentTool === "rotateLeft") {
                    myStamp.rotate -= 5;
                    this.style.transform = "rotate(" + myStamp.rotate + "deg)";
                }
                // Lighten shade of stamp
                if(myGame.currentTool === "lighten") {
                    myStamp.shade -= 0.1;
                    this.style.opacity = myStamp.shade;
                }
                // Darken shade of stamp
                if(myGame.currentTool === "darken") {
                    myStamp.shade += 0.1;
                    this.style.opacity = myStamp.shade;
                }
            };
        }
    };

    // Remove highlighting from shape controls
    function restoreShapes() {
        for(var i =0; i < shapeElements.length; i++) {
            shapeElements[i].style.outline = "";
        }
    }
    // Highlight the currently selected shape control
    function highlightShape(obj) {
        obj.style.outline = "2px dotted rgb(0, 78, 171)";
    }
    // Remove highlighting from size controls
    function restoreSizes() {
        for(var i =0; i < sizeElements.length; i++) {
            sizeElements[i].style.outline = "";
        }
    }
    // Highlight currently selected size control
    function highlightSize(obj) {
        obj.style.outline = "2px dotted rgb(0, 78, 171)";
    }
    // Remove highlighting from shade controls
    function restoreShades() {
        for(var i =0; i < shadeElements.length; i++) {
            shadeElements[i].style.outline = "";
        }
    }
    // Highlight the currently selected shade control
    function highlightShade(obj) {
        obj.style.outline = "2px dotted rgb(0, 78, 171)";
    }
    // Remove highlighting from stamp tools
    function restoreButtons() {
        for(var i =0; i < toolButtons.length; i++) {
            toolButtons[i].style.boxShadow = "";
            toolButtons[i].style.border = "5px outset rgba(121, 121, 121, 0.8)";
            toolButtons[i].style.backgroundColor = "";
        }
    }
    // Highlight currently selected stamp tool
    function highlightButton(obj) {
        obj.style.boxShadow = "0px 0px 10px rgb(101, 101, 101)";
        obj.style.border = "5px inset rgba(121, 191, 121, 0.8)";
        obj.style.backgroundColor = "rgba(121, 191, 121, 0.4)";
    }
});


/*---- Added Methods ---*/

// Method to return the x-coordinate of a mouse click within an element
Event.prototype.elementX = function() {
   var rectObject = this.target.getBoundingClientRect();
   return this.clientX - rectObject.left;
};

// Method to return the y-coordinate of a mouse click within an element
Event.prototype.elementY = function() {
   var rectObject = this.target.getBoundingClientRect();
   return this.clientY - rectObject.top;
};
      
/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};   

