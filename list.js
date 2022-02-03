// just to verify that the script is loaded. not required 
// alert("hello?")


/*Question 1, Create List, 5 points

Part 1a: Create a web page with an empty unordered list, 
an input text box, and button. When the user types text 
into the input form and clicks the button, the text should 
be added to the list, as a new list element. When the text 
has been added to the unordered list, clear the text from the input. 

Part 1b: Add a clear button. When clicked, all the li elements 
should be removed from the page so the ul list is empty.

Part 1c: Prevent the user adding more than 10 items to the list. 
If the clear button is clicked, the user may keep adding items. 

Part 1d:  Add validation using JavaScript. The form should only 
accept text of length between 1 and 50 characters.

Ignore the user input if there is no text entered
Display an alert error message if it the text too long - more than 
50 characters. Do not clear the text in the input.
 */

let newListItemButton = document.querySelector('#add-new-item-button')
let newListItemInput = document.querySelector('#new-list-item-input')
let clearListItemsButton = document.querySelector('#clear-list-button')
let listOfItems = document.querySelector('#list')

let listItemCount = 0
let maxItemCount = 5

clearListItemsButton.addEventListener('click', function() {
    listOfItems.innerHTML = ''   // single quotes good, double quotes good 
    listItemCount = 0 
})

newListItemButton.addEventListener('click', function(){
    if (listItemCount < maxItemCount) {
        let newItemText = newListItemInput.value   // value entered in a input element 
        if (isListItemValid(newItemText)) {
            let newListItemEl = document.createElement('li')
            newListItemEl.innerHTML = newItemText
            listOfItems.appendChild(newListItemEl)
            newListItemInput.value = ""
            listItemCount++ 
            console.log(listItemCount)
        }
    } else {
        alert('Too many items!')
    }
})

function isListItemValid(text) {
    if (text.length <= 0) {
        return false
    } 
    if (text.length > 50) {
        alert('The text is too long.')
        return false 
    }
    return true 
}