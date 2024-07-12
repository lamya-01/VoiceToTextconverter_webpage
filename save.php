<?php
header('Content-Type: application/json');

// Database configuration
$servername = "localhost"; // Use '127.0.0.1' if 'localhost' doesn't work
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "voicetext"; // Ensure this matches the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle incoming data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['text'])) {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit();
}

$text = $data['text'];
$created_at = date('Y-m-d H:i:s');

$sql = "INSERT INTO texts (content, created_at) VALUES (?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(["status" => "error", "message" => "Prepare failed: " . $conn->error]);
    exit();
}

$stmt->bind_param("ss", $text, $created_at);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Text saved"]);
} else {
    echo json_encode(["status" => "error", "message" => "Execute failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>