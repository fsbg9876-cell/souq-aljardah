// Allow the browser to clear the CSS :target state when a zoomed photo closes.
// The original slideshow manages slide changes with history.replaceState.
window.addEventListener('click', event => {
  const link = event.target.closest?.('a[href^="#"]');
  const openDialog = link?.closest('[role="dialog"]:target');
  const slide = link && document.getElementById(link.hash.slice(1));
  if (!openDialog || !slide?.matches('body > section')) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.replace(link.hash);
}, true);
