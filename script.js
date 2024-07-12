document.addEventListener('DOMContentLoaded', function() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const text = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
    if (text === 'open') {
      startRecording();
    } else if (text === 'close') {
      stopRecording();
    } else {
      document.getElementById('result').innerText += text + ' ';
      saveToDatabase(text);
    }
  };

  recognition.onend = () => {
    recognition.start(); // Restart recognition automatically
  };

  recognition.start();

  function startRecording() {
    document.getElementById('result').innerText = 'Recording started... ';
    // Optionally, you can add any additional logic to handle start recording event.
  }

  function stopRecording() {
    document.getElementById('result').innerText = 'Recording stopped... ';
    recognition.stop();
  }

  function saveToDatabase(text) {
    fetch('save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if (data.status !== 'success') {
        console.error('Error:', data.message);
      }
    })
    .catch((error) => console.error('Error:', error));
  }
});