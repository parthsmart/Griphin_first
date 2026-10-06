
// Select the input and buttons
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('.btn-search');
const actionButton = document.querySelector('.btn-action');

// Search button
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value;

    if (searchText === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + searchText);
    }
});

// Action button
actionButton.addEventListener('click', function () {
    alert("Button Clicked!");
});
