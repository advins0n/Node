const submit = document.querySelector('#submit');
const search = document.querySelector('#search');
const results = document.querySelector('#results');
let content;

submit.addEventListener('click', () => {
    results.textContent = search.value;
});
