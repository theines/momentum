const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//javascript를 통해서 html에 <img src="img/0.jpeg" />를 추가하고자 한다.
const bgImage = document.createElement("img"); //태그를 createElement로 만들고

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //만든 태그를 appendChild로 body 안에 넣는다