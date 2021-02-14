
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(hasClass){
//         title.classList.remove(CLICKED_CLASS);
//     } else{
//         title.classList.add(CLICKED_CLASS);
//     }
// }
function handleClick(){
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.addEventListener("click", handleClick);
}
init();


// function handleOffline(){
//     console.log("lalala");
// }

// function handleOnline(){
//     console.log("Welcome BACK!");
// }

// navigator.addEventListener("offline", handleOffline);
// navigator.addEventListener("online", handleOnline);

// window.addEventListener("click",handleClick);
//handleresize() : 지금 바로
//handleresize : 필요할 때



// const age = prompt("How Old Are You");
