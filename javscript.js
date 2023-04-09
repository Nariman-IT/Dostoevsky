var btn = document.getElementById('btn');
var panel = document.getElementById('panel');
var isOpen = false;

btn.addEventListener('click', function() {
  if (isOpen) {
    panel.classList.remove('open');
    isOpen = false;
    btn.innerText = 'Открыть';
  } else {
    panel.classList.add('open');
    isOpen = true;
    btn.innerText = 'Закрыть';
  }
});