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

    if (document.getElementById('blue').checked !== null) {
        document.getElementById('badge').style.display = document.getElementById('blue').checked ? "flex" : "none";
    }

    if (document.getElementById('name').value) {
        document.getElementById('nameX').textContent = document.getElementById('name').value;
    }

    if (document.getElementById('uname').value) {
        document.getElementById('unameX').textContent = `@${document.getElementById('uname').value.toLowerCase()}`;
    }

    if (document.getElementById('tt').value) {
        document.getElementById('tweetText').textContent = document.getElementById('tt').value;
    }

    if (document.getElementById('dtime').value) {
        document.getElementById('tweetDate').textContent = document.getElementById('dtime').value;
    }

    if (document.getElementById('ret').value) {
        document.getElementById('postRetweets').textContent = document.getElementById('ret').value;
    }

    if (document.getElementById('likes').value) {
        document.getElementById('postLikes').textContent = document.getElementById('likes').value;
    }

    document.getElementById('heart').style.color = document.getElementById('liked').checked ? "red" : "#555";
    document.getElementById('retwe').style.color = document.getElementById('reed').checked ? "green" : "#555";

    const timeInput = document.getElementById('time').value;
    if (timeInput) {
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
}

function create() {
    document.getElementById('profilePic').src = "./Assets/pfp.jpg"
    document.getElementById('postPic').src = './Assets/default.png';
    document.getElementById('badge').style.display = "flex"
    document.getElementById('nameX').textContent = "AzaanUllah Khan";
    document.getElementById('unameX').textContent = `@azaankh18`;
    document.getElementById('tweetText').textContent = "Devathon.";
    document.getElementById('tweetDate').textContent = "2024-08-19";
    document.getElementById('postRetweets').textContent = "85";
    document.getElementById('postLikes').textContent = "18k";
    document.getElementById('heart').style.color = "red";
    document.getElementById('tweetTime').textContent = "12:56 AM";
}
create()
document.getElementById('screenshotBtn').addEventListener('click', function() {
    html2canvas(document.getElementById('mainn')).then(canvas => {
        const imgDataUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement('a');
        downloadLink.href = imgDataUrl;
        downloadLink.download = 'screenshot.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});