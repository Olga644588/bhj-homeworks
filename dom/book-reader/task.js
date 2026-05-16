document.addEventListener('DOMContentLoaded', function() {
  const fontSizeControls = document.querySelectorAll('.font-size');
  const book = document.getElementById('book');

  fontSizeControls.forEach(control => {
    control.addEventListener('click', function(event) {
      event.preventDefault();

      fontSizeControls.forEach(btn => {
        btn.classList.remove('font-size_active');
      });

      this.classList.add('font-size_active');

      const size = this.getAttribute('data-size');

      book.classList.remove('book_fs-small', 'book_fs-big');

      if (size === 'small') {
        book.classList.add('book_fs-small');
      } else if (size === 'big') {
        book.classList.add('book_fs-big');
      }
    });
  });
});
