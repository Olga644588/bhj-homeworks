document.addEventListener('DOMContentLoaded', function() {
  const tabGroups = document.querySelectorAll('.tab__navigation');

  tabGroups.forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.tab');
    const tabContents = tabGroup.nextElementSibling.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContents.forEach(c => c.classList.remove('tab__content_active'));

        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
      });
    });
  });
});
