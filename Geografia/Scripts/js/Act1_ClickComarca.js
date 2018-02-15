var arrayComarques = [];
function pintarMapa() {
    ompleArray();
    obtenirComarca();

    //For per afegir event listener a tots els svg's
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('mouseover', function (e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
           
        });

        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('mouseout', function (e) {
            e.currentTarget.setAttribute('style', "fill: #086800; stroke-width: 1");
            
        });

        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('click', function (e) {
            var a = e.currentTarget.dataset.comarca;
            var bool = comprovarComarca(a);
            if (bool) {
                e.currentTarget.setAttribute('style', "fill: #FFFFFF");
                e.currentTarget.addEventListener('mouseout', function (e) { });
            }
            else {
                e.currentTarget.setAttribute('style', "fill: #000000");
            }

        });

    }
}

function comprovarComarca(a) {
    var comarcaActual = document.getElementById("h3Comarca").textContent.substr(25);
    
    if (comarcaActual == a) {
        return true;
    }
    else {
        return false;
    }
}

function obtenirComarca() {
    var llargadaArray = arrayComarques.length;

    var random = Math.floor(Math.random() * llargadaArray);

    document.getElementById("h3Comarca").innerHTML = "Clicka sobre la comarca: " + '<div class="div_blanc">' + arrayComarques[random] + "</div>";

}

function ompleArray() {
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        var com = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.comarca;
        
        arrayComarques.push(com);

    }
}
window.onload = pintarMapa;