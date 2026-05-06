document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    "section, footer, .stat, .menu-item, .event, h1, h2, p"
  );

  // Initial hidden state
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)"; 
    el.style.transition = "opacity 0.25s ease-out, transform 0.25s ease-out"; 
  });

  function animateOnScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.85) {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, index * 10); 
      }
    });
  }

  // Trigger on scroll and on load
  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);
});

  //mobile menu

const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");

  // Toggle mobile menu
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Change navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

 // the Menu start

   const filterButtons = document.querySelectorAll(".filter-buttons button");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        document.querySelector(".filter-buttons button.active").classList.remove("active");
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        menuItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
    // the Menu end




// the statistics
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / speed;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger animation only when section is visible
  const statsSection = document.querySelector("#coffino-stats");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});

//slidshow


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}