window.addEventListener('DOMContentLoaded', () => {
    console.log('connected...')

    //grab submit button
    let btn = document.querySelector('button');
    btn.addEventListener('click', (e) => submitForm(e))
})

function submitForm(e) {
    e.preventDefault();

    const emailRegex = /@/
    let input = document.querySelector('#email').value
    let results = input.match(emailRegex)
    
    if(results){
        console.log('email found')
        addSuccessStyle()
    } else {
        console.log('no email found')
        addErrorStyle()
    }
}

function addErrorStyle(){
    let inputField = document.querySelector('#email')
    inputField.classList.remove('input-success')
    inputField.classList.add('input-error')

    let errorIcon = document.createElement('img');
    errorIcon.src = 'images/icon-error.svg';
    errorIcon.classList.add('error-icon') 
    inputField.parentNode.insertBefore(errorIcon, inputField.nextSibling);
    
   
    let errorText = document.createElement('p')
    errorText.innerText = 'Please provide a valid email';
    errorText.classList.add('results-text');

    let form = document.getElementById('form')
    form.appendChild(errorText)
}

function addSuccessStyle(){
    let inputField = document.querySelector('#email')
    inputField.classList.add('input-success');

    //removing any error texts
    document.querySelector('.error-icon').remove();
    document.querySelector('.results-text').remove();

    //adding success text
    let successText = document.createElement('p');
    successText.classList.add('results-text');
    successText.innerText = 'Email sent'

    let form = document.getElementById('form')
    form.appendChild(successText)
}