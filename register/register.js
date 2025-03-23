document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://portfoliobuilder-ln25.onrender.com/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Important!
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert("User registered successfully!");
        window.location.href = "/login/login.html"; // Redirect after success
    } else {
        alert(data.message || "Error registering user.");
    }
});
