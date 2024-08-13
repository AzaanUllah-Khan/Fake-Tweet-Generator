const inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach(element => {
    element.addEventListener('input', start);
});

function start() {
    const fileInput = document.getElementById('pp');
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const imgUrl = URL.createObjectURL(file);
        document.getElementById('profilePic').src = imgUrl;
    }
    const fileInputs = document.getElementById('tp');
    if (fileInputs.files && fileInputs.files[0]) {
        const filess = fileInputs.files[0];
        const imgUrls = URL.createObjectURL(filess);
        document.getElementById('postPic').src = imgUrls;
    }
    document.getElementById('badge').style.display = document.getElementById('blue').checked ? "flex" : "none";
    document.getElementById('nameX').textContent = document.getElementById('name').value;
    document.getElementById('unameX').textContent = `@${document.getElementById('uname').value.toLowerCase()}`;
    document.getElementById('tweetText').textContent = document.getElementById('tt').value;
    document.getElementById('tweetDate').textContent = document.getElementById('dtime').value;
    const timeInput = document.getElementById('time').value;
    let [hours, minutes] = timeInput.split(':');
    hours = parseInt(hours, 10);
    
    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }
    
    const formattedTime = `${hours}:${minutes} ${period}`;
    document.getElementById('tweetTime').textContent = formattedTime;
    }
