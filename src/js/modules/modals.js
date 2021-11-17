const modals = () => {

    function bindModal(triggerSelector, modalSeclector, closeSelector){
        const  trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSeclector),
        modalClose = document.querySelector(closeSelector);

     trigger.forEach(item => {
         item.addEventListener('click',(e)=>{
            if(e.target){
                e.preventDefault();
            }
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
         });
     });
     
     modalClose.addEventListener('click', ()=>{
        modal.style.display = 'none';
        document.body.style.overflow = '';
     }); 
     modal.addEventListener('click', (e) => {
        if(e.target == modal){
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
     });
    }


    function showThanksModalByTime(selector, time){
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }



   

    bindModal('.popup_engineer_btn', '.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup','.popup .popup_close');
    showThanksModalByTime('.popup', 60000);
};




export default modals;