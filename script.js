//Deel 1
const spottedAnimalsList = document.getElementById("spotted-animals-list");
const bigFiveBtns = document.getElementsByClassName("big-five-list-item");

const getAnimal = (getAnimalName) => {
    const Name = getAnimalName.srcElement.innerHTML;
    const newListItem = document.createElement("li");
    newListItem.innerHTML = Name;
    spottedAnimalsList.appendChild(newListItem);
}

Array.from(bigFiveBtns).forEach((buttonClick) =>
    buttonClick.addEventListener('click', getAnimal));



//Deel 2
const removeFirstItem = () => spottedAnimalsList.removeChild(spottedAnimalsList.children[0]);
const removeFirstItemBtn = document.getElementById("remove-first-item-button").addEventListener('click', removeFirstItem);


//Deel 3
const removeAllItems = () => {
    while (spottedAnimalsList.lastElementChild) {
        spottedAnimalsList.removeChild(spottedAnimalsList.lastElementChild)
    }
};
const remoleAllItemsBtn = document.getElementById("remove-all-button").addEventListener('click', removeAllItems);
