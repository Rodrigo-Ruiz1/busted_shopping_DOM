'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');

    const generateList = document.getElementById('generateList');


    generateList.addEventListener('click', function() {
        const inputItems = document.querySelectorAll('input');
        const listElement = document.createElement('ul');

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElement.append(listItem);
        });
        
        myList.append(listElement);
    });
});
