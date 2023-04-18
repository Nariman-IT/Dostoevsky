const author = document.getElementById('author');
const books = document.getElementById('books');
const information = document.getElementById('information');
const navigation = document.getElementById('navigation');
let isOpenAutor,isOpenBooks,isOpeninformation, isOpennavigation = false;


 author.addEventListener('click', function() {
  if (isOpenAutor) {
    panel_author.classList.remove('open');
    isOpenAutor = false;
  } else {
    panel_author.classList.add('open');
    isOpenAutor = true;
    panel_books.classList.remove('open');
    isOpenBooks = false;
    panel_navigation.classList.remove('open');
    isOpennavigation = false;
    panel_information.classList.remove('open');
    isOpeninformation = false;
  }
});


books.addEventListener('click', function() {
  if (isOpenBooks) {
    panel_books.classList.remove('open');
    isOpenBooks = false;
  } else {
    panel_books.classList.add('open');
    isOpenBooks = true;
    panel_author.classList.remove('open');
    isOpenAutor = false;
    panel_navigation.classList.remove('open');
    isOpennavigation = false;
    panel_information.classList.remove('open');
    isOpeninformation = false;
  }
});



information.addEventListener('click', function() {
  if (isOpeninformation) {
    panel_information.classList.remove('open');
    isOpeninformation = false;
  } else {
    panel_information.classList.add('open');
    isOpeninformation = true;
    panel_author.classList.remove('open');
    isOpenAutor = false;
    panel_navigation.classList.remove('open');
    isOpennavigation = false;
    panel_books.classList.remove('open');
    isOpenBooks = false;
  }
});


navigation.addEventListener('click', function() {
  if (isOpennavigation) {
    panel_navigation.classList.remove('open');
    isOpennavigation = false;
  } else {
    panel_navigation.classList.add('open');
    isOpennavigation = true;
    panel_author.classList.remove('open');
    isOpenAutor = false;
    panel_books.classList.remove('open');
    isOpenBooks = false;
    panel_information.classList.remove('open');
    isOpeninformation = false;
  }
});
