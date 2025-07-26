// Close dropdown when window is resized (e.g., fullscreen toggle)
window.addEventListener('resize', function() {
  const navbar = document.querySelector('.dropdown');
  if (navbar) {
    navbar.style.transform = 'translateY(-500px)';
  }
});

function hamburg(){
  console.log('Hamburger clicked');
  const navbar = document.querySelector(".dropdown")
  if (navbar) {
    navbar.style.transform = "translateY(0px)";
    lastOpened = Date.now(); // record time opened
    console.log('Dropdown found and opened');
  } else {
    console.log('Dropdown not found');
  }
}

// Open dropdown when hamburger icon is clicked
document.querySelectorAll('.hamburger').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from bubbling up
    hamburg();
  });
});
function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

// Close dropdown when a link is clicked
document.querySelectorAll('.dropdown .links a').forEach(link => {
  link.addEventListener('click', function() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
  });
});

// Close dropdown when clicking outside the menu
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  const hamburger = document.querySelector('.hamburger');
  const cancelBtn = document.querySelector('.cancel');
  if (!dropdown) return;
  // If dropdown is visible
  if (dropdown.style.transform === 'translateY(0px)') {
    // If click is outside dropdown, hamburger, and cancel button
    // Prevent immediate close after opening
    if (Date.now() - lastOpened < 100) return;
    if (!dropdown.contains(event.target) &&
        (!hamburger || !hamburger.contains(event.target)) &&
        (!cancelBtn || !cancelBtn.contains(event.target))) {
      dropdown.style.transform = 'translateY(-500px)';
    }
  }
});






// function hamburg(){
//   const navbar = document.querySelector(".dropdown")
//   navbar.style.transform = "translateY(0px)"
// }
// function cancel(){
//   const navbar = document.querySelector(".dropdown")
//   navbar.style.transform = "translateY(-500px)"
// }

// // Close dropdown when a link is clicked
// document.querySelectorAll('.dropdown .links a').forEach(link => {
//   link.addEventListener('click', function() {
//     const navbar = document.querySelector('.dropdown');
//     navbar.style.transform = 'translateY(-500px)';
//   });
// });