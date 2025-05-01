// JAVASCRIPT FOR WEBV3

const exhibitions = [
    'People Power',
    'Close Encounters',
    'Complex Tokens',
    'MARIUPOL',
    'Signals',
    'democracies?',
    'New Order'
  ];
  
  const writings = [
    'Artur Żmijewski',
    'Chto Delat',
    'Gretchen Bender',
    'Ian Cheng',
    'Mark Bradford',
    'Rebecca Shore',
    'GaHee Park'
  ];
  
  const aboutItems = [
    'Hi!',
    'CV',
    'Contact'
  ];

  
  const details = document.getElementById('details');
  
  const menuConfigs = [
    {
      id: 'exhibitions',
      items: exhibitions,
      layoutSource: 'projectLayouts'
    },
    {
      id: 'writings',
      items: writings,
      layoutSource: 'textLayouts'
    },
    {
      id: 'about',
      items: aboutItems,
      layoutSource: 'aboutLayouts'
    }
  ];
  
  function isMobileDevice() {
    return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
  }
  
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
      menu.dataset.visible = 'false';
    });
  }
  
  function initDropdownBehavior() {
    const isMobile = isMobileDevice();
  
    menuConfigs.forEach(config => {
      const toggle = document.getElementById(`${config.id}-toggle`);
      const menu = document.getElementById(`${config.id}-menu`);
      const container = toggle.parentElement;
  
      // Populate menu
      menu.innerHTML = '';
      menu.dataset.visible = 'false';
  
      config.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns(); // Close everything
          menu.dataset.visible = 'false';
  
          if (config.layoutSource === 'projectLayouts') {
            details.innerHTML = projectLayouts[item] || `<p>No layout found for "${item}"</p>`;
          } else if (config.layoutSource === 'textLayouts') {
            details.innerHTML = textLayouts[item] || `<p>No layout found for "${item}"</p>`;
          } else if (config.layoutSource == 'aboutLayouts') {
            details.innerHTML = aboutLayouts[item] || `<p>No layout found for "${item}"</p>`;
          } else {
            details.innerHTML = `<div class="text-layout"><h2>${item}</h2><p>Content coming soon...</p></div>`;
          }
        });
        menu.appendChild(li);
      });
  
      if (isMobile) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
  
          const currentlyVisible = menu.dataset.visible === 'true';
          closeAllDropdowns();
  
          if (!currentlyVisible) {
            menu.style.display = 'block';
            menu.dataset.visible = 'true';
          }
        });
      } else {
        container.addEventListener('mouseenter', () => {
          menu.style.display = 'block';
        });
        container.addEventListener('mouseleave', () => {
          menu.style.display = 'none';
        });
      }
    });
  
    // Global click listener (only needed on mobile)
    if (isMobile) {
      document.addEventListener('click', () => {
        closeAllDropdowns();
      });
    }
  }
  
  initDropdownBehavior();

// RANDOM COLOR FUNCTION

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // SQUARE ANIMATIONS!
  function startIndependentSquareBehavior(id) {
    const el = document.getElementById(id);
    if (!el) return;
  
    let angle = 0;
    let direction = Math.random() > 0.5 ? 1 : -1;
  
    // Change direction at random intervals (5–10 sec)
    setInterval(() => {
      direction = Math.random() > 0.5 ? 1 : -1;
    }, 5000 + Math.random() * 5000);
  
    // Rotate every 100–300ms
    const rotateSpeed = 100 + Math.random() * 200;
    setInterval(() => {
      angle += direction * 0.5;
      el.style.transform = `rotate(${angle}deg)`;
    }, rotateSpeed);
  
    // Change color every 2–6 sec
    const scheduleColorChange = () => {
      setTimeout(() => {
        el.style.backgroundColor = getRandomColor();
        scheduleColorChange(); // recurse
      }, 2000 + Math.random() * 4000);
    };
  
    scheduleColorChange();
  }
  
  // Start animation for each square
  startIndependentSquareBehavior('square-one');
  startIndependentSquareBehavior('square-two');
  startIndependentSquareBehavior('square-three');
  

// Clear #details when name is clicked AND change background color when name is clicked (sometimes)
const nameToggle = document.getElementById('name-toggle');
const headerGrid = document.querySelector('.header-grid');

const originalBodyBg = getComputedStyle(document.body).backgroundColor;
const originalHeaderBg = getComputedStyle(headerGrid).backgroundColor;

nameToggle.addEventListener('click', () => {
  const isDetailsEmpty = details.innerHTML.trim() === '';

  if (isDetailsEmpty) {
    const randomColor = getRandomColor();
    
    document.body.style.backgroundColor = randomColor;
    headerGrid.style.backgroundColor = randomColor;

    setTimeout(() => {
      document.body.style.backgroundColor = originalBodyBg;
      headerGrid.style.backgroundColor = originalHeaderBg;
    }, 3000); // 3 seconds
  } else {
    details.innerHTML = '';
  }
});

//   RANDOM NAME FONT STYLE & SIZE CHANGE (TURN ON IF U WANT BUT IDK)

//   function startSubtleFontVariationLoop() {
//     const name = document.getElementById('name-toggle');
//     if (!name) return;
  
//     const fontSizes = ['1.5rem', '1.75rem', '2rem', '2.25rem'];
//     const fontWeights = ['300', '400', '500', '600', '700'];
  
//     setInterval(() => {
//       const size = fontSizes[Math.floor(Math.random() * fontSizes.length)];
//       const weight = fontWeights[Math.floor(Math.random() * fontWeights.length)];
  
//       name.style.fontSize = size;
//       name.style.fontWeight = weight;
//     }, 5000 + Math.random() * 4000); // every 5–9 sec
//   }
  
//   startSubtleFontVariationLoop();
  

  // —————— AMBIENT SHAPE COLOR LOOP ——————

// function getRandomColor() {
//     const palette = ['#f7a072', '#7ec4cf', '#c1a1d3', '#ffd972', '#e6e2dc', '#9ad3bc'];
//     return palette[Math.floor(Math.random() * palette.length)];
//   }
  
//   function startAmbientColorLoop() {
//     const shapes = document.querySelectorAll('.shape');
  
//     setInterval(() => {
//       shapes.forEach(shape => {
//         if (shape.classList.contains('triangle')) {
//           shape.style.borderBottomColor = getRandomColor();
//         } else {
//           shape.style.backgroundColor = getRandomColor();
//         }
//       });
//     }, 2500); // every 2.5 seconds
//   }
  
//   startAmbientColorLoop();
 
  
 // —————— AMBIENT SHAPE ROTATION LOOP ——————

// function startAmbientRotationLoop() {
//     const shapes = document.querySelectorAll('.shape:not(.triangle)'); // skip triangles
  
//     shapes.forEach(shape => {
//       let angle = 0;
//       let direction = 1; // 1 = clockwise, -1 = counterclockwise
  
//       // Randomize rotation direction every 10–20 seconds
//       setInterval(() => {
//         direction = Math.random() > 0.5 ? 1 : -1;
//       }, 10000 + Math.random() * 10000); // 10–20 sec
  
//       // Rotate slightly every 100ms
//       setInterval(() => {
//         angle += direction * 0.2; // very slow
//         shape.style.transform = `rotate(${angle}deg)`;
//       }, 100);
//     });
//   }
  
//   startAmbientRotationLoop();

//   SQUARE SHAPES TEST AREA

// function getRandomColor() {
//     const colors = ['#f7a072', '#7ec4cf', '#c1a1d3', '#ffd972', '#9ad3bc'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }
  