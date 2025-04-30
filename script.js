// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const currentYearSpan = document.getElementById('current-year');
const downloadCvBtn = document.getElementById('download-cv');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Theme Toggle (Light/Dark Mode)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Scroll animations for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe section titles and timeline items
document.querySelectorAll('.section-title, .timeline-item').forEach(element => {
    element.classList.remove('fade-in'); // Remove default class
    observer.observe(element);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow and reduce padding when scrolling down
    if (scrollTop > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '1rem 0';
    }
    
    // Hide header when scrolling down, show when scrolling up (for mobile)
    if (window.innerWidth < 768) {
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add hover effect to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('current')) {
            item.querySelector('.timeline-content').style.transform = 'translateX(5px)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('current')) {
            item.querySelector('.timeline-content').style.transform = 'translateX(0)';
        }
    });
});

//Testimonials
// Improved Carousel functionality
const carouselContainer = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.indicator-dot');
const prevButton = document.querySelector('.carousel-arrow.prev');
const nextButton = document.querySelector('.carousel-arrow.next');
let currentIndex = 0;

// Initialize carousel
      function initCarousel() {
        // Calculate slide width dynamically based on container width
        const slideWidth = carouselContainer.clientWidth;
        
        // Set width for slides
        slides.forEach(slide => {
          slide.style.width = `${slideWidth}px`;
        });
        
        // Set initial position
        goToSlide(currentIndex);
        
        // Update button states
        updateArrowVisibility();
      }
      
      // Go to a specific slide
      function goToSlide(index) {
        const slideWidth = carouselContainer.clientWidth;
        currentIndex = index;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        updateActiveDot();
        updateArrowVisibility();
      }
      
      // Update active dot
      function updateActiveDot() {
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
      
      // Update arrow visibility
      function updateArrowVisibility() {
        if (currentIndex === 0) {
          prevButton.style.opacity = '0.3';
          prevButton.style.pointerEvents = 'none';
        } else {
          prevButton.style.opacity = '1';
          prevButton.style.pointerEvents = 'auto';
        }
        
        if (currentIndex === slides.length - 1) {
          nextButton.style.opacity = '0.3';
          nextButton.style.pointerEvents = 'none';
        } else {
          nextButton.style.opacity = '1';
          nextButton.style.pointerEvents = 'auto';
        }
      }
      
      // Event listeners for dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
      });
      
      // Arrow navigation
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          goToSlide(currentIndex - 1);
        }
      });
      
      nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
          goToSlide(currentIndex + 1);
        }
      });
      
      // Swipe functionality - FIXED VERSION
      let touchStartX = 0;
      let touchEndX = 0;
      let isDragging = false;
      let startTranslate = 0;
      
      function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchEndX = touchStartX; // Initialize with same value to handle tap without movement
        isDragging = true;
        startTranslate = currentIndex * carouselContainer.clientWidth;
        
        // Disable transition during drag
        track.style.transition = 'none';
      }
      
      function handleTouchMove(e) {
        if (!isDragging) return;
        
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        const newTranslate = startTranslate + diff;
        
        // Add resistance when trying to swipe past edges
        if ((currentIndex === 0 && diff < 0) || 
            (currentIndex === slides.length - 1 && diff > 0)) {
          track.style.transform = `translateX(-${startTranslate + (diff * 0.2)}px)`;
        } else {
          track.style.transform = `translateX(-${newTranslate}px)`;
        }
      }
      
      function handleTouchEnd(e) {
        if (!isDragging) return;
        
        // Re-enable transition
        track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        
        const swipeThreshold = carouselContainer.clientWidth * 0.2;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0 && currentIndex < slides.length - 1) {
            // Swipe left, go to next slide
            goToSlide(currentIndex + 1);
          } else if (diff < 0 && currentIndex > 0) {
            // Swipe right, go to previous slide
            goToSlide(currentIndex - 1);
          } else {
            // Snap back to current slide if at edges
            goToSlide(currentIndex);
          }
        } else {
          // Not enough swipe distance, snap back
          goToSlide(currentIndex);
        }
        
        isDragging = false;
      }
      
      // Add touch event listeners
      carouselContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
      carouselContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
      carouselContainer.addEventListener('touchend', handleTouchEnd);
      carouselContainer.addEventListener('touchcancel', handleTouchEnd);
      
      // Handle window resize
      window.addEventListener('resize', function() {
        // Reset transition temporarily to avoid animation during resize
        track.style.transition = 'none';
        
        // Reset position with new dimensions
        initCarousel();
        
        // Re-enable transition after a short delay
        setTimeout(() => {
          track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        }, 50);
      });
      
      // Initialize on load
      initCarousel();
      
      // Add keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (window.innerWidth <= 768) {
          if (e.key === 'ArrowLeft' && currentIndex > 0) {
            goToSlide(currentIndex - 1);
          } else if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
          }
        }
      });
// -------------

// Initialize AOS-like animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Modified timeline layout handler
    const handleTimelineLayout = () => {
        const timeline = document.querySelector('.timeline');
        const timelineContainer = document.querySelector('.timeline-container');
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        // Reset any inline styles
        if (timelineContainer) {
            timelineContainer.style.display = '';
        }
        
        // Reset any hover effects on smaller screens
        if (window.innerWidth <= 768) {
            timelineItems.forEach(item => {
                const content = item.querySelector('.timeline-content');
                if (content) {
                    content.style.transform = '';
                }
            });
        }
    };
    
    // Run on load and on resize
    handleTimelineLayout();
    window.addEventListener('resize', handleTimelineLayout);
    
    // Stagger the animations of the contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });    
  });

  
/*
// Add indication for horizontal scrolling on mobile timeline
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            // Add a subtle animation to indicate scrolling is possible
            setTimeout(() => {
                timeline.scrollLeft = 40;
                setTimeout(() => {
                    timeline.scrollLeft = 0;
                }, 800);
            }, 1000);
        }
    }
});
*/
