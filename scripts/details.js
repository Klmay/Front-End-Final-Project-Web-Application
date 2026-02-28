addEventListener("DOMContentLoaded", async function () {
    const urlparam = new URLSearchParams(window.location.search)
    const classID = urlparam.get('id')
    console.log("Class ID:", classID)

    if (!classID) {
        console.error("No class ID found in URL")
        return
    }

    try {
        const response = await fetch("http://localhost:3000/api/class/" + classID)
        const course = await response.json()
        console.log(course)

        document.querySelector("h1").textContent = course.Course

        const html = `
            <h3>Class - ${course.Course}</h3>
            <p>Teacher - ${course.teacher}</p>
            <p>Credit Hours - ${course.CreditHours}</p>
            <p>Description - ${course.description}</p>
        `

        document.querySelector("#classDetails").innerHTML = html

    } catch (error) {
        console.error("Error fetching class:", error)
        document.querySelector("#classDetails").innerHTML = "Error loading class details."
    }
})