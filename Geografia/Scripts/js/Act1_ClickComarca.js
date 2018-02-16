var arrayComarques = [];
function pintarMapa() {
    ompleArray();
    var spplitedPath = obtenirComarca();

    //For per afegir event listener a totes les comarques del svg
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        //Afegim Mouseover
        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('mouseover', function (e) {
            e.currentTarget.setAttribute('style', "fill: #ff7700");
           
        });

        //Afegim MouseOut
        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('mouseout', function (e) {
            e.currentTarget.setAttribute('style', "fill: #086800; stroke-width: 1");
            
        });

        //Afegim click Event
        document.getElementById("map").contentDocument.getElementById("path" + IString).addEventListener('click', function (e) {
            var a = e.currentTarget.dataset.comarca;
            comprovarComarca(a, spplitedPath);
        });

    }
}

function comprovarComarca(a,path) {
    var comarcaActual = document.getElementById("h3Comarca").textContent.substr(25);

    if (comarcaActual == a) {
        document.getElementById("map").contentDocument.getElementById(path).addEventListener('mouseover', function (e) {
            e.currentTarget.setAttribute('style', "fill: #12E700");
        });
        document.getElementById("map").contentDocument.getElementById(path).addEventListener('mouseout', function (e) {
            e.currentTarget.setAttribute('style', "fill: #12E700");
        });

    }
         
    else {
        alert("Bad");
    }
}

function obtenirComarca() {
    var llargadaArray = arrayComarques.length;
    //Creem un random
    var random = Math.floor(Math.random() * llargadaArray);

    var splitted = arrayComarques[random].split(";");

    document.getElementById("h3Comarca").innerHTML = "Clicka sobre la comarca: " + '<div class="div_blanc">' + splitted[1] + "</div>";

    return splitted[0];

}

function ompleArray() {
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        var com = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.comarca;

        arrayComarques.push("path" + IString + ";" +  com);

    }
}
window.onload = pintarMapa;