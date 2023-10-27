// Obtém o elemento de áudio
var audio = document.getElementById("crybaby");

// Obtém os botões de reprodução e pausa
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");

// Adiciona um evento de clique ao botão de reprodução
playButton.addEventListener("click", function() {
    audio.play();
});

// Adiciona um evento de clique ao botão de pausa
pauseButton.addEventListener("click", function() {
    audio.pause();
});
