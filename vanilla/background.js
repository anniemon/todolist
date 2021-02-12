const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); // 0~2까지 임의의 숫자 출력
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();

/*
실행 과정
먼저 getRandom함수를 통해 0~2까지 임의의 숫자 출력을 하고,
이를 다시 paintImage함수에 대입한다
여기서는 불러온 숫자에 +1을 더하는 방법으로 이미지명을 찾아 불러오고,
이를 html에 대입한다(body.appendChild)
또한 bgImage라는 클래스를 만들어 css에서 image를 꾸며준다.
*/