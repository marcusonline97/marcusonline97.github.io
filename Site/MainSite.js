document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("emailCopyBtn");

    emailButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = "Mjpersson97@gmail.com"; 

        navigator.clipboard.writeText(email)
            .then(() => {
                emailButton.textContent = "Copied!";
                setTimeout(() => {
                    emailButton.textContent = "EmailMe";
                }, 1500);
            })
            .catch(err => {
                console.error("Clipboard error:", err);
            });
    });
});
