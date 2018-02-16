//Array que conté totes les comarques i el seu "id de path"
var arrayComarques = [];
var contadorPositiu = 0;
var contadorNegatiu = 0;

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
            spplitedPath = obtenirComarca();
        });
    }
}

function comprovarComarca(a, path) {
    var comarcaActual = document.getElementById("h3Comarca").textContent.substr(25);

    //Eliminem els event listsners de l'element clonant-lo
    var element = document.getElementById("map").contentDocument.getElementById(path);
    var new_element = element.cloneNode(true);
    element.parentNode.replaceChild(new_element, element);

    //PINTA AMB COLOR VERD O VERMELL SEGONS SI ÉS CORRECTE O NO
    if (comarcaActual == a) {
        document.getElementById("map").contentDocument.getElementById(path).setAttribute('style', "fill: #12E700");
        contadorPositiu++;
    }
    else {
        document.getElementById("map").contentDocument.getElementById(path).setAttribute('style', "fill: #E71000");
        contadorNegatiu++;
    }
}

function obtenirComarca() {
    var llargadaArray = arrayComarques.length;
    //Creem un random
    var random = Math.floor(Math.random() * llargadaArray);

    //Obtenim una comarca i el seu ID (path)
    var splitted = arrayComarques[random].split(";");

    document.getElementById("h3Comarca").innerHTML = "Clicka sobre la comarca: " + '<div class="div_blanc">' + splitted[1] + "</div>";
    arrayComarques.splice(random, 1);
    var pathSplited = splitted[0];

    return pathSplited;

}

function ompleArray() {
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        var com = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.comarca;

        arrayComarques.push("path" + IString + ";" +  com);

    }
}
window.onload = pintarMapa;