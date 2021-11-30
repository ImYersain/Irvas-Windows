import axios from 'axios';
import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const   form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input'),
            formWrappers = document.querySelectorAll('[data-wrapper]');


    checkNumInputs('input[name="user_phone"]');

    const   message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, мы с вами скоро свяжемся',
        failure: 'Ошибка, что то пошло не так...'
    };

    const  postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        // let res = await fetch(url,{         просто вариант поста с фетчем, без отправки даты прям в датабазы, было изменено на пост с библиотекой эксиос, для отправки даты в дб.
        //     method: 'POST',
        //     body: data
        // });
        let res = await axios.post(url, {
            'user_name': data.name,
            'user_phone': data.phone,
            'window_type': data.type,
            'window_profile': data.profile,
            'window_width': data.width,
            'window.height': data.height
        });
        
        // return await res.text();
        return res;
    };

    


    const clearInputs = () => {
        inputs.forEach(item =>{
            item.value = '';
        });
    };
    
    form.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();                                          //AJAX

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // const formData = new FormData(item);
            const formData = {
                name : item.querySelector('[name = "user_name"]').value,
                phone : item.querySelector('[name = "user_phone"]').value,
            };
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    Object.assign(formData, state);
                }
            }
            console.log(formData);


            postData('http://localhost:3000/requests', formData)
                .then(res => {
                    console.log(res.data);
                    statusMessage.textContent = message.success;
                })
                .catch(res => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() =>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                    setTimeout(()=>{
                        formWrappers.forEach((item) =>{
                            item.style.display = 'none';
                            document.body.style.overflow = '';
                        });
                    }, 6000);
                },);
        });

    });

};





export default forms;