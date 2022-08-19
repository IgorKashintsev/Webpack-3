export function addItem(item) {
  const galleryItems = document.createElement('div');
  galleryItems.classList = 'galleryItems';

  if (item.type === 'image') {
    const imgEl = document.createElement('img');
    imgEl.classList = 'image_el';
    imgEl.src = item.image;

    galleryItems.appendChild(imgEl);
  } else if (item.type === 'audio') {
    const audioEl = document.createElement('audio');
    audioEl.classList = 'audio_el';
    audioEl.src = item.audio;
    audioEl.controls = true;

    galleryItems.appendChild(audioEl);
  } else if (item.type === 'video') {
    const videoEl = document.createElement('video');
    videoEl.classList = 'video_el';
    videoEl.src = item.video;
    videoEl.controls = true;

    galleryItems.appendChild(videoEl);
  }

  const titleEl = document.createElement('div');
  titleEl.classList = 'title_el';
  titleEl.textContent = item.title;

  galleryItems.appendChild(titleEl);

  return galleryItems;
}