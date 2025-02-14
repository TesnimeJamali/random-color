function getRandomColor() {
    let hex = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
}
let elt= document.querySelectorAll("li");
elt.forEach(function (element) {
    element.addEventListener('click', function () {
        element.style.color = getRandomColor();
    });
});