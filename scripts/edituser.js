addEventListener("DOMContentLoaded", async function() {
    const urlparam = new URLSearchParams(window.location.search);
    const userID = urlparam.get('id');

    // Load current privilege
    const response = await fetch("http://localhost:3000/api/userinfo/" + userID);
    if (response.ok) {
        const user = await response.json();
        document.querySelector("#privilege").value = user.privilege;
    } else {
        document.querySelector("#error").innerText = "Cannot load user info";
    }

    // Update button listener
    document.querySelector("#UpdateBtn").addEventListener("click", async () => {
        const privilege = document.querySelector("#privilege").value;

        const updateResp = await fetch("http://localhost:3000/api/user/" + userID, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ privilege })
        });

        if (updateResp.ok) {
            const updatedUser = await updateResp.json();
            alert(`User Updated. New privilege: ${updatedUser.privilege}`);
        } else {
            document.querySelector("#error").innerText = "Cannot update user";
        }
    });
});