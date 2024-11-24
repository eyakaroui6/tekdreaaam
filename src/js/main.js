import { services } from './services.js';
import { initMobileNav } from './navigation.js';
import { initChatbot } from './chatbot.js';

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

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initServices();
  initMobileNav();
  initChatbot();
});