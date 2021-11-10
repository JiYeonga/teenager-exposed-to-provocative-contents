

let aboutBtn = document.querySelector('#aTag');
let xBtn = document.querySelector('#xBtn');

let blackBox = document.querySelector('#black');



aboutBtn.addEventListener('click', blackOpen);
xBtn.addEventListener('click', blackOpen);



function blackOpen()
{
    //console.log("ddkkdkdk");
    blackBox.classList.toggle('open');
}
