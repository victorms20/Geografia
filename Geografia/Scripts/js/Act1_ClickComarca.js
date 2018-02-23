//Array que conté totes les comarques i el seu "id de path"
var arrayComarques = [];
var contadorPositiu = 0;
var contadorNegatiu = 0;
var puntPerEncert = 2.4490243902439024390243902439024;
var suma = 0;

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
            //Cridem a la funcio per comprovar si el que hem clicat és correcte
            comprovarComarca(a, spplitedPath);
            //Pintem el marcador
            document.getElementById("marcador_encerts").innerHTML = "<h4> " + contadorPositiu + "/" + (contadorNegatiu + contadorPositiu) + " </h4 > ";
            suma = suma + puntPerEncert;
            document.getElementById("barraProgress1").setAttribute('style', "width: " + suma + "%")
            document.getElementById("progressBarra").innerHTML = suma.toFixed(0) + "%"
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
    if (llargadaArray > 0) {
        var random = Math.floor(Math.random() * llargadaArray);

        //Obtenim una comarca i el seu ID (path)
        var splitted = arrayComarques[random].split(";");

        document.getElementById("h3Comarca").innerHTML = "<h4>Clicka sobre la comarca: </h4>" + '<div class="div_blanc"><h4 id="h4style">' + splitted[1] + "</h4></div>";
        arrayComarques.splice(random, 1);
        var pathSplited = splitted[0];

        return pathSplited;
    }
    else {
        var notaFinal = (contadorPositiu * 10) / 41;
        notaFinal = notaFinal.toFixed(2);
        $('#notaFinal').html("<b>Has encertat " + contadorPositiu + ' de 41, la teva nota és: <span class="badge badge-secondary" >' + notaFinal + '</span ></b>');
        var punto = notaFinal.replace(".", ",");
        $("#notaActivitat1").val(punto);
        $('#modalFinal').modal('show');
        return;
    } 
}

function ompleArray() {
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();
        var com = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.comarca;

        arrayComarques.push("path" + IString + ";" + com);

    }
}
window.onload = pintarMapa;