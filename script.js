// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the color box and button elements using document.getElementById
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random hexadecimal color code
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener('click', () => {
        // Change the background color of colorBox to the newly generated random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});

