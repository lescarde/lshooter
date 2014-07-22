(function(scope) {
    function App() {
        this.initialize();
    };

    var canvas = App.prototype;
    var stage = App.prototype;
    var cargador = App.prototype;
    var fondo = App.prototype;
    var nave = App.prototype;

    var rutaNave = "assets/nave.png";
    var rutaMalo = "assets/malo.png";
    var rutaFondo = "assets/fondo.jpg";
    var rutaDispNave = "assets/DisparoNave.png";

    App.prototype.initialize = function() {

        var self = this;

        this.canvas = document.createElement("canvas");
        this.canvas.width = 600;
        this.canvas.height = 600;

        var contenedor = document.getElementById("juego");
        contenedor.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas);

        this.cargador = new Cargador();
        this.cargador.onComplete = function() {
            self.assetsCargados();
            console.log("assets cargados");
        };
        this.cargador.loadImagenes([rutaNave, rutaMalo, rutaFondo, rutaDispNave]);
    };

    App.prototype.assetsCargados = function() {
        console.log("imágenes cargadas 38");
        console.debug(this.cargador);

        var bmp = this.cargador[rutaFondo];
        this.fondo = new createjs.Bitmap(bmp);

        this.fondo.alpha = 0.8;
        this.stage.addChild(this.fondo);

        console.log("fondo cargado");
        console.debug(this.fondo);

        var self = this;

        createjs.Ticker.setFPS(30);

        console.debug(createjs.Ticker);
        createjs.Ticker.addEventListener("tick", function(e) {
            self.Tick();

            console.log("self cargado");
            console.debug(self);
        });
    }

    App.prototype.Tick = function() {
        this.stage.update();
        console.log("Tick update");
    };

    scope.App = App;
}(window));

window.onload = function() {
    this.app = new App();
}