"use strict";
(function(){
    var cos = Math.cos,
        sin = Math.sin,
        atan2 = Math.atan2,
        sqrt = Math.sqrt,
        floor = Math.floor,
        PI = Math.PI;
    var DEGREE = PI / 180;

    // convert degrees to radians
    function deg2rad(deg) {
        return deg * DEGREE;
    }

    function rad2deg(rad) {
        return rad / DEGREE;
    }

    // replace JavaScript % operator because of sign conversion
    function mod(a, b) {
        return a - floor(a / b) * b;
    }

    // angle between two vectors in radians
    function angle(v1, v2) {
        var diff = v1.radians() - v2.radians();
        return atan2(sin(diff), cos(diff));
    }

    function dist(x1, y1, x2, y2) {
        // absolute distance between two points
        var dx = x1 - x2;
        var dy = y1 - y2;
        sqrt(dx * dx + dy * dy);
    }

    // Create a vector from an x,y position
    function Vector(x, y) {
        if (!this){
            return new Vector(x,y);
        }
        this.x = x;
        this.y = y;
    }

    Vector.fromPolar = function(radians, mag) {
        return new Vector(cos(radians) * mag, sin(radians) * mag);
    };
    Vector.fromPoint = function(pt) {
        return new Vector(pt.x, pt.y);
    };

    Vector.prototype.getX = function() {
        return this.x;
    };

    Vector.prototype.getY = function() {
        return this.y;
    };

    Vector.prototype.magnitude = function() {
        if (this._mag === undefined){
            this._mag = sqrt(this.x * this.x + this.y * this.y);
        }
        return this._mag;
    };

    Vector.prototype.radians = function() {
        if (this._rad === undefined){
            this._rad = atan2(this.y, this.x);
        }
        while (this._rad < 0) this._rad += PI * 2;
        while (this._rad > PI * 2) this._rad -= PI * 2;
        return this._rad;
    };
    Vector.prototype.degrees = function() {
        if (this._deg === undefined){
            this._deg = return rad2deg(this.radians());
        }
        return this._deg;
    };

    // Make magnitude equal to 1
    Vector.prototype.normalize = function normalize() {
        var mag = this.magnitude();
        if (mag === 0 || mag === 1) {
            return this;
        }
        return multiply(this, 1 / mag);
    };

    Vector.prototype.rotateTo = function rotateTo(degrees) {
        return Vector.fromPolar(degrees, this.magnitude());
    };

    Vector.prototype.rotate = function rotate(degrees) {
        var radians = this.radians() + deg2rad(degrees);
        var mag = this.magnitude();
        return new Vector(cos(radians) * mag, sin(radians) * mag);
    };

    Vector.prototype.rotateRads = function rotateRads(rads) {
        var newAngle = this.radians() + rads;
        var mag = this.magnitude();
        return new Vector(cos(newAngle) * mag, sin(newAngle) * mag);
    };

    Vector.prototype.add = function add(vec2) {
        return new Vector(this.x + vec2.x, this.y + vec2.y);
    };


    Vector.prototype.toString = function strv() {
        return '<' + this.x + ',' + this.y + '>';
    };

    window.Vector = Vector;

})();
