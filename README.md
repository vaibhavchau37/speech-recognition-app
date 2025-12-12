# 🎤 Smart Speech Recognition

Convert voice to text in real-time with style ✨

<img width="702" height="967" alt="Screenshot 2025-09-09 092936" src="https://github.com/user-attachments/assets/eb780abf-919e-4e36-9534-f20e2b771308" />


> A clean, modern web app that captures microphone input, transcribes speech in real-time, and gives handy tools for working with transcripts (copy, download, search, history).

---

## 🧭 Table of Contents

* [About](#about)
* [Features](#features)
* [Demo / Screenshot](#demo--screenshot)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Customization](#customization)
* [Contributing](#contributing)
* [License](#license)

---

## About

This project is a frontend web application that demonstrates a real-time speech-to-text interface. Users can start and stop recording, clear the transcript, and interact with the generated text using copy, download and search actions. All transcripts are stored in a local history panel for quick reference.

The UI uses a vibrant gradient background and card-style panels for a modern look and good UX.

---

## Features

* Real-time speech recognition from the browser microphone
* Start / Stop / Clear controls
* Transcription box showing live text
* Word, Segment and Duration counters below the transcript
* Copy, Download and Search actions for transcripts
* Local history list of previous transcripts
* Responsive and attractive UI (gradient background, cards, buttons)

---

## Demo / Screenshot

Place a screenshot image in the `assets/` folder and name it `smart-speech-screenshot.png` (or update the path below).

```
assets/smart-speech-screenshot.png
```

Then the README will display it as shown at the top.

---

## Tech Stack

* HTML, CSS (modern styling / gradient backgrounds)
* JavaScript (Web Speech API or other client-side speech recognition)
* Optional: small libraries for UI or icons (Font Awesome, Bootstrap/Tailwind)

> Note: The app can run fully client-side using the Web Speech API in supported browsers (Chrome, Edge). For better cross-browser support or advanced models, you can wire a backend speech-to-text service (Google, AWS, Azure, or open-source models served via an API).

---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. (Optional) If the project is pure static files, you can open `index.html` in your browser. For a local static server use:

```bash
# Python 3
python -m http.server 8000
# or using npm package
npx http-server .
```

3. Open `http://localhost:8000` in a supported browser (Google Chrome recommended).

---

## Usage

1. Grant microphone permission when the browser prompts.
2. Click **Start** to begin live transcription.
3. Click **Stop** to pause recording.
4. Click **Clear** to empty the transcript box.
5. Use **Copy** to copy the transcript to clipboard.
6. Use **Download** to save the transcript as a `.txt` file.
7. Use **Search** to search the current transcript text.
8. The **History** section stores previous transcripts for quick reuse.

---

## Project Structure (suggested)

```
/ (root)
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ app.js
├─ assets/
│  └─ smart-speech-screenshot.png
└─ README.md
```

---

## Implementation notes

* Uses the browser's Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) for quick client-side transcription.
* Keep transcripts in `localStorage` to persist the history across page reloads.
* Provide graceful fallback if the Web Speech API is not available (show a message and disable controls).
* Track words and segments by splitting the transcript and counting entries.
* Measure duration from the moment recording starts to stops (accumulate across sessions if you prefer).

---

## Customization

* Change colors and gradients in `styles.css` to match your brand.
* Replace icons or button styles using Font Awesome or your preferred icon set.
* For more accurate transcription, send audio to a backend service (WebSocket or REST) and integrate server-side speech-to-text models.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with a clear description of the change.

---

## License

This project is available under the MIT License. See `LICENSE` for details.

---

## Author

Vaibhav Chaudhary — *MLAI Engineer*

Feel free to customize this README to include links to live demos, credits for icons/libraries, and usage screenshots.
