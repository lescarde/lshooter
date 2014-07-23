(function(scope) {
    console.log("inicia funcion Scope nave");

    function Nave(spriteSheet) {
        this.initialize(spriteSheet);
        console.log("inicia funcion Nave");
    }

    Nave.prototype = new createjs.BitmapAnimation()
    Nave.prototype.BitmapAnimation_init = Nave.prototype.initialize;

    var ancho = Nave.prototype;
    var alto = Nave.prototype;
    var explotando = Nave.prototype;

    Nave.prototype.initialize = function(spriteSheet) {
        this.BitmapAnimation_init(spriteSheet);

        var self = this;

        console.log("Ingreso Nave stage");

        this.gotoAndPlay("run");

        this.x = 256;
        this.y = 100;
        this.ancho = spriteSheet.getFrame(0).rect.width;
        this.alto = spriteSheet.getFrame(0).rect.height;

        this.snapTopixel = true;
        this.velocity = {
            x: 0,
            y: -15
        };
    }

    Nave.prototype.onTick = function() {
        this.velocity.y += 1;
        if (this.velocity.y < 0 || this.y < 500) {
            this.y += this.velocity.y;
        };
    }

    scope.Nave = Nave;
}(window));