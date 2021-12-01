const images = () => {
    const   imgPopup = document.createElement('div'),
            section = document.querySelector('.works'),
            bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
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
        }

        if(target && target.matches('.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;