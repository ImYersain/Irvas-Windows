const images = () => {
    const   imgPopup = document.createElement('div'),
            section = document.querySelector('.works'),
            bigImg = document.createElement('img');

    imgPopup.classList.add('popup_img');
    section.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';


    section.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            bigImg.style.maxWidth = '70%';
            bigImg.style.maxHeight = '70%';
            bigImg.style.borderRadius = '10px';
        }

        if(target && target.matches('.popup_img')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;