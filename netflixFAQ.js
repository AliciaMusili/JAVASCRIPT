// script.js

const faqContainer = document.querySelector('.faq-container');

function createFaqItem(title, description) {
    const item = document.createElement('div');
    item.className = 'faq-item';

    const header = document.createElement('div');
    header.className = 'faq-header';
    header.textContent = title;

    const content = document.createElement('div');
    content.className = 'faq-content';
    content.innerHTML = `<p>${description}</p>`;

    item.appendChild(header);
    item.appendChild(content);

    return item;
}

const faqItems = [
    { title: "How do I cancel my subscription?", description: "To cancel your subscription, go to Account & Help > Cancel Membership." },
    { title: "What devices can I watch Netflix on?", description: "You can watch Netflix on smart TVs, smartphones, tablets, streaming media players, and game consoles." },
    { title: "Is Netflix available worldwide?", description: "Yes, Netflix is available in over 190 countries worldwide." },
    { title: "Can I share my account with family members?", description: "No, Netflix accounts cannot be shared between households." }
];

faqItems.forEach(item => {
    faqContainer.appendChild(createFaqItem(item.title, item.description));
});

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.closest('.faq-item');
        item.classList.toggle('expanded');

        const arrow = item.querySelector('.faq-header::after');
        arrow.textContent = item.classList.contains('expanded') ? '-' : '+';
    });
});
