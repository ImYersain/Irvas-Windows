const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {

    const   header = document.querySelector(headerSelector),
                tabs = document.querySelectorAll(tabsSelector),
                content = document.querySelectorAll(contentSelector);
        
        function hideTabContent(){
            content.forEach(item => {
                item.style.display = 'none';
                item.classList.add('animated','wow');                
            });
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        function showTabContent(i){
            content[i].style.display = 'block';
            content[i].classList.add('fadeIn');
            tabs[i].classList.add(activeClass);
        }

        header.addEventListener('click',(e) => {
            const target = e.target;
            // 1 вариант, с проверкой класса у таргета и его родителя с помощью регулярных выражений(замена точки у класса на ничего, из за метода класлист который знает что это класс)
            // if(target.classList.contains(tabsSelector.replace(/\./, "")) ||             
            // target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))
            if(target && target.closest(tabsSelector)){
                tabs.forEach((item, i) => {
                    if(target == item || target.parentNode == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        hideTabContent();
        showTabContent(0);




};




export default tabs;
