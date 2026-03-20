function analyzeStyle() {
    const result = document.getElementById("result");

    result.innerHTML = "⏳ Analyzing...";

    setTimeout(() => {
        result.innerHTML = `
            <h2>Your Style: Casual Streetwear</h2>
            <p>Suggestion: Try sneakers and a denim jacket</p>
        `;
    }, 2000);
}