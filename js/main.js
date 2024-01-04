
const mainApp = (function () {   

    const tabCategoryMenuHover = () => {
        const verticalNavItems = document.querySelectorAll('.category_menu_item');      
        verticalNavItems.forEach(item => {
          item.addEventListener('mouseover', function () {

            const tabContent = document.querySelectorAll('.category_menu_content .tab-content');
            tabContent.forEach(inner => inner.style.display = 'none');      

            verticalNavItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            const selectedTab = this.querySelector('a').getAttribute('href');
            if(document.querySelector(selectedTab)){
                document.querySelector(selectedTab).style.display = 'block';
            }
                     
          });
        });
    };


    return {
        init: function () {
            tabCategoryMenuHover();
        },
    };
})();


document.addEventListener("DOMContentLoaded", function (event) {
    mainApp.init();
});


  