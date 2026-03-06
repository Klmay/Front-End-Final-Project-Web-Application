let userId = "1"

addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#createChestBtn")
        .addEventListener("click", createChest);
});

async function createChest() {

    const newChest = {
        userID: userId,
        courses: []
    };

    const response = await fetch("http://localhost:3000/api/newchest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChest)
    });

    if (response.ok) {
        alert("New chest created");
    } else {
        document.querySelector("#error").innerHTML = "Cannot add class";
    }
}