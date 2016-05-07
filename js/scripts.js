$(document).ready(function(){
    //Get the canvas & context 
    var c = $('.canvas-fluido');
    var ct = c.get(0).getContext('2d');
    var container = $(c).parent();
    
    //Ejecuta la fucnion al redimensionar la ventana
    $(window).resize( resizeCanvas );    
    
    //Ejecuta la funcion al cargar la pagina 
    resizeCanvas();
    
     
    function resizeCanvas(){
        c.attr('width', container.width());
        c.attr('height', container.height());
    }
})