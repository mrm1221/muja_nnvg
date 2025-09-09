function toggleDetails(element) {
  const details = element.querySelector('.details');

  // Hide all others
  document.querySelectorAll('.details').forEach(d => {
    if (d !== details) {
      d.style.maxHeight = null;
      d.style.opacity = 0;
    }
  });

  // Toggle selected
  if (details.style.maxHeight) {
    details.style.maxHeight = null;
    details.style.opacity = 0;
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
    details.style.opacity = 1;
  }
}
