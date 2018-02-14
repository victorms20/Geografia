function pintarMapa() {


    for(var i = 1; i<42;i++){
        var IString = i.toString();
                  //  alert(document.getElementById("map").contentDocument);
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseover', function(e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
            document.getElementById("h3Comarca").innerHTML = "Comarca: " + e.currentTarget.dataset.comarca;
            document.getElementById("h3Capital").innerHTML = "Capital: " + e.currentTarget.dataset.capital;
        });
                    
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseout', function(e) {
            e.currentTarget.setAttribute('style', "fill: #09e509; stroke-width: 1");
            document.getElementById("h3Comarca").innerHTML = "Comarca: ";
            document.getElementById("h3Capital").innerHTML = "Capital: ";
        });   
        
    }
}

//Funcio Activitat 1: Apareix un nom de comarca i has de clicar sobre ella.
function activitat1 (){
    
}

window.onload = pintarMapa;