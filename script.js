let turn = 'X';
let gameOver =  false;

const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

const checkWin = () => {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    let boxItems = document.getElementsByClassName("boxItem");
    wins.forEach(element => {
        if ((boxItems[element[0]].innerText !== "") && (boxItems[element[0]].innerText === boxItems[element[1]].innerText) && (boxItems[element[1]].innerText === boxItems[element[2]].innerText)){
            document.getElementsByClassName("info")[0].innerText = boxItems[element[0]].innerText + " Won!";
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "12em";
        }
    });
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(ele => {
    let boxItem = ele.getElementsByClassName("boxItem")[0];
    ele.addEventListener('click', (e) => {
        if (boxItem.innerHTML === ''){
            boxItem.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    let boxItems = document.getElementsByClassName('boxItem');
    Array.from(boxItems).forEach(ele => {
        ele.innerText = "";
    })
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";
})