const shipImg = "https://cdn-icons-png.flaticon.com/512/3117/3117957.png"
const waveImg ="https://cdn-icons-png.flaticon.com/512/403/403805.png?w=740&t=st=1683876489~exp=1683877089~hmac=e9ed3505bd2f9e86241dadb2d7b7461487c3e1378a184e7a15f90293331149b8";
let tableCells = document.querySelectorAll("td");
let images = document.querySelectorAll('img');
let reset = document.querySelector('button');
let shipPositions = new Set();
let shipCount = 0;
let clickCount = 0;

for(let i = 0; i<16; i++)
{
    tableCells[i].innerHTML=`<img src= ${waveImg}>`;
    tableCells[i].value = i;
}

for(;;)
{
    let randomPosition = Math.floor(Math.random() * 16);
    tableCells[randomPosition].innerHTML = `<img src= ${shipImg}>`;
    shipPositions.add(randomPosition);
    if(shipPositions.size == 5)
        break;
}

tableCells.forEach(tableCell => {
    tableCell.addEventListener('click', () => {
        tableCell.querySelector('img').style.display = "block";
        clickCount++;
        if(shipPositions.has(tableCell.value))
        {
            shipCount++;
        }
        if(shipCount == 5 && clickCount <=8)
            alert("Congratulations, You have won");
        if(clickCount > 8)
            alert("You Lose");
     })
     
})


reset.addEventListener('click', () => {
    shipCount=0;
    clickCount=0;
    tableCells.forEach(tableCell => {
        tableCell.querySelector('img').style.display = 'none';
    })
})


