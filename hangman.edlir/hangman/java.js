"use strict";
// aanmaken van variabelen
var randomWoord = ["germany", "cyprus", "norway", "portugal", "belgium", "france", "switzerland", "denmark", "poland", "ukraine", "spain"],
    gekozenLetter, aantalLevens = 11,
    huidigeWoord, counterJuisteLetter = 0,
    aantalStreepjes, newDiv, index;
$(document).ready(function () {
    $("#gewonnen").hide();
    $("#verloren").hide();
    $("#fotoBalkBeneden").hide();
    $("#fotoBalkVerticaal").hide();
    $("#fotoSchuineBalk").hide();
    $("#fotoBalkBoven").hide();
    $("#fotoKleineBalkBoven").hide();
    $("#fotoHoofd").hide();
    $("#fotoTorso").hide();
    $("#fotoLinkerArm").hide();
    $("#fotoRechterArm").hide();
    $("#fotoLinkerBeen").hide();
    $("#fotoRechterBeen").hide();
    // start het spel bij het begin
    $("#StartSpel").click(function () {
        KiesRandomWoord();
        $("#intro").hide();
        TekenStreepjes()
    });
    // start het spel opnieuw wanneer je gewonnen hebt
    $("#SpeelOpnieuw").click(function () {
        KiesRandomWoord();
        UpdateStreepjes();
        $("#gewonnen").hide();
        $("#fotoBalkBeneden").hide();
        $("#fotoBalkVerticaal").hide();
        $("#fotoSchuineBalk").hide();
        $("#fotoBalkBoven").hide();
        $("#fotoKleineBalkBoven").hide();
        $("#fotoHoofd").hide();
        $("#fotoTorso").hide();
        $("#fotoLinkerArm").hide();
        $("#fotoRechterArm").hide();
        $("#fotoLinkerBeen").hide();
        $("#fotoRechterBeen").hide();
    });
    // start het spel opnieuw wanneer je verloren hebt
    $("#Restart").click(function () {
        KiesRandomWoord();
        UpdateStreepjes();
        $("#verloren").hide();
        $("#fotoBalkBeneden").hide();
        $("#fotoBalkVerticaal").hide();
        $("#fotoSchuineBalk").hide();
        $("#fotoBalkBoven").hide();
        $("#fotoKleineBalkBoven").hide();
        $("#fotoHoofd").hide();
        $("#fotoTorso").hide();
        $("#fotoLinkerArm").hide();
        $("#fotoRechterArm").hide();
        $("#fotoLinkerBeen").hide();
        $("#fotoRechterBeen").hide();
    });
    // alfabet knoppen
    $("#A").click(function () {
        gekozenLetter = "a";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#B").click(function () {
        gekozenLetter = "b";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#C").click(function () {
        gekozenLetter = "c";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#D").click(function () {
        gekozenLetter = "d";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#E").click(function () {
        gekozenLetter = "e";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#F").click(function () {
        gekozenLetter = "f";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#G").click(function () {
        gekozenLetter = "g";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#H").click(function () {
        gekozenLetter = "h";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#I").click(function () {
        gekozenLetter = "i";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#J").click(function () {
        gekozenLetter = "j";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#K").click(function () {
        gekozenLetter = "k";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#L").click(function () {
        gekozenLetter = "l";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#M").click(function () {
        gekozenLetter = "m";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#N").click(function () {
        gekozenLetter = "n";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#O").click(function () {
        gekozenLetter = "o";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#P").click(function () {
        gekozenLetter = "p";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#Q").click(function () {
        gekozenLetter = "q";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#R").click(function () {
        gekozenLetter = "r";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#S").click(function () {
        gekozenLetter = "s";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#T").click(function () {
        gekozenLetter = "t";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#U").click(function () {
        gekozenLetter = "u";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#V").click(function () {
        gekozenLetter = "v";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#W").click(function () {
        gekozenLetter = "w";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#X").click(function () {
        gekozenLetter = "x";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#Y").click(function () {
        gekozenLetter = "y";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
    $("#Z").click(function () {
        gekozenLetter = "z";
        ControleJuistOfFouteLetter();
        VolledigeWoordGeraden();
        Levens();
    });
});
// functie om een random woord uit de array te kiezen
function KiesRandomWoord() {
    huidigeWoord = randomWoord[Math.floor(Math.random() * randomWoord.length)];
    console.log(huidigeWoord);
}
// controle of de juiste letter van het woord geraden is
function ControleJuistOfFouteLetter() {
    if (huidigeWoord.includes(gekozenLetter)) {
        index = huidigeWoord.indexOf(gekozenLetter);
        PlaatsLetterOpStreepje(index, gekozenLetter);
        counterJuisteLetter++;
    } else {
        aantalLevens--;
        if (aantalLevens == 10) {
            $("#fotoBalkBeneden").show();
        }
        if (aantalLevens == 9) {
            $("#fotoBalkVerticaal").show();
        }
        if (aantalLevens == 8) {
            $("#fotoSchuineBalk").show();
        }
        if (aantalLevens == 7) {
            $("#fotoBalkBoven").show();
        }
        if (aantalLevens == 6) {
            $("#fotoKleineBalkBoven").show();
        }
        if (aantalLevens == 5) {
            $("#fotoHoofd").show();
        }
        if (aantalLevens == 4) {
            $("#fotoTorso").show();
        }
        if (aantalLevens == 3) {
            $("#fotoLinkerArm").show();
        }
        if (aantalLevens == 2) {
            $("#fotoRechterArm").show();
        }
        if (aantalLevens == 1) {
            $("#fotoRechterBeen").show();
        }
        if (aantalLevens == 0) {
            $("#fotoLinkerBeen").show();
        }
    }
}
// wanneer het volledige woord geraden geweest is
function VolledigeWoordGeraden() {
    if (huidigeWoord.length == counterJuisteLetter) {
        $("#gewonnen").show();
        counterJuisteLetter = 0;
    } else {
        $("#gewonnen").hide();
    }
}
// tekenen van de streepjes
function TekenStreepjes() {
    aantalStreepjes = huidigeWoord.length, newDiv;
    for (var i = 0; i < aantalStreepjes; i++) {
        newDiv = $("<div></div>").attr("id", "streepje" + i);
        newDiv.addClass("streepje");
        $("#aantalStreepjesWoord").append(newDiv);
    }
}
// streepjes verwijderen
function UpdateStreepjes() {
    $(".streepje").remove();
    TekenStreepjes();
}
// letter op streepje plaatsen
function PlaatsLetterOpStreepje(index, letter) {
    $("#streepje" + index).html(letter)
}
// als het aantal levens kleiner dan 1 is dan heeft de speler verloren
function Levens() {
    if (aantalLevens < 1) {
        $("#verloren").show();
        aantalLevens = 11;
    }
}
