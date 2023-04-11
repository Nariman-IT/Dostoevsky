var btn = document.getElementById('btn');
var panel = document.getElementById('panel');
var panelClose = document.getElementById('panelClose');
var isOpen = false;

btn.addEventListener('click', function() {
  if (isOpen) {
    panel.classList.remove('open');
    isOpen = false;
  } else {
    panel.classList.add('open');
    isOpen = true;
  }
});

panelClose.addEventListener('click', function() {
  if (isOpen) {
    panel.classList.remove('open');
    isOpen = false;
  } else {
    panel.classList.add('open');
    isOpen = true;
  }
});