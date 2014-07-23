(function(scope) {
    function Cargador() {
        this.initialize();
    };

    var cargadas = Cargador.prototype;
    var totales = Cargador.prototype;
    var onComplete = Cargador.prototype;

    console.log("variables creadas");

    Cargador.prototype.initialize = function() {
        console.log("cargador general");
    };

    Cargador.prototype.loadImagenes = function(lista) {
        this.cargadas = 0;
        this.totales = lista.length;
        for (i = 0; i < this.totales; i++) {
            this.cargaImagen(lista[i]);
        }
        console.log("loadImagenes funciona" + " " + lista);
    };

    Cargador.prototype.cargaImagen = function(ruta) {
        var image = new Image();
        var self = this;

        this[ruta] = image;
        image.onload = function(e) {
            self.imagenCargada();
        }
        image.src = image.url = ruta;
        console.log("cargaImagen funciona" + " " + image.src);
    };

    Cargador.prototype.imagenCargada = function() {
        this.cargadas++;
        if (this.cargadas == this.totales) {
            if (this.onComplete) {
                this.onComplete();
            } else {
                console.log("onComplete no definida en App");
            }
        }
        console.log("imagenCargada funciona");
    };

    scope.Cargador = Cargador;
}(window));