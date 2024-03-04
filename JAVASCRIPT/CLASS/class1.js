function displayColor(color) {
    const colorBox = document.getElementById('colorBox');
    const selectedColorText = document.getElementById('selectedColorText');
    colorBox.style.backgroundColor = color;
    selectedColorText.textContent = '"Your selected color is" ' + color;
}
