var pocetna = document.getElementById("kategorija-1");
var dmreze = document.getElementById("kategorija-2");


function prikaziLinkove() {

    if(pocetna.style.display ='block') {
        document.querySelector('title').textContent = "💊 | medialert - društvene mreže";
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

    let currentIndex = 0;

    function pomeriSlajd(step) {
        const slajdovi = document.querySelectorAll('.slajd');
        const indikatori = document.querySelectorAll('.indikator');
        
        currentIndex += step;

        if (currentIndex < 0) {
            currentIndex = slajdovi.length - 1;
        } else if (currentIndex >= slajdovi.length) {
            currentIndex = 0;
        }

        const slajdoviBox = document.querySelector('.slajdovi');
        slajdoviBox.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active indicator
        indikatori.forEach((indikator, index) => {
            if (index === currentIndex) {
                indikator.classList.add('active');
            } else {
                indikator.classList.remove('active');
            }
        });
    }

    function pomeriNaSlajd(index) {
        const slajdovi = document.querySelectorAll('.slajd');
        const indikatori = document.querySelectorAll('.indikator');

        currentIndex = index;
        const slajdoviBox = document.querySelector('.slajdovi');
        slajdoviBox.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active indicator
        indikatori.forEach((indikator, index) => {
            if (index === currentIndex) {
                indikator.classList.add('active');
            } else {
                indikator.classList.remove('active');
            }
        });
    }

