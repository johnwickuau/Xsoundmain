document.addEventListener('DOMContentLoaded', function() {
    const aiToggle = document.getElementById('ai-toggle');
    const soundToggle = document.getElementById('sound-toggle');
    const currentPrice = document.getElementById('current-price');
    
    const BASE_PRICE = 200;
    const AI_PRICE = 50;
    const SOUND_PRICE = 15;
    
    function updatePrice() {
        let finalPrice = BASE_PRICE;
        
        if (!aiToggle.checked) {
            finalPrice -= AI_PRICE;
        }
        
        if (!soundToggle.checked) {
            finalPrice -= SOUND_PRICE;
        }
        
        currentPrice.textContent = finalPrice.toFixed(2);
    }
    
    aiToggle.addEventListener('change', updatePrice);
    soundToggle.addEventListener('change', updatePrice);
    
    // Initialize price
    updatePrice();

    // Gradient functionality
    const gradientColor1 = document.getElementById('gradient-color-1');
    const gradientColor2 = document.getElementById('gradient-color-2');
    const applyGradientBtn = document.getElementById('apply-gradient');
    const headphonePreview = document.querySelector('.product-card'); // Add a preview element in your HTML

    applyGradientBtn.addEventListener('click', function() {
        const gradient = `linear-gradient(45deg, ${gradientColor1.value}, ${gradientColor2.value})`;
        headphonePreview.style.background = gradient;
    });
});