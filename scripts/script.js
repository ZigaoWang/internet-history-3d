const jokes = [
  "This is 3D, so it's slow...",
  "You're about to see something great and cool!",
  "Patience is a virtue!",
  "Good things take time!",
  "Almost there, hang tight!",
  "Loading... because it's worth the wait!"
];

function showRandomJoke() {
  const jokeElement = document.getElementById('joke');
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.innerText = jokes[randomIndex];
}

window.onload = function() {
  // Preload the scene
  const scene = document.getElementById('scene');
  const loading = document.getElementById('loading');
  scene.addEventListener('loaded', () => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
      scene.style.display = 'block';
    }, 500);
  });

  // Show a random joke every 3 seconds
  setInterval(showRandomJoke, 3000);

  // Set a timeout to hide the loading screen after a certain period (5 seconds)
  setTimeout(() => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
      scene.style.display = 'block';
    }, 500);
  }, 5000);
};

function startExperience() {
  document.getElementById('start').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('start').style.display = 'none';
    document.getElementById('loading').style.display = 'flex';
    showRandomJoke(); // Show the first joke immediately
  }, 500);
}