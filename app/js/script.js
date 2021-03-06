// Check this file is loaded from HTML
// console.log(`Hi, JS is working`);

// Select DOM node
const inputElm = document.querySelector('.search-input');
console.log({ inputElm });

// Add event listener
inputElm.addEventListener('input', passString);

// Event handler
function passString(event) {
    // Get input string
    let inputStr = event.target.value;
    console.log({ inputStr });

    // If the input string is not empty, then filter data with input string
    if (inputStr.length > 0) {
        // Make API call, get data, filter data with input string
        // searchData returns a promise that resolves to a filtered array
        searchData(inputStr)
            // After promise successfully resolves, call generateListItems()
            // Generate list items with filtered data array 
            .then( (data) => generateListItems(data));
    }

    // If the input string is empty, then clear autocomplete suggestions
    else {
        generateListItems([]);
    }
}

function generateListItems(data) {
    // Select parent node
    const ul = document.querySelector('.results');

    // Clear old autocomplete suggestions
    ul.innerHTML = '';

    // Generate list elements for every item in array
    data.map( elm => {
        const li = document.createElement('li');
        li.innerHTML = elm.title;
        ul.appendChild(li);
    });
}
