// Client-side JavaScript for a pure chat application using localStorage

// Function to send messages
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value;
    if (message) {
        // Get messages from localStorage
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(message);
        // Update localStorage
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        input.value = '';
        displayMessages();
    }
}

// Function to display messages
function displayMessages() {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = '';
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = msg;
        messagesList.appendChild(li);
    });
}

// Event listener for send button
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Initial display of messages
displayMessages();
