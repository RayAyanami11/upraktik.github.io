document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
    
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

    // Mengecilkan gambar berita
    const newsImages = document.querySelectorAll(".small-news-image");
    newsImages.forEach(img => {
        img.style.width = "150px"; // Ukuran lebih kecil sesuai kebutuhan
        img.style.height = "auto";
        img.style.objectFit = "cover";
        img.style.borderRadius = "5px"; // Tambahan untuk tampilan lebih rapi
        img.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    });
});
