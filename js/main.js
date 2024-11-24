import { initNavigation } from './modules/navigation.js';
import { initChatbot } from './modules/chatbot.js';
import { initServices } from './modules/services.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initChatbot();
    initServices();
});
document.getElementById("experienceForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const experience = document.getElementById("experienceInput").value.trim();

    if (experience) {
        alert("Merci d'avoir partagé votre expérience !");
        document.getElementById("experienceInput").value = ""; // Réinitialise la zone de texte
        // Vous pouvez également envoyer les données à un serveur ici
    } else {
        alert("Veuillez remplir le champ avant d'envoyer.");
    }
});

