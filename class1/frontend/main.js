console.log("Hello World!")

// onload event handler
window.onload = function() {
    console.log("web page loaded")
    // Button click event handler
    const newItemButton = document.getElementById('newItem')
    const newItemTextBox = document.getElementById('itemInput')
    newItemButton.onclick = function newItemHandler() {
        // Step 1: Get the text in inside the text box
        console.log("New item is", newItemTextBox.value)

        // Step 2: Manipulate the DOM to add new <li> element to the <ul> list
        // Step 2.1. Add a new <li> element
        const newLi = document.createElement("li")
        newLi.appendChild(document.createTextNode(newItemTextBox.value))
        // Step 2.2. Add the new <li> element to the <ul> element
        const listElement = document.getElementById("list")
        listElement.appendChild(newLi)
    }


    // Send GET /items request to server
    // We uses "fetch" lib to sends http requests
    fetch('http://127.0.0.1:3000/items')
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            console.log(jsonData["items"])
            const items = jsonData["items"]
            // Display the items to browser
            for (var i = 0; i < items.length; i++) {
                const item = items[i]
                const newLi = document.createElement("li")
                newLi.appendChild(document.createTextNode(item))
                const listElement = document.getElementById("list")
                listElement.appendChild(newLi)
            }
        });
}

