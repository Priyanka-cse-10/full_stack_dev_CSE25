const form = document.getElementById("requestForm");
const requestsDiv = document.getElementById("requests");

// GET all requests
async function getRequests() {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    requestsDiv.innerHTML = "";

    requests.forEach(request => {

        const div = document.createElement("div");

        div.className = "request";

        div.innerHTML = `
            <h3>${request.name}</h3>
            <p><b>Email:</b> ${request.email}</p>
            <p><b>Category:</b> ${request.category}</p>
            <p><b>Problem:</b> ${request.description}</p>
            <p><b>Priority:</b> ${request.priority}</p>

            <button onclick="updateRequest(${request.id})">
                Update
            </button>

            <button onclick="deleteRequest(${request.id})">
                Delete
            </button>
        `;

        requestsDiv.appendChild(div);
    });
}


// POST new request
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const request = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    await fetch("/api/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });

    form.reset();

    getRequests();
});


// PUT update request
async function updateRequest(id) {

    const name = prompt("Enter student name:");
    const email = prompt("Enter email:");
    const category = prompt("Enter category:");
    const description = prompt("Enter problem:");
    const priority = prompt("Enter priority:");

    await fetch(`/api/requests/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            category,
            description,
            priority
        })
    });

    getRequests();
}


// DELETE request
async function deleteRequest(id) {

    await fetch(`/api/requests/${id}`, {
        method: "DELETE"
    });

    getRequests();
}


// Load requests when page opens
getRequests();