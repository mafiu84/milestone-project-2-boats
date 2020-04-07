//function to activate second question//

function setRange(Boat) {

    var dropbox = document.BoatConfigurator.Range;

    dropbox.options.length = 0;

    dropbox.options[dropbox.options.length] = new Option(' ', '0');

    if (Boat == "1" || Boat == "2") {

        dropbox.options[dropbox.options.length] = new Option('Shell', '1');

        dropbox.options[dropbox.options.length] = new Option('Sailaway', '2');

        dropbox.options[dropbox.options.length] = new Option('Sailaway lined', '3');

        dropbox.options[dropbox.options.length] = new Option('Fully fitted', '4');

    }
    setLength();
}
//function to activate third question//

function setLength() {
    var dropbox = document.BoatConfigurator.Length;

    dropbox.options.length = 0;

    dropbox.options[dropbox.options.length] = new Option(' ', '0');

    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "1") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '1');

        dropbox.options[dropbox.options.length] = new Option('45ft', '2');

        dropbox.options[dropbox.options.length] = new Option('50ft', '3');

        dropbox.options[dropbox.options.length] = new Option('57ft', '4');

        dropbox.options[dropbox.options.length] = new Option('60ft', '5');

        dropbox.options[dropbox.options.length] = new Option('65ft', '6');

        dropbox.options[dropbox.options.length] = new Option('70ft', '7');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "2") {

        dropbox.options[dropbox.options.length] = new Option('30ft', '8');

        dropbox.options[dropbox.options.length] = new Option('35ft', '9');

        dropbox.options[dropbox.options.length] = new Option('40ft', '10');

        dropbox.options[dropbox.options.length] = new Option('45ft', '11');

        dropbox.options[dropbox.options.length] = new Option('50ft', '12');

        dropbox.options[dropbox.options.length] = new Option('55ft', '13');

        dropbox.options[dropbox.options.length] = new Option('57ft', '14');

        dropbox.options[dropbox.options.length] = new Option('60ft', '15');

        dropbox.options[dropbox.options.length] = new Option('65ft', '16');

        dropbox.options[dropbox.options.length] = new Option('70ft', '17');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "3") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '18');

        dropbox.options[dropbox.options.length] = new Option('45ft', '19');

        dropbox.options[dropbox.options.length] = new Option('50ft', '20');

        dropbox.options[dropbox.options.length] = new Option('55ft', '21');

        dropbox.options[dropbox.options.length] = new Option('57ft', '22');

        dropbox.options[dropbox.options.length] = new Option('60ft', '23');

        dropbox.options[dropbox.options.length] = new Option('65ft', '24');

        dropbox.options[dropbox.options.length] = new Option('70ft', '25');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "4") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '26');

        dropbox.options[dropbox.options.length] = new Option('45ft', '27');

        dropbox.options[dropbox.options.length] = new Option('50ft', '28');

        dropbox.options[dropbox.options.length] = new Option('55ft', '29');

        dropbox.options[dropbox.options.length] = new Option('57ft', '30');

        dropbox.options[dropbox.options.length] = new Option('60ft', '31');

        dropbox.options[dropbox.options.length] = new Option('65ft', '32');

        dropbox.options[dropbox.options.length] = new Option('70ft', '33');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "1") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '34');

        dropbox.options[dropbox.options.length] = new Option('45ft', '35');

        dropbox.options[dropbox.options.length] = new Option('50ft', '36');

        dropbox.options[dropbox.options.length] = new Option('57ft', '37');

        dropbox.options[dropbox.options.length] = new Option('60ft', '38');

        dropbox.options[dropbox.options.length] = new Option('65ft', '39');

        dropbox.options[dropbox.options.length] = new Option('70ft', '40');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "2") {

        dropbox.options[dropbox.options.length] = new Option('50ft', '41');

        dropbox.options[dropbox.options.length] = new Option('57ft', '42');

        dropbox.options[dropbox.options.length] = new Option('60ft', '43');

        dropbox.options[dropbox.options.length] = new Option('65ft', '44');

        dropbox.options[dropbox.options.length] = new Option('70ft', '45');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "3") {

        dropbox.options[dropbox.options.length] = new Option('50ft', '46');

        dropbox.options[dropbox.options.length] = new Option('57ft', '47');

        dropbox.options[dropbox.options.length] = new Option('60ft', '48');

        dropbox.options[dropbox.options.length] = new Option('65ft', '49');

        dropbox.options[dropbox.options.length] = new Option('70ft', '50');

    }
    setPrice();
}
//function to print price on screen//

function setPrice() {

    if (document.BoatConfigurator.Length.value == "1") {
        document.getElementById("price").innerHTML = "£16200,00";
    }
    if (document.BoatConfigurator.Length.value == "2") {
        document.getElementById("price").innerHTML = "£16800,00";
    }
    if (document.BoatConfigurator.Length.value == "3") {
        document.getElementById("price").innerHTML = "£17400,00";
    }
    if (document.BoatConfigurator.Length.value == "4") {
        document.getElementById("price").innerHTML = "£18720,00";
    }
    if (document.BoatConfigurator.Length.value == "5") {
        document.getElementById("price").innerHTML = "£19140,00";
    }
    if (document.BoatConfigurator.Length.value == "6") {
        document.getElementById("price").innerHTML = "£20200,00";
    }
    if (document.BoatConfigurator.Length.value == "7") {
        document.getElementById("price").innerHTML = "£21950,00";
    }
    if (document.BoatConfigurator.Length.value == "8") {
        document.getElementById("price").innerHTML = "£31130,00";
    }
    if (document.BoatConfigurator.Length.value == "9") {
        document.getElementById("price").innerHTML = "£31130,00";
    }
    if (document.BoatConfigurator.Length.value == "10") {
        document.getElementById("price").innerHTML = "£31130,00";
    }
    if (document.BoatConfigurator.Length.value == "11") {
        document.getElementById("price").innerHTML = "£31755,00";
    }
    if (document.BoatConfigurator.Length.value == "12") {
        document.getElementById("price").innerHTML = "£32380,00";
    }
    if (document.BoatConfigurator.Length.value == "13") {
        document.getElementById("price").innerHTML = "£33630,00";
    }
    if (document.BoatConfigurator.Length.value == "14") {
        document.getElementById("price").innerHTML = "£34125,00";
    }
    if (document.BoatConfigurator.Length.value == "15") {
        document.getElementById("price").innerHTML = "£34875,00";
    }
    if (document.BoatConfigurator.Length.value == "16") {
        document.getElementById("price").innerHTML = "£35685,00";
    }
    if (document.BoatConfigurator.Length.value == "17") {
        document.getElementById("price").innerHTML = "£36500,00";
    }
    if (document.BoatConfigurator.Length.value == "18") {
        document.getElementById("price").innerHTML = "£41480,00";
    }
    if (document.BoatConfigurator.Length.value == "19") {
        document.getElementById("price").innerHTML = "£43590,00";
    }
    if (document.BoatConfigurator.Length.value == "20") {
        document.getElementById("price").innerHTML = "£45700,00";
    }
    if (document.BoatConfigurator.Length.value == "21") {
        document.getElementById("price").innerHTML = "£47810,00";
    }
    if (document.BoatConfigurator.Length.value == "22") {
        document.getElementById("price").innerHTML = "£48230,00";
    }
    if (document.BoatConfigurator.Length.value == "23") {
        document.getElementById("price").innerHTML = "£49920,00";
    }
    if (document.BoatConfigurator.Length.value == "24") {
        document.getElementById("price").innerHTML = "£52030,00";
    }
    if (document.BoatConfigurator.Length.value == "25") {
        document.getElementById("price").innerHTML = "£54140,00";
    }
    if (document.BoatConfigurator.Length.value == "26") {
        document.getElementById("price").innerHTML = "£73000,00";
    }
    if (document.BoatConfigurator.Length.value == "27") {
        document.getElementById("price").innerHTML = "£77000,00";
    }
    if (document.BoatConfigurator.Length.value == "28") {
        document.getElementById("price").innerHTML = "£82000,00";
    }
    if (document.BoatConfigurator.Length.value == "29") {
        document.getElementById("price").innerHTML = "£85000,00";
    }
    if (document.BoatConfigurator.Length.value == "30") {
        document.getElementById("price").innerHTML = "£87000,00";
    }
    if (document.BoatConfigurator.Length.value == "31") {
        document.getElementById("price").innerHTML = "£90000,00";
    }
    if (document.BoatConfigurator.Length.value == "32") {
        document.getElementById("price").innerHTML = "£95000,00";
    }
    if (document.BoatConfigurator.Length.value == "33") {
        document.getElementById("price").innerHTML = "£100000,00";
    }
    if (document.BoatConfigurator.Length.value == "34") {
        document.getElementById("price").innerHTML = "£24225,00";
    }
    if (document.BoatConfigurator.Length.value == "35") {
        document.getElementById("price").innerHTML = "£25330,00";
    }
    if (document.BoatConfigurator.Length.value == "36") {
        document.getElementById("price").innerHTML = "£25960,00";
    }
    if (document.BoatConfigurator.Length.value == "37") {
        document.getElementById("price").innerHTML = "£29535,00";
    }
    if (document.BoatConfigurator.Length.value == "38") {
        document.getElementById("price").innerHTML = "£30640,00";
    }
    if (document.BoatConfigurator.Length.value == "39") {
        document.getElementById("price").innerHTML = "£32480,00";
    }
    if (document.BoatConfigurator.Length.value == "40") {
        document.getElementById("price").innerHTML = "£34320,00";
    }
    if (document.BoatConfigurator.Length.value == "41") {
        document.getElementById("price").innerHTML = "£42745,00";
    }
    if (document.BoatConfigurator.Length.value == "42") {
        document.getElementById("price").innerHTML = "£45000,00";
    }
    if (document.BoatConfigurator.Length.value == "43") {
        document.getElementById("price").innerHTML = "£45955,00";
    }
    if (document.BoatConfigurator.Length.value == "44") {
        document.getElementById("price").innerHTML = "£47555,00";
    }
    if (document.BoatConfigurator.Length.value == "45") {
        document.getElementById("price").innerHTML = "£49160,00";
    }
    if (document.BoatConfigurator.Length.value == "46") {
        document.getElementById("price").innerHTML = "£57000,00";
    }
    if (document.BoatConfigurator.Length.value == "47") {
        document.getElementById("price").innerHTML = "£60525,00";
    }
    if (document.BoatConfigurator.Length.value == "48") {
        document.getElementById("price").innerHTML = "£62040,00";
    }
    if (document.BoatConfigurator.Length.value == "49") {
        document.getElementById("price").innerHTML = "£64555,00";
    }
    if (document.BoatConfigurator.Length.value == "50") {
        document.getElementById("price").innerHTML = "£67070,00";
    }

}