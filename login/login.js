document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login successful!");

        // ✅ Store login state in localStorage
        localStorage.setItem("user", JSON.stringify(data));

        // ✅ Redirect to index.html
        window.location.href = "/index.html";
    } else {
        alert("Error: " + data.message);
    }
});
