//Function to show modal when image is clicked
(function () {
  function openModal(img) {
    if (modal) {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }
  }
  
  const images = document.querySelectorAll('img:not(.no-modal)');
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      openModal(this);
    });
  });

  function closeModal() {
    if (modal) {
      modal.style.display = "none";
    }
  }

  const modal = document.getElementById('myModal');
  const modalImg = modal ? document.getElementById("img01") : null;
  const captionText = modal ? document.getElementById("caption") : null;

  const span = document.getElementsByClassName("close")[0];
  const screen = document.getElementsByClassName("modal")[0];

  if (span) {
    span.onclick = closeModal;
  }

  if (screen) {
    screen.onclick = closeModal;
  }

  function loadImage(img) {
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.addEventListener('load', resolve);
      }
    });
  }

// Function to switch stylesheets
    const h1Element = document.querySelector('h1');
    let tapCount = 0;
    let lastTapTime = 0;

    function switchStylesheet() {
        const stylesheet = document.querySelector('link[rel="stylesheet"][href*="style"]');
        if (stylesheet) {
            const currentHref = stylesheet.getAttribute('href');
            const newHref = currentHref === '/css/style-2024-10.css' ? '/css/style-2025-01.css' : '/css/style-2024-10.css';
            stylesheet.setAttribute('href', newHref);
            
            // Store the new stylesheet in localStorage
            localStorage.setItem('preferredStylesheet', newHref);
        }
    }

    function loadPreferredStylesheet() {
        const preferredStylesheet = localStorage.getItem('preferredStylesheet');
        if (preferredStylesheet) {
            const stylesheet = document.querySelector('link[rel="stylesheet"][href*="style"]');
            if (stylesheet) {
                stylesheet.setAttribute('href', preferredStylesheet);
            }
        }
    }

    h1Element.addEventListener('click', () => {
        const currentTime = new Date().getTime();

        if (currentTime - lastTapTime > 500) {
            tapCount = 0;
        }

        tapCount++;
        lastTapTime = currentTime;

        if (tapCount === 3) {
            switchStylesheet();
            tapCount = 0;
        }
    });

// Function for responsive navigation menu
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const nav = document.querySelector('nav');
    hamburger.classList.toggle('active');
    links.classList.toggle('active');
    nav.classList.toggle('active');
}

// Ensure toggleMenu is accessible globally
window.toggleMenu = toggleMenu;

    document.querySelectorAll(".quote").forEach((quote) => {
      const bigText = quote.getAttribute("big-text");
      if (!bigText) {
        quote.setAttribute("big-text", "“");
      }
    });

    async function handleImageAspectRatio(figureElement) {
      const imgElement = figureElement.querySelector('img');
      await loadImage(imgElement);

      const image = new Image();
      image.src = imgElement.src;

      if (image.height * 1.1 >= image.width) {
        figureElement.classList.add('half-width');
      }
    }

  function addExternalLinkClass() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        if (link.hostname && link.hostname !== window.location.hostname) {
            link.classList.add('external');
        }
    });
}

// Call the function after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addExternalLinkClass);

    document.addEventListener("DOMContentLoaded", function () {
      loadPreferredStylesheet();
      const figureElements = document.querySelectorAll('figure');
      figureElements.forEach(function (figureElement) {
        handleImageAspectRatio(figureElement);
      });
    });
  })();
