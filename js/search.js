function searchFunction() {
    let input = document.getElementById("search").value.toLowerCase();
    let list = document.getElementById("content-list");
    let items = list.getElementsByTagName("li");
    let hasResults = false;

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        if (text.includes(input) && input !== "") {
            items[i].style.display = "block";
            hasResults = true;
        } else {
            items[i].style.display = "none";
        }
    }

    // Show the list only if there are results
    list.style.display = hasResults ? "block" : "none";
}

// Navigate when clicking a search result
function navigateToPage(url) {
    window.location.href = url;
}
