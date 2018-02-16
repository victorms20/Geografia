function pintarMapa() {
    document.getElementById("h3Comarca").innerHTML = "Comarca: " + '<div class="div_blanc">' + "</div>";
    document.getElementById("h3Capital").innerHTML = "Capital: " + '<div class="div_blanc">' + "</div>";


    for(var i = 1; i<42;i++){
        var IString = i.toString();
                  //  alert(document.getElementById("map").contentDocument);
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseover', function(e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
            document.getElementById("h3Comarca").innerHTML = "Comarca: " + '<div class="div_blanc">' + e.currentTarget.dataset.comarca + "</div>";
            document.getElementById("h3Capital").innerHTML = "Capital: " + '<div class="div_blanc">' + e.currentTarget.dataset.capital + "</div>";
        });
                    
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseout', function(e) {
            e.currentTarget.setAttribute('style', "fill: #086800; stroke-width: 1");
            document.getElementById("h3Comarca").innerHTML = "Comarca: " + '<div class="div_blanc">' + "</div>";
            document.getElementById("h3Capital").innerHTML = "Capital: " + '<div class="div_blanc">' + "</div>";
        });   
        
    }
}

//Funcio Activitat 1: Apareix un nom de comarca i has de clicar sobre ella.
function activitat1 (){
    
}

window.onload = pintarMapa;