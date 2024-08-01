fetch('./sounds.json')
  .then(response => response.json())
  .then(audioFiles => {
    audioFiles.forEach(id => {
      const audio = document.createElement('audio');
      audio.id = id;
      audio.src = `./src/sounds/${id}.mp3`;
      audio.preload = 'auto';
      document.body.appendChild(audio);
    });
  })
  .catch(error => console.error('Error loading the JSON file:', error));
