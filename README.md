# VoiceToTextconverter_webpage
This project is designed to convert speech into text using the Web Speech API and store the transcribed text in a MySQL database. Below, you'll find details on the technologies used, files included, installation instructions, usage guidelines, features to help you get started with this project.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Files Explanation](#files-explanation)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Project Description

This project is a simple web interface that converts speech into text using the Web Speech API and stores the transcribed text in a MySQL database using PHP and MySQLi. The web page listens for specific voice commands to start and stop the recording.

## Technologies Used

- PHP: Server-side scripting language for backend processing.
- MySQL: Database management system to store robot commands.
- HTML: Markup language for creating the web interface.
- CSS: Style sheet language for styling the web interface.
- JavaScript: Programming language for handling asynchronous operations and improving user experience.

## Files Explanation

- index.html: The main HTML file that contains the structure of the web page.
- styles.css: The CSS file that styles the web page.
- script.js: The JavaScript file that handles the voice-to-text conversion, processes voice commands, and sends the transcribed text to the server.
- save.php: The PHP script that handles saving the transcribed text to the MySQL database.

## Installation

1. Clone this repository or download the ZIP file:

  
   git clone https://github.com/yourusername/voice-to-text.git
   cd voice-to-text
   
2. **Extract the ZIP file (if downloaded) and place the project directory in the htdocs directory of your XAMPP installation (or equivalent directory in your web server).**
Database Setup:p:**

   - Start XAMPP and ensure Apache and MySQL are running.
   - Open your web browser and go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
   - Create a new database called voicetext.
   - Create a table called texts with the following structure:

    
     CREATE TABLE `texts` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `content` text NOT NULL,
       `created_at` datetime NOT NULL,
       PRIMARY KEY (`id`)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
     
4. **Configure the database connection in save.php to match your MySQL server settings.**

## Usage
1. Start your web server and navigate to [http://localhost/your-project-directory/index.html](http://localhost/your-project-directory/index.html)

2. You will see a user interface,allow the microphone to be turend on to record:
   - Say "open" to start recording.
   - Speak into your microphone.
   - Say "close" to stop recording.
   - The transcribed text will appear on the screen and be saved to the database, and a message will display the result.

## Features

- Converts speech to text using the Web Speech API.
- Displays the transcribed text on the web page.
- Stores the transcribed text in a MySQL database.
- Listens continuously and responds to specific voice commands ("open" to start recording and "close" to stop recording).
