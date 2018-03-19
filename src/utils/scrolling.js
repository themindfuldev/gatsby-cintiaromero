export function scrollIt(e) {
  e.preventDefault();

  const linkElement = e.currentTarget;
  const targetID = linkElement.getAttribute('href');
  const targetElement = document.querySelector(targetID);

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

};