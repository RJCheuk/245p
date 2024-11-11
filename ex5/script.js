function setupTabs() {
    // Get all the tab buttons
    document.querySelectorAll('.tabs__button').forEach((button) => {
      // Add event listener for click events on each tab button
      button.addEventListener('click', () => {
        // Get the sidebar and container to access the correct content
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
  
        // Get the tab number from the data attribute
        const tabNumber = button.dataset.forTab;
  
        // Find the corresponding content using data-tab
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);
  
        // Remove the active class from all buttons and contents
        sideBar.querySelectorAll('.tabs__button').forEach((btn) => {
          btn.classList.remove('tabs__button--active');
        });
        tabsContainer.querySelectorAll('.tabs__content').forEach((tab) => {
          tab.classList.remove('tabs__content--active');
        });
  
        // Add the active class to the clicked button and the corresponding content
        button.classList.add('tabs__button--active');
        tabToActivate.classList.add('tabs__content--active');
      });
    });
  }
  
  // Wait for the DOM to be fully loaded before running the function
  document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
  });
  