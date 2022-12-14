document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  let buttonStartDemo = document.getElementById("button-start-demo");
  let containerPlayerAudio = document.getElementById("container-player-audio");
  let trackTitle = document.getElementById("track-title");
  let playerAudio = document.getElementById("player-audio");
  let buttonPreviousTrack = document.getElementById("button-previous-track");
  let buttonNextTrack = document.getElementById("button-next-track");

  let tracks = [
    {
      title: "Audio 1",
      source: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
      type: "audio/mpeg",
    },
    {
      title: "Audio 2",
      source: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
      type: "audio/mpeg",
    },
    {
      title: "Audio 3",
      source: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
      type: "audio/mpeg",
    },
  ];

  let totalTracks = tracks.length;
  let currentTrackNumber = 0;

  buttonStartDemo.onclick = function (event) {
    buttonStartDemo.classList.add("hidden");
    containerPlayerAudio.classList.remove("hidden");
    playTrack();
  };

  buttonPreviousTrack.onclick = function (event) {
    if (currentTrackNumber === 0) currentTrackNumber = totalTracks - 1;
    else currentTrackNumber = currentTrackNumber - 1;
    playTrack();
  };

  buttonNextTrack.onclick = function (event) {
    if (currentTrackNumber === totalTracks - 1) currentTrackNumber = 0;
    else currentTrackNumber = currentTrackNumber + 1;
    playTrack();
  };

  playTrack = function () {
    trackTitle.innerText = tracks[currentTrackNumber].title;
    playerAudio.src = tracks[currentTrackNumber].source;
    playerAudio.play();
  };
});
