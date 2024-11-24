export function initChatbot() {
  const chatbot = document.getElementById('chatbot');
  const chatbotContainer = chatbot.querySelector('.chatbot-container');
  const chatbotToggle = chatbot.querySelector('.chatbot-toggle');
  const closeChat = chatbot.querySelector('.close-chat');
  const messageInput = chatbot.querySelector('input');
  const sendButton = chatbot.querySelector('.send-message');
  const messagesContainer = chatbot.querySelector('.chatbot-messages');

  function toggleChat() {
    chatbotContainer.classList.toggle('hidden');
  }

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.innerHTML = `<p>${message}</p>`;
      messagesContainer.appendChild(messageElement);
      messageInput.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  chatbotToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}