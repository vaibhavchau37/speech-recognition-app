// 🎤 Speech Recognition App with UI + Stats + 3D Mic

// ========== Speech Recognition ==========
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let transcriptBox = document.getElementById("transcript");
let wordCount = document.getElementById("wordCount");
let segmentCount = document.getElementById("segmentCount");
let durationBox = document.getElementById("duration");
let historyList = document.getElementById("history");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let clearBtn = document.getElementById("clearBtn");
let copyBtn = document.getElementById("copyBtn");
let downloadBtn = document.getElementById("downloadBtn");
let searchBtn = document.getElementById("searchBtn");

let transcript = "";
let segments = 0;
let startTime = null;
let timer;

// Start
startBtn.onclick = () => {
  transcript = "";
  transcriptBox.value = "";
  segments = 0;
  startTime = Date.now();
  timer = setInterval(updateDuration, 1000);
  recognition.start();
};

// Stop
stopBtn.onclick = () => {
  recognition.stop();
  clearInterval(timer);
  saveHistory(transcript);
};

// Clear
clearBtn.onclick = () => {
  transcript = "";
  transcriptBox.value = "";
  wordCount.innerText = 0;
  segmentCount.innerText = 0;
  durationBox.innerText = "0s";
};

// Copy
copyBtn.onclick = () => {
  navigator.clipboard.writeText(transcriptBox.value);
  alert("Copied to clipboard!");
};

// Download
downloadBtn.onclick = () => {
  let blob = new Blob([transcriptBox.value], { type: "text/plain" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "transcript.txt";
  a.click();
  URL.revokeObjectURL(url);
};

// Search
searchBtn.onclick = () => {
  let query = encodeURIComponent(transcriptBox.value);
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
};

// Recognition result
recognition.onresult = (event) => {
  let interim = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    let text = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      transcript += text + " ";
      segments++;
    } else {
      interim += text;
    }
  }
  transcriptBox.value = transcript + interim;
  wordCount.innerText = transcript.trim().split(/\s+/).filter(Boolean).length;
  segmentCount.innerText = segments;
};

// Duration updater
function updateDuration() {
  let seconds = Math.floor((Date.now() - startTime) / 1000);
  durationBox.innerText = seconds + "s";
}

// Save history
function saveHistory(text) {
  if (!text.trim()) return;
  let li = document.createElement("li");
  li.className = "bg-black/40 rounded-lg p-3";
  li.textContent = text.slice(0, 80) + (text.length > 80 ? "..." : "");
  historyList.prepend(li);
}

// ========== 3D Mic ==========
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  document.getElementById("mic-3d").clientWidth /
    document.getElementById("mic-3d").clientHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(
  document.getElementById("mic-3d").clientWidth,
  document.getElementById("mic-3d").clientHeight
);
document.getElementById("mic-3d").appendChild(renderer.domElement);

// Mic body
const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffcc,
  metalness: 0.7,
  roughness: 0.2,
});
const mic = new THREE.Mesh(geometry, material);
scene.add(mic);

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

// Animate mic rotation
function animate() {
  requestAnimationFrame(animate);
  mic.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
