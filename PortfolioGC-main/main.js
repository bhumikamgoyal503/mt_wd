document.addEventListener('DOMContentLoaded', function () {
    // Get the scroll-to-top button
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (btnScrollToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                btnScrollToTop.style.display = "block";
            } else {
                btnScrollToTop.style.display = "none";
            }
        });

        btnScrollToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Fix: Ensure smooth scrolling works on all browsers
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error("Target section not found:", targetId);
            }
        });
    });
});
