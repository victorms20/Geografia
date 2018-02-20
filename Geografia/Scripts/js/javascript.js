function pintarMapa() {
    document.getElementById("h4Comarca").innerHTML = "<h4>Comarca: </h4>";
    document.getElementById("h4Capital").innerHTML = "<h4>Capital: </h4>";


    for(var i = 1; i<41;i++){
        var IString = i.toString();
                  //  alert(document.getElementById("map").contentDocument);
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseover', function(e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
            document.getElementById("h4Comarca").innerHTML = "<h4>Comarca: </h4>" + '<div class="div_blanc_repas"><h4 id="h4style">' + e.currentTarget.dataset.comarca + "</h4></div>";
            document.getElementById("h4Capital").innerHTML = "<h4>Capital: </h4>" + '<div class="div_blanc_repas"><h4 id="h4style">' + e.currentTarget.dataset.capital + "</h4></div>";
        });
                    
        document.getElementById("map").contentDocument.getElementById("path"+IString).addEventListener('mouseout', function(e) {
            e.currentTarget.setAttribute('style', "fill: #086800; stroke-width: 1");
            document.getElementById("h4Comarca").innerHTML = "<h4>Comarca: </h4>" + '<div class="div_blanc_repas">' + "</div>";
            document.getElementById("h4Capital").innerHTML = "<h4>Capital: </h4>" + '<div class="div_blanc_repas">' + "</div>";
        });   
        
    }
}

window.onload = pintarMapa;