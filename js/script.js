if (document.getElementById('examples-link')) {
  document.getElementById('examples-link').addEventListener('click', () => {
    document.getElementById('examples-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('more-info-link')) {
  document.getElementById('more-info-link').addEventListener('click', () => {
    document.getElementById('more-info-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('resources-link')) {
  document.getElementById('resources-link').addEventListener('click', () => {
    document.getElementById('resources-section').scrollIntoView({behavior: "smooth"})
  })
}

window.addEventListener('load', function() {
  new Accessibility();
}, false);