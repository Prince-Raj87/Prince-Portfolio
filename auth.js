document.addEventListener("DOMContentLoaded", () => {
    
    // Registration Logic
    const regForm = document.getElementById("registerForm");
    if (regForm) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("regName").value;
            const email = document.getElementById("regEmail").value;
            const password = document.getElementById("regPassword").value;

            localStorage.setItem("user_name", name);
            localStorage.setItem("user_email", email);
            localStorage.setItem("user_password", password);

            document.getElementById("regMessage").innerText =
                "Registration Successful! Redirecting to Login...";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        });
    }

    // Login Logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedEmail = localStorage.getItem("user_email");
            const storedPassword = localStorage.getItem("user_password");

            if (email === storedEmail && password === storedPassword) {
                document.getElementById("loginMessage").innerText =
                    "Login Successful! Redirecting...";

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                document.getElementById("loginMessage").innerText =
                    "Invalid email or password!";
            }
        });
    }

    // Forgot Password Logic
    const forgotForm = document.getElementById("forgotForm");
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("forgotEmail").value;
            const storedEmail = localStorage.getItem("user_email");

            if (email === storedEmail) {
                localStorage.setItem("reset_allowed", "yes");

                document.getElementById("forgotMessage").innerText =
                    "Email verified! Redirecting to reset page...";

                setTimeout(() => {
                    window.location.href = "reset.html";
                }, 1500);
            } else {
                document.getElementById("forgotMessage").innerText =
                    "Email not found!";
            }
        });
    }

    // Reset Password Logic
    const resetForm = document.getElementById("resetForm");
    if (resetForm) {
        resetForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (localStorage.getItem("reset_allowed") !== "yes") {
                document.getElementById("resetMessage").innerText =
                    "Unauthorized request!";
                return;
            }

            const newPass = document.getElementById("newPassword").value;
            const confirmPass = document.getElementById("confirmPassword").value;

            if (newPass !== confirmPass) {
                document.getElementById("resetMessage").innerText =
                    "Passwords do not match!";
                return;
            }

            localStorage.setItem("user_password", newPass);
            localStorage.removeItem("reset_allowed");

            document.getElementById("resetMessage").innerText =
                "Password reset successful! Redirecting to Login...";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        });
    }
});