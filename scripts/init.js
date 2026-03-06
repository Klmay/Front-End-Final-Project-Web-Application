
/*
const Auth = new Auth()
document.querySelector("#logout").addEventListener("click",(e) =>{
    auth.logOut()
})*/
document.addEventListener("DOMContentLoaded", () => {
    const auth = new Auth();

    const logoutBtn = document.querySelector("#logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            auth.logOut();
        });
    }
});