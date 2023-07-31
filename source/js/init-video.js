const playButton = document.querySelector('.video__play-button');
const videoContainer = document.querySelector('.gym__video-container');
const video = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

const playVideo = () => {
  videoContainer.insertAdjacentHTML('afterbegin', video);
  playButton.classList.add('visually-hidden');
};

playButton.addEventListener('click', playVideo);
