document.addEventListener("DOMContentLoaded", function() {
    var showMoreBtn = document.getElementById("showMoreBtn");
    var additionalInfo = document.getElementById("additionalInfo");
    
    showMoreBtn.addEventListener("click", function() {
        if (additionalInfo.style.display === "none") {
            additionalInfo.style.display = "block";
            showMoreBtn.textContent = "Згорнути";
        } else {
            additionalInfo.style.display = "none";
            showMoreBtn.textContent = "Дізнатися більше";
        }
        
    });
});
