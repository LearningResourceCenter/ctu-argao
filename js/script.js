document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents closing when clicking inside the menu
            this.classList.toggle("active");
        });
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    });
});
