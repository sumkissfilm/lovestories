// ===== SHOWCASE CAROUSEL FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    const showcaseCarousel = document.querySelector('.showcase-carousel');
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.showcase-nav.prev');
    const nextBtn = document.querySelector('.showcase-nav.next');
    
    let currentSlide = 0;
    const totalSlides = showcaseItems.length;
    
    // Initialize the carousel
    function initCarousel() {
        if (showcaseItems.length === 0) return;
        
        // Set initial state
        showcaseItems[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Add event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Add dot event listeners
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
        
        // Add touch/swipe support for mobile
        addTouchSupport();
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;
        
        // Remove active class from current slide and dot
        showcaseItems[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = slideIndex;
        
        // Add active class to new slide and dot
        showcaseItems[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Trigger Instagram embed reload if needed
        reloadInstagramEmbeds();
    }
    
    // Go to next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    }
    
    // Go to previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }
    
    // Handle keyboard navigation
    function handleKeyboard(e) {
        switch(e.key) {
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
            case 'Home':
                goToSlide(0);
                break;
            case 'End':
                goToSlide(totalSlides - 1);
                break;
        }
    }
    
    // Add touch/swipe support for mobile
    function addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        showcaseCarousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        showcaseCarousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
            }
        }
    }
    
    // Reload Instagram embeds when slide changes
    function reloadInstagramEmbeds() {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }, 100);
    }
    
    // Auto-play functionality (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Pause auto-play on hover
    showcaseCarousel.addEventListener('mouseenter', stopAutoPlay);
    showcaseCarousel.addEventListener('mouseleave', startAutoPlay);
    
    // Pause auto-play on touch
    showcaseCarousel.addEventListener('touchstart', stopAutoPlay);
    showcaseCarousel.addEventListener('touchend', () => {
        setTimeout(startAutoPlay, 2000); // Resume after 2 seconds
    });
    
    // Initialize the carousel
    initCarousel();
    
    // Start auto-play
    startAutoPlay();
    
    // Accessibility improvements
    showcaseCarousel.setAttribute('role', 'region');
    showcaseCarousel.setAttribute('aria-label', 'Instagram 貼文展示');
    
    // Add ARIA labels to navigation
    if (prevBtn) {
        prevBtn.setAttribute('aria-label', '上一張 Instagram 貼文');
    }
    if (nextBtn) {
        nextBtn.setAttribute('aria-label', '下一張 Instagram 貼文');
    }
    
    // Update ARIA labels for dots
    dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', `前往第 ${index + 1} 張 Instagram 貼文`);
    });
}); 