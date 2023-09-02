const SetToLocalStorage = () => {
    // Check if the key `holdobjcard` exists in localStorage.
    if (!localStorage.getItem('holdobjcard')) {
        // If the key does not exist, create a new array and store it in localStorage.
        localStorage.setItem('holdobjcard', JSON.stringify(holding));
    } else {
        // If the key exists, get the existing array from localStorage.
        const existingHolding = JSON.parse(localStorage.getItem('holdobjcard'));

        // Add the new data to the existing array.
        existingHolding.push(tmp);

        // Store the updated array back in localStorage.
        localStorage.setItem('holdobjcard', JSON.stringify(existingHolding));
    }
}