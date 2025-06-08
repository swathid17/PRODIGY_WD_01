// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#222'; // darker color
  } else {
    header.style.backgroundColor = 'black'; // original color
  }
});

// Highlight clicked nav link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
