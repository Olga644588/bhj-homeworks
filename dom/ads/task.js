document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = cases.findIndex(caseElement =>
      caseElement.classList.contains('rotator__case_active')
    );

    if (currentIndex === -1 && cases.length > 0) {
      currentIndex = 0;
      cases[currentIndex].classList.add('rotator__case_active');
    }

    setInterval(() => {
      cases[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % cases.length;
      cases[currentIndex].classList.add('rotator__case_active');
    }, 1000);
  });
});
