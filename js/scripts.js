function showImage(imageNumber) {
    // Hide all images
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => image.style.display = 'none');

    // Show the selected image
    const selectedImage = document.querySelector(`.image-container img:nth-child(${imageNumber})`);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}