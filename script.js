document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const musicTitle = document.querySelector('.music-title');
    const musicArtist = document.querySelector('.music-artist');

    // Update music information
    musicTitle.textContent = "Song Title";
    musicArtist.textContent = "Artist Name";

    // Play button click event
    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });

    // Pause button click event
    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });

    // Optional: Add more functionality like seeking, volume control, etc.
});
