const htmlEl =  document.querySelector('html');
const searchDropdown = document.querySelector('.search__dropdown');
const searchOpen = document.querySelector('.search-opened');
const btnSearch = document.querySelector(".btn__search");
const mainApp = (function () {   

    // header sticky
    const headerSticky = () => {

        const body = document.body;
        const headerContainer =  document.querySelector(".header-wrapper");
        const headerTop = document.querySelector(".header-top");
        const headerContainerHeight = headerContainer.offsetHeight;
        const topHeaderHeight = headerTop.offsetHeight ||0;
        const targetScroll = topHeaderHeight + 200;


        window.addEventListener('scroll', function () {
            if (!body.classList.contains('zp-header-sticky')) return; // Early exit for efficiency
            console.log(targetScroll,window.scrollY);
            if(window.scrollY > targetScroll){
                headerContainer.classList.add('zp-sticky');
            }else{
                headerContainer.classList.remove('zp-sticky');
            }

        });
    };
    
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
    
    const btnSearchClick = () =>{
       
        btnSearch.addEventListener('click', function(e){
            e.preventDefault();            
            htmlEl.classList.toggle('search-opened');
            this.classList.toggle("open");
            searchDropdown.classList.toggle("active");
        });
    };

    const closeSearchDropdown = () => {
        document.addEventListener('click', function (e) {
            if (htmlEl.classList.contains("search-opened")){
                closeSideNav(e);
            }            
        });
    }

    const closeSideNav = function (e) {       
        if (!searchDropdown.contains(e.target) && !btnSearch.contains(e.target)) {
            htmlEl.classList.toggle('search-opened');
            btnSearch.classList.toggle("open");
            searchDropdown.classList.toggle("active");
        }
    };
    

    return {
        init: function () {
            tabCategoryMenuHover();
            btnSearchClick();
            closeSearchDropdown();
            headerSticky();
        },
    };
})();


document.addEventListener("DOMContentLoaded", function (event) {
    mainApp.init();
});


  