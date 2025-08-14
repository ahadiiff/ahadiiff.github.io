const longVideos = ["XYphGfGBfEA","PvI3Gv8kSuI","UH0R7j2vhAs"];
const shorts = ["pFeyZv4WiG4","D3th2715q1A","tZ7CzxDj-3Y","7mpk25VeakQ","xqGp6yGei8U","zYLEJlH9Tc4","cffRoHp2QoE","QKEY86EQqVY","DEfSjU9Rsrw"];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderVideos();
});

function renderVideos() {
  const list = document.getElementById('videoList');
  // show long videos first
  longVideos.forEach(id => {
    const card = createCard(id, 'Long Video');
    list.appendChild(card);
  });
  // then show shorts
  shorts.forEach(id => {
    const card = createCard(id, 'Short');
    list.appendChild(card);
  });
}

function createCard(id, label) {
  const card = document.createElement('div');
  card.className = 'video-card';
  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  const meta = document.createElement('div');
  meta.className = 'meta';
  const h4 = document.createElement('h4');
  h4.textContent = `${label} — ${id}`;
  const a = document.createElement('a');
  a.className = 'play-btn';
  a.textContent = 'Open';
  a.href = `https://www.youtube.com/watch?v=${id}`;
  a.target = '_blank';
  meta.appendChild(h4);
  meta.appendChild(a);
  card.appendChild(thumb);
  card.appendChild(meta);
  return card;
}
