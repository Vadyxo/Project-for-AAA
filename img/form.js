const form = document.querySelector('#form');
const goToFormButton = document.querySelector('#go-to-form-btn');
goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.scrollIntoView();
});


const hist = document.querySelector('#hist');
const gotohistbtn = document.querySelector('#go-to-history-btn');
gotohistbtn.addEventListener('click', (x) => {
        x.preventDefault();
        hist.scrollIntoView();
    });


const info = document.querySelector('#info');
const gotoinfobtn = document.querySelector('#go-to-info-btn');
gotoinfobtn.addEventListener('click', (y) => {
        y.preventDefault();
        info.scrollIntoView();
    });


const contact = document.querySelector('#contact');
const gotocontbtn = document.querySelector('#go-to-contact-btn');
gotocontbtn.addEventListener('click', function (q) {
    q.preventDefault();
    contact.scrollIntoView();
});



