// Store feedback in localStorage
const STORAGE_KEY = 'psychologist_feedback';

function getFeedback() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function saveFeedback(feedback) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function addFeedback(text) {
    const feedback = getFeedback();
    feedback.unshift({
        text,
        date: new Date().toISOString(),
        id: Date.now()
    });
    saveFeedback(feedback);
    displayFeedback();
}

function displayFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    if (!feedbackList) return;

    const feedback = getFeedback();
    feedbackList.innerHTML = feedback.map(item => `
        <div class="feedback-item">
            <p>${item.text}</p>
            <div class="date">${new Date(item.date).toLocaleDateString()}</div>
        </div>
    `).join('');
}

// Initialize feedback functionality
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitFeedback');
    const textArea = document.getElementById('feedbackText');

    if (submitBtn && textArea) {
        submitBtn.addEventListener('click', () => {
            const text = textArea.value.trim();
            if (text) {
                addFeedback(text);
                textArea.value = '';
            }
        });
    }

    displayFeedback();
});