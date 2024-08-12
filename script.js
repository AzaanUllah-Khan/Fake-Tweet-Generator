const inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach(element => {
    element.addEventListener('input', start);
});

function start(){
    document.getElementById('nameX').textContent = document.getElementById('name').value
    document.getElementById('unameX').textContent = `@${document.getElementById('uname').value.toLowerCase()}`
}