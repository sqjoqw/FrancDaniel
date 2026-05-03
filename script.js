document.addEventListener('DOMContentLoaded', () => {

    const overlay = document.querySelector('.page-transition-overlay');

    if (overlay) {
        overlay.classList.add('is-animating');

        setTimeout(() => {
            overlay.classList.add('is-leaving');
            setTimeout(() => {
                overlay.classList.remove('is-animating', 'is-leaving');
                overlay.style.transform = 'translateY(-100%)'; 
            }, 700);
        }, 50);
    }

    const links = document.querySelectorAll('a[href]:not([target="_blank"])');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');

            if (targetUrl.includes('.html') && targetUrl !== window.location.pathname.split('/').pop()) {
                e.preventDefault();

                overlay.style.transform = 'translateY(100%)'; 
                void overlay.offsetWidth; 
                overlay.classList.add('is-animating');

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 700);
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-item, .stagger-item');
    elementsToReveal.forEach(el => scrollObserver.observe(el));
});