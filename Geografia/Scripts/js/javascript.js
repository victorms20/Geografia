function pintarMapa () {
    for(var i = 1; i<42;i++){
        var IString = i.toString();
                  //  alert(document.getElementById("map").contentDocument);
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseover', function(e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
        });
                    
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseout', function(e) {
            e.currentTarget.setAttribute('style', "fill: #09e509; stroke-width: 1");
        });   
                    
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('click',
        function(e){
        alert("Nom Comarca: " + e.currentTarget.dataset.comarca + " Capital: " + e.currentTarget.dataset.capital);          
        });
        
    }
}

//Funcio Activitat 1: Apareix un nom de comarca i has de clicar sobre ella.
function activitat1 (){
    
}

window.onload = pintarMapa;