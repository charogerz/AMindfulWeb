// jumplink function to about project section
if (document.getElementById('about-link')) {
  document.getElementById('about-link').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({ behavior: "smooth" })
  })
}

// jumplink function to example videos section
if (document.getElementById('examples-link')) {
  document.getElementById('examples-link').addEventListener('click', () => {
    document.getElementById('examples-section').scrollIntoView({ behavior: "smooth" })
  })
}

// jumplink function to more info section
if (document.getElementById('more-info-link')) {
  document.getElementById('more-info-link').addEventListener('click', () => {
    document.getElementById('more-info-section').scrollIntoView({ behavior: "smooth" })
  })
}

// jumplink function to resources section
if (document.getElementById('resources-link')) {
  document.getElementById('resources-link').addEventListener('click', () => {
    document.getElementById('resources-section').scrollIntoView({ behavior: "smooth" })
  })
}