const volumeIcon = document.getElementById('volume-icon');
const myAudio = document.getElementById("myaudio");

volumeIcon.addEventListener('click', () => {
    if (myAudio.paused){
        myAudio.play();
        volumeIcon.src = "images/son.png";
    } else {
        myAudio.pause();
        volumeIcon.src = 'images/soff.png';
    }
})

//прописываю функции взаимодействия с npc (гипер по-детски - через окольные пути)

function choose() {
    const dropdown = document.getElementById("loginDropdown");
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function storytell1() {
    const tellwindow = document.getElementById("popupOverlayReg");
    tellwindow.style.display = 'block'; 
}

function closePopup() {
    const dropdown = document.getElementById('loginDropdown');
    dropdown.style.display = 'none';
    const popupStory = document.getElementById('popupOverlayReg');
    popupStory.style.display = 'none';
}