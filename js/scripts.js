function showImage(imageId) {
    const images = document.querySelectorAll('.image-container img');
    images.forEach((img) => {
        img.style.display = 'none';
    });

    const targetImage = document.getElementById(imageId);
    targetImage.style.display = 'block';
}