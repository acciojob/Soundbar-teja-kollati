//your JS code here. If required.
const soundNames = [
	“applause”,
	“boo”,
	“gasp”,
	“tada”,
	“victory”,
	“wrong”
];

const buttons = document.querySelectorAll(“.btn”);
const stopButton = document.querySelector(“.stop”);

let currentAudio = null;

// Play sound
buttons.forEach((button, index) => {
button.addEventListener(“click”, () => {

    // Stop previous sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundNames[index]}.mp3`);
    currentAudio.play();
});

});

// Stop sound
stopButton.addEventListener(“click”, () => {
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});