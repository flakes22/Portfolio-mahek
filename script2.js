
function getElementType(element) {
    const tag = element.tagName.toLowerCase();
    const type = element.getAttribute('type');

    if (tag === 'img') return 'image';
    if (tag === 'select') return 'drop-down';
    if (tag === 'button') return 'button';
    if (tag === 'a') return 'link';
    if (type === 'text' || tag === 'p' || tag === 'span' || tag === 'div') return 'text';
    if (type === 'submit') return 'submit button';
    return tag;
}

function logEvent(eventType, element) {
    const timestamp = new Date().toISOString();
    const elementType = getElementType(element);
    console.log(`${timestamp}, ${eventType}, ${elementType}`);
}

// Capture all clicks on the document
document.addEventListener('click', function (e) {
    const target = e.target;
    logEvent('click', target);
});

// Capture views (when elements come into view)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logEvent('view', entry.target);
            observer.unobserve(entry.target); // Optional: only log first view
        }
    });
}, {
    threshold: 0.5 // Adjust as needed
});

// Observe all visible elements for "view"
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img, p, div, span, h1, h2, h3, h4, h5, h6, select, button, a').forEach(el => {
        observer.observe(el);
    });
});
