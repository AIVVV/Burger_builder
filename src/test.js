// Reset video to start from start
function reloadVideo(element) {
  element.pause();
  element.currentTime = 0;
  element.load();
}

// Play full screen main video
function playFullScreenVideo() {
  let previewVideo = document.getElementsByTagName('video')[0];
  let video = document.getElementsByTagName('video')[1];
  let videoContainer = document.getElementById('qf-video');
  reloadVideo(previewVideo);

  let fullScreen =
    video.webkitRequestFullscreen ||
    video.mozRequestFullScreen ||
    video.msRequestFullscreen;
    videoContainer.style.display = 'block';
    fullScreen.call(video.play());
}

// Exit full screen main video
function fullScreenChange() {
  if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
  }

  function exitHandler() {
    let previewVideo = document.getElementsByTagName('video')[0];
    let video = document.getElementsByTagName('video')[1];
    let videoContainer = document.getElementById('qf-video');

    if (document.webkitIsFullScreen === false) {
      reloadVideo(video);
      videoContainer.style.display = 'none';
      reloadVideo(previewVideo);
      previewVideo.play();

    } else if (document.mozFullScreen === false) {
      reloadVideo(video);
      video.display.style = 'none';
      reloadVideo(previewVideo);
      previewVideo.play();

    } else if (document.msFullscreenElement === false) {
      reloadVideo(video);
      video.display.style = 'none';
      reloadVideo(previewVideo);
      previewVideo.play();
    }
  }
}
fullScreenChange();
