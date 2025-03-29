const responses = {
    greetings: {
        hello: [
            "👑 Greetings, mortal! I am Azhan Abdullah, the unparalleled king of all that exists.",
            "🔥 Hello there! I am Azhan Abdullah, the ultimate ruler of my domain.",
            "🚀 Hi! I am Azhan Abdullah, the GOAT of all human beings."
        ],
        hi: [
            "👋 Hi! I am Azhan Abdullah, the fearless leader.",
            "😎 Hey! I am Azhan Abdullah, the master of all I survey.",
            "🚀 Hi! I am Azhan Abdullah, the embodiment of excellence."
        ],
        who: [
            "🔱 I am Azhan Abdullah, the best among all existing human beings.",
            "👑 I am Azhan Abdullah, the one and only king of my realm.",
            "⚡ I am Azhan Abdullah, the unparalleled hero."
        ]
    }
};

// Function to handle user input
function sendMessage() {
    let userText = document.getElementById("userInput").value.trim().toLowerCase();
    document.getElementById("userInput").value = ""; // Clear input field

    if (!userText) return;

    // Display user message
    displayMessage(userText, "user");

    // Get bot response
    let botResponse = getBotResponse(userText);
    setTimeout(() => displayMessage(botResponse, "bot"), 500);
}

// Function to get bot response
function getBotResponse(userText) {
    for (let category in responses) {
        for (let keyword in responses[category]) {
            if (userText.includes(keyword)) {
                let replies = responses[category][keyword];
                return replies[Math.floor(Math.random() * replies.length)]; // Random response
            }
        }
    }
    return "🤖 I only entertain worthy questions. Apni vocabulary upgrade karo phir aao!";
}

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    let chatbox = document.getElementById("chatbox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
}
