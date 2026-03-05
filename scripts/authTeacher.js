class Auth {
    constructor() {
        this.body = document.body;
        this.body.style.display = "none";

        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth) {

        if (!auth) {
            window.location.replace("/login.html");
            return;
        }

        if (auth === "3" || auth === "2") {
            this.body.style.display = "block";
            return;
        }

        window.location.replace("/unauthorized.html");
    }

    logOut() {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("uname");
        window.location.replace("/login.html");
    }
}
     