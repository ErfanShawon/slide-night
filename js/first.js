const navBtn = document.querySelector("nav .btn button");
const sidebar = document.querySelector('.Sidebar')

const sideBarOpen = () => {
    sidebar.classList.add('active');

};

navBtn.addEventListener("click", sideBarOpen);

const cancelBtn = document.querySelector(".cancelbtn");

const closesideBar = () => {
    sidebar.classList.remove('active');
}

cancelBtn.addEventListener('click', closesideBar);



const darkModeBtn = document.querySelector(".darkModeBtn");
const body = document.querySelector('body')

const darkMode = () => {
 body.classList.toggle('darkmood');
}


darkModeBtn.addEventListener('click', darkMode);