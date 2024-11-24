export function initChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    function toggleChat() {
        chatbotContainer.classList.toggle('hidden');
        if (!chatbotContainer.classList.contains('hidden')) {
            chatInput.focus();
        }
    }

    function addMessage(message, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message);
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                addMessage('Thank you for your message. One of our psychologists will respond shortly.', true);
            }, 1000);
        }
    }

    chatbotToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);
    sendMessage.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}