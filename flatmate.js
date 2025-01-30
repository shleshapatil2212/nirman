function showAddFlatForm() {
    let flatList = document.getElementById("flat-list");
    let newFlat = document.createElement("div");
    newFlat.innerHTML = `
        <p><strong>Location:</strong> <input type='text' placeholder='Enter location'></p>
        <p><strong>Rent:</strong> <input type='text' placeholder='Enter rent'></p>
        <p><strong>Facilities:</strong> <input type='text' placeholder='Enter facilities'></p>
        <p><strong>Current Flatmates:</strong> <input type='text' placeholder='Enter flatmates'></p>
        <p><strong>Contact:</strong> <input type='text' placeholder='Enter contact'></p>
        <button onclick="removeItem(this)">Delete</button>
    `;
    flatList.appendChild(newFlat);
}

function removeItem(button) {
    button.parentElement.remove();
}