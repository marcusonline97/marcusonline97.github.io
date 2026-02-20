document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("emailCopyBtn");
    if (!emailButton) {
        return;
    }

    const originalContent = emailButton.innerHTML;
    const iconMarkup = emailButton.querySelector("img")?.outerHTML ?? "";

    emailButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = "Mjpersson97@gmail.com";

        navigator.clipboard.writeText(email)
            .then(() => {
                emailButton.innerHTML = `${iconMarkup} Copied!`;
                setTimeout(() => {
                    emailButton.innerHTML = originalContent;
                }, 1500);
            })
            .catch(err => {
                console.error("Clipboard error:", err);
            });
    });
});
