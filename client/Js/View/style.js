export const toggleMenu = ()=>{
    const btn = document.querySelector(".toggle-btn");
    const navItems = document.querySelector(".nav-items");

    btn.addEventListener("click", ()=>{
        navItems.classList.toggle("active");
    });
}