const images = [
    "broken_stair.jpg",
    "science_fiction.jpg",
    "sea.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 지금까지는 먼저 html에서 작성하고 JS를 사용해서 작성한 html을 다뤘지만
// 이번에는 JS에서 뭔가를 만들고 그걸 html에 추가하는 방식
// <img> 가 만들어짐
const bgImage = document.createElement("img"); 

// <img src="img/0.jpg"> 처럼 만들어짐
bgImage.src = `img/${chosenImage}`; 

console.log(bgImage);

// body에 html을 추가하기 위한 함수
document.body.appendChild(bgImage);