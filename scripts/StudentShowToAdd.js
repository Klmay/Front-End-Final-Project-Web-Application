const userId = localStorage.getItem('id');


addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("http://localhost:3000/api/class");
      if (userId == null) {
    alert("it not going to work");
}
else{
     alert(userId);
}
    const courses = await response.json();

    let html = "";

    for (let course of courses) {
        let classID = course._id;

        html += `
            <tr>
                <td>${course.Course}</td>
                <td>${course.CreditHours}</td>
                <td>${course.teacher}</td>
                <td>
                    <a href="details.html?id=${classID}">Details</a>
                </td>
                <td>
                    <button onclick="addclass('${classID}')">Add</button>
                </td>
            </tr>
        `;
    }

    document.querySelector("#list_of_class").innerHTML = html;
    console.log(userId);
    
});


   async function addclass(classId) {
    const addedClass = { course: classId };

    const response = await fetch("http://localhost:3000/api/student/" + userId,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addedClass)
    });

    if (response.ok) {
        alert("Student Updated");
        console.log(userId);
       // location.reload();
    } else {
        document.querySelector("#error").innerHTML = "Cannot update Student";
    }
}
