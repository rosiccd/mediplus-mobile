var pocetna = document.getElementById("kategorija-1");
var dmreze = document.getElementById("kategorija-2");


function prikaziLinkove() {

    if(pocetna.style.display ='block') {
        document.querySelector('title').textContent = "mediplus - društvene mreže";
        pocetna.style.display ='none';
        dmreze.style.display = 'block';
    } else {
        dmreze.style.display = 'none';
        pocetna.style.display ='block';
    }

}

function sakrijLinkove() {
    if(pocetna.style.display ='none') {
        document.querySelector('title').textContent = "mediplus - početna";
        pocetna.style.display ='block';
        dmreze.style.display = 'none';
    } else {
        dmreze.style.display = 'block';
        pocetna.style.display ='none';
    }

}