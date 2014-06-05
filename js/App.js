console.log('hola 1');
(function(scope) {
    function App() {
        this.initialize();

        console.log("inicia App");
    }

    var canvas = App.prototype;
    var stage = App.prototype;

    App.prototype.initialize = function() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 600;
        this.canvas.height = 600;

        var contenedor = document.getElementById("juego");
        contenedor.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas);

        console.debug(this.canvas);
    };
    scope.App = App;
}(window));

window.onload = function() {
    console.log('hola mundo');
    this.app = new App;

    console.log("Llamada inicio App");
};