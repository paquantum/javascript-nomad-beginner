const images = [
    "broken_stair.jpg",
    "science_fiction.jpg",
    "sea.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); 

bgImage.src = `img/${chosenImage}`; 

document.body.appendChild(bgImage);