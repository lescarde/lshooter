(function(scope) {
    function App() {
        this.initialize();

        console.log("inicia App");
    }

    var canvas      = App.prototype;
    var stage       = App.prototype;
    var cargador    = App.prototype;
    
    var rutaNave     = "assets/nave.png";
    var rutaMalo     = "assets/malo.png";
    var rutaFondo    = "assets/fondo.jpg";
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
        this.cargador.onComplete = function(){
            self.assetsCargados();
        }
        this.cargador.loadImagenes([rutaNave, rutaMalo, rutaFondo, rutaFondo]);

        console.debug(this.canvas);
    };
    
    App.prototype.assetsCargados = function(){
        console.log('imágenes cargadas satisfactoriamente');
        console.debug(this.cargador);
    }
    
    scope.App = App;
}(window));

window.onload = function() {
    this.app = new App;

    console.log("Llamada inicio App");
};