document.addEventListener("DOMContentLoaded", function () {
    const books = document.querySelectorAll(".book");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!books.length || !prevBtn || !nextBtn) return; // 🛑 Exit if section doesn't exist

    let currentIndex = 0;

    // Function to show the book at the given index
    function showBook(index) {
        books.forEach((book, i) => {
            book.classList.remove("active");
            if (i === index) {
                book.classList.add("active");
            }
        });
    }

    // Move to the previous book
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
        showBook(currentIndex);
    });

    // Move to the next book
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % books.length;
        showBook(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % books.length;
        showBook(currentIndex);
    }, 2000); // 2000ms = 2 seconds

    // Initially show the first book
    showBook(currentIndex);
});
