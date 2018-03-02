//Creació div's per la pàgina Resultats

$(document).ready(function () {
    var diminutivo_act1 = "";
    var diminutivo_act2 = "";
    var diminutivo_act3 = "";

    //Agafar els 3 primers div's per posar-los en el TOP 3
    var nickname_1 = $(".nickname").eq(0).text();
    var activitat_1 = $(".nomactivitat").eq(0).text();
    var nota_1 = $(".notaactivitat").eq(0).text();
    var data_1 = $('.dataactivitat').eq(0).text();

    var nickname_2 = $(".nickname").eq(1).text();
    var activitat_2 = $(".nomactivitat").eq(1).text();
    var nota_2 = $(".notaactivitat").eq(1).text();
    var data_2 = $('.dataactivitat').eq(1).text();

    var nickname_3 = $(".nickname").eq(2).text();
    var activitat_3 = $(".nomactivitat").eq(2).text();
    var nota_3 = $(".notaactivitat").eq(2).text();
    var data_3 = $('.dataactivitat').eq(2).text();


        //Mirar quina Activitat es i posar diminutiu
        if ($(".nomactivitat").eq(0).text() == "Activitat 1") {
            diminutivo_act1 = "A1";
        } else if ($(".nomactivitat").eq(0).text() == "Activitat 2") {
            diminutivo_act1 = "A2";
        } else if ($(".nomactivitat").eq(0).text() == "Activitat 3") {
            diminutivo_act1 = "A3";
        }

        if ($(".nomactivitat").eq(1).text() == "Activitat 1") {
            diminutivo_act2 = "A1";
        } else if ($(".nomactivitat").eq(1).text() == "Activitat 2") {
            diminutivo_act2 = "A2";
        } else if ($(".nomactivitat").eq(1).text() == "Activitat 3") {
            diminutivo_act2 = "A3";
        }

        if ($(".nomactivitat").eq(2).text() == "Activitat 1") {
            diminutivo_act3 = "A1";
        } else if ($(".nomactivitat").eq(2).text() == "Activitat 2") {
            diminutivo_act3 = "A2";
        } else if ($(".nomactivitat").eq(2).text() == "Activitat 3") {
            diminutivo_act3 = "A3";
        }


    //Activitat 1
    $(".nick1").text(nickname_1);
    $(".nota1").text(nota_1);

    var split1 = data_1.split(" ");
    $(".data1").text(split1[0]);

    $(".activitat1").text(diminutivo_act1);

    //Activitat 2
    $(".nick2").text(nickname_2);
    $(".nota2").text(nota_2);

    var split2 = data_2.split(" ");
    $(".data2").text(split2[0]);

    $(".activitat2").text(diminutivo_act2);

    //Activitat 3
    $(".nick3").text(nickname_3);
    $(".nota3").text(nota_3);

    var split3 = data_3.split(" ");
    $(".data3").text(split3[0]);

    $(".activitat3").text(diminutivo_act2);

    //Bucle posicions
    for (var i = 0; i <= 2; i++) {
        $(".posicion").eq(0).remove();
        $(".nickname").eq(0).remove();
        $(".nomactivitat").eq(0).remove();
        $(".notaactivitat").eq(0).remove();
        $('.dataactivitat').eq(0).remove();
    }

    var posicion = $(".posicion");

    for (var i = 0; i < posicion.length; i++) {
        posicion[i].innerHTML = i + 4;
    }
});


