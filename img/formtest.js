const prog = document.querySelector('#prog');
const goToFormButton = document.querySelector('#go-to-form-btn');
goToFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        prog.scrollIntoView();
    });


const hist = document.querySelector('#hist');
const gotohistbtn = document.querySelector('#go-to-history-btn');
gotohistbtn.addEventListener('click', function (d) {
        d.preventDefault();
        hist.scrollIntoView();
    });




