
const drawerEventListener = ()=>{
    document.querySelector(".drawer-btn").addEventListener("click", toggleDrawer);
};

const toggleDrawer = ()=>{
    const navDrawer = document.querySelector(".nav-drawer");
    navDrawer.classList.toggle("active");
}; 

export { drawerEventListener, toggleDrawer }

