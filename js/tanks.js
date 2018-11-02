"use strict";

function Main() {
var self = this;


    window.onload = function() {
        self.tank = document.getElementById("tank");

    };

    window.onkeypress = function(e) {
        //console.log(e.key);

        self.newTop = 0;
        self.newLeft = 0;
        self.movingTop = 0;
        self.movingLeft = 0;
        self.movingAction = "";

        if (e.key == "s") {
            self.movingTop = 10;
            self.movingAction = "top";
        }

        if (e.key == "w") {
            self.movingTop = -10;
            self.movingAction = "top";
        }

        if (e.key == "a") {
            self.movingLeft = -10;
            self.movingAction = "left";
        }

        if (e.key == "d") {
            self.movingLeft = 10;
            self.movingAction = "left";
        }

        if ( self.movingAction == "top") {
            self.top = getComputedStyle(self.tank, null).top.slice(0, -2);
            self.newTop = +self.top + self.movingTop + "px";
            self.tank.style.top = self.newTop;
        }

        if ( self.movingAction == "left") {
            self.left = getComputedStyle(self.tank, null).left.slice(0, -2);
            //self.newLeft = +self.left + self.movingLeft + "px";
            self.tank.style.transform = "rotate(" + self.movingLeft+"deg)";
        }



    }
}

function start() {
    return new Main();
}

start();