(function(scope){
    function Cargador(){
        this.initialize();
        
        console.log('Inicia Cargador');
    }
    
    var cargadas = Cargador.prototype;
    var totales = Cargador.prototype;
    var onComplete = Cargador.prototype;
    
    Cargador.prototype.initialize = function(){
        console.log('cargador general');
        
    };
    Cargador.prototype.loadImagenes = function (lista){
        this.cargadas   = 0;
        this.totales    = lista.length;
        for(i = 0; i < this.totales; i++){
            this.cargaImagen(lista[i]);
        }
        console.log('Inicia loadImagenes');
    }
    
    Cargador.prototype.cargaImagen = function (){
        var self = this;
        var image = new image();
        this[ruta] = image;
        image.onload = function(e){
            self.imagenCargada();
        }
        image.src = image.url = ruta;
        console.log('inicia cargaImagenes');
    }
    
    Cargador.prototype.imagenCargada = function(){
        this.cargadas ++;
        if(this.cargadas == this.totales){
            if(this.onComplete){
                this.onComplete
            }else{
                console.log('onComplete no definida');
            }
        }
    
    }
});