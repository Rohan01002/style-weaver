const upload = document.getElementById("imageUpload");
const result = document.getElementById("result");

upload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            result.innerHTML = `
                <img src="${reader.result}" width="200" style="border-radius:10px;">
            `;
        };

        reader.readAsDataURL(file);
    }
});

function analyzeStyle() {
    result.innerHTML = "⏳ Analyzing your style...";

    setTimeout(() => {
        result.innerHTML += `
            <h2>Your Style: Casual Streetwear</h2>
            <p>Suggestion: Try sneakers and a denim jacket</p>
        `;
    }, 2000);
}