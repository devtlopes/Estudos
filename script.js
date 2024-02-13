const container = document.getElementById('container')
const registterBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registterBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
 container.classList.remove("active");
})