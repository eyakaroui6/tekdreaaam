// Services data
const services = [
    {
        title: 'About Us',
        description: 'Learn about our mission and values in mental healthcare.',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
        href: '/about'
    },
    {
        title: 'Our Psychologists',
        description: 'Meet our team of experienced mental health professionals.',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        href: '/psychologists'
    },
    {
        title: 'Personality Quiz',
        description: 'Discover more about yourself with our personality assessment.',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
        href: '/quiz'
    },
    {
        title: 'Articles',
        description: 'Expert insights on mental health and well-being.',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
        href: '/articles'
    },
    {
        title: 'Success Stories',
        description: 'Real stories from people who transformed their lives.',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        href: '/stories'
    }
];

// Initialize services
function initServices() {
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.href}" class="btn btn-primary">Learn more</a>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Mobile navigation
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Chatbot functionality
function initChatbot() {
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

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initServices();
    initMobileNav();
    initChatbot();
});