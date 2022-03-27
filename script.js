// Selectors
const btnNav = document.querySelector('.nav-btn')
const contentNav = document.querySelector('.nav-menu')
const btnNavImage = document.querySelector('.nav-btn img')

//Functions
function eventTester(e) {
    console.log(e)
}

function showNav() {
    contentNav.classList.toggle('show')

    if(btnNavImage.alt === "menu-icon") {
        showBtnClose()
    } else {
        showBtnNav()
    }
}

function showBtnClose() {
    btnNavImage.src = "./icons/close.png";
    btnNavImage.alt = "close-icon";
}

function showBtnNav() {
    btnNavImage.src = "./icons/menu.png";
    btnNavImage.alt = "menu-icon";
}

//Listeners
btnNav.addEventListener('click', showNav)