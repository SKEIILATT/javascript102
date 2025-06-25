"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("items");
    const img = document.getElementById("displayImage");
    const photographer = document.getElementById("photographer");
    const description = document.getElementById("description");
    const score = document.getElementById("score");
    const btnUp = document.getElementById("increaseScore");
    const btnDown = document.getElementById("decreaseScore");

    // Llenar el select con los nombres de los ítems
    Object.entries(itemData).forEach(([key, item], idx) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    let currentKey = null;

    // Mostrar datos al seleccionar un ítem
    select.addEventListener("change", (e) => {
        const key = e.target.value;
        if (!itemData[key]){
            return;
        } 
        currentKey = key;
        const item = itemData[key];
        img.src = item.image;
        photographer.value = item.photographer;
        description.value = item.description;
        score.value = item.score;
    });

    // Botón +1
    btnUp.addEventListener("click", () => {
        if (!currentKey){
            return;
        }
        itemData[currentKey].score++;
        score.value = itemData[currentKey].score;
    });

    // Botón -1
    btnDown.addEventListener("click", () => {
        if (!currentKey) return;
        itemData[currentKey].score--;
        score.value = itemData[currentKey].score;
    });
});
