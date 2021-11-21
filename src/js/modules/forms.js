import axios from 'axios';


const forms = () => {
    const   form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, мы с вами скоро свяжемся',
        failure: 'Ошибка, что то пошло не так...'
    };

    const  postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        // let res = await fetch(url,{
        //     method: 'POST',
        //     body: data
        // });
        let res = await axios.post(url, {
            'user_name': data.name,
            'user_phone': data.phone,
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
                },);
        });

    });

};





export default forms;