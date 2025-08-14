 const scrollProgress = document.querySelector('.custom-scroll');

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const totalScrollableHeight = documentHeight - windowHeight;
    
    const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;
    
    scrollProgress.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateScrollProgress);

updateScrollProgress();