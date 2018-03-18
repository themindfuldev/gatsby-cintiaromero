export function smoothScroll(anchor, duration) {
  // Calculate how far and how fast to scroll
  var startLocation = window.pageYOffset;
  var endLocation = anchor.offsetTop;
  var distance = endLocation - startLocation;
  var increments = distance / (duration / 16);
  var stopAnimation;

  // Scroll the page by an increment, and check if it's time to stop
  var animateScroll = function () {
    window.scrollBy(0, increments);
    stopAnimation();
  };

  // If scrolling down
  if (increments >= 0) {
    // Stop animation when you reach the anchor OR the bottom of the page
    stopAnimation = function () {
      var travelled = window.pageYOffset;
      if ((travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
        clearInterval(runAnimation);
      }
    };
  }
  // If scrolling up
  else {
    // Stop animation when you reach the anchor OR the top of the page
    stopAnimation = function () {
      var travelled = window.pageYOffset;
      if (travelled <= (endLocation || 0)) {
        clearInterval(runAnimation);
      }
    };
  }

  // Loop the animation function
  var runAnimation = setInterval(animateScroll, 16);
};

export function scrollDown(e) {
  // Prevent the default link behavior
  e.preventDefault();

  // Get anchor link and calculate distance from the top
  const toggle = e.currentTarget;
  const dataID = toggle.getAttribute('href');
  const dataTarget = document.querySelector(dataID);
  const dataSpeed = toggle.getAttribute('data-speed');

  // If the anchor exists
  if (dataTarget) {
    // Scroll to the anchor
    smoothScroll(dataTarget, dataSpeed || 500);
  }

};