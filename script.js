const inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach(element => {
    element.addEventListener('input', start);
});

function start(){
    alert("hey !");
}