# 📚 Tube Noter

Tube Noter is a remarkable full-stack web app that generates concise notes from YouTube videos using Google's Gemini model and reads them aloud with a text-to-speech feature.

---

## 🚀 Features

- **YouTube Link to Notes**: Generates notes from YouTube video links.
- **Concise Summaries**: Notes are concise (under 500 words).
- **Data Cleaning**: Removes unwanted characters like hashtags, asterisks, and symbols.
- **Text-to-Speech**: Reads generated notes aloud for accessibility.
- **Full-Stack**: Built with React (frontend), Node.js, and Express (backend).

---

## 🛠️ Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Transcription**: `youtube-transcript` npm package  
- **API**: Google Gemini  
- **Text-to-Speech**: Text-to-speech npm package  

---

## ⚙️ How It Works

1. **Input**: Enter a YouTube link.
2. **Transcript Extraction**: Extract the video transcript using the `youtube-transcript` package.
3. **Note Generation**: Send the transcript to the Google Gemini API for concise note creation.
4. **Preprocessing**: Clean unwanted symbols from the notes.
5. **Display & Read Aloud**: Display the notes and use text-to-speech to read them aloud.

---

### 🎥 Demo

Check out the demo video here: https://youtu.be/AQcuRMs9nFE


### 📬 Contact
Name: Faizan Alam
Email: faizanalam416@gmail.com
