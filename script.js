// let heading = document.getElementById("heading");//h1
// console.dir(heading);vv

// let headings = document.getElementsByClassName("heading-Class");
// console.dir(headings);
// console.log(headings);

// let paragh = document.getElementsByTagName("p");
// console.dir(paragh);

// let frtEle = document.querySelector("#myId");
// console.log(frtEle);

// let frtEleall = document.querySelectorAll("#myId");
// console.log(frtEleall);

// let frtElement = document.querySelectorAll("#myId");
// console.dir(frtElement);
// console.log(frtElement);
// let elements = document.querySelectorAll("p");
// console.dir(elements);

// let frtElement = document.querySelector("#myId");
// console.dir(frtElement);
// console.log(frtElement);

// // let secElement = document.querySelectorAll(".myClass");
// // console.dir(secElement);
// // console.log(secElement);

// let secondElement = document.querySelectorAll(".myClass");
// console.dir(secondElement);
// console.log(secondElement);

// let div = document.querySelector("div");
// console.dir(div);

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna Collage Student";

// let divs = document.querySelectorAll(".box");

// let idx = 1;

// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// divs[0].innerText = "new unique Value 1";
// divs[1].innerText = "new Unique Value 2";
// divs[2].innerText = "new unique Value 3";
// divs[3].innerText = "new unique Value 4";

// let btn1 = document.querySelector("#btn1");

// btn1.ondblclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);//26
// }

// let box2 = document.querySelector(".box2");

// box2.onmouseover = () => {
//     console.log("box was hover");
//     alert("box2 was clicked");
// }
// onlaod = function (){
//     let parent = document.getElementById('drag');
//     let frag = document.createDocumentFragment();
//     while (parent.children.length){
//         frag.appendChild(parent.children[Math.floor
//             (Math.random() * parent.children.length)]);
//     }
//     parent.appendChild(frag);
// }

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnjawad = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnjawad = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnjawad) {
            box.innerText = "JAWAD";
            turnjawad = false;
        } else {
            box.innerText ="AYESHA";
            turnjawad = true;
        }
        box.disabled = true;

        checkWinner()
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
    };
    const enableBoxes = () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
        };
    
    

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes;
}

const checkWinner = () => {
    for(let pattern of winPattern) {
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
    
       if(pos1val !="" && pos2val !="" && pos3val !="") {
        if(pos1val === pos2val && pos2val === pos3val) {
            console.log("winner", pos1val);
            showWinner(pos1val);
        }
       }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);