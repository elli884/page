const button = document.getElementById('clickMe');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    output.textContent = "Du hast den Button geklickt!";
});
