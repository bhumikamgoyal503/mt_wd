document.addEventListener('DOMContentLoaded', function () {
    // Get the button
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    btnScrollToTop.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
