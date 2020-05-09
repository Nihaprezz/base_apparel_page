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
    } else {
        console.log('no email found')
        addErrorStyle(input)
    }
}

function addErrorStyle(){
    let inputField = document.querySelector('#email')
    inputField.classList.add('input-error')

    let errorIcon = document.createElement('img');
    errorIcon.src = 'images/icon-error.svg';
    errorIcon.classList.add('error-icon') 
    inputField.parentNode.insertBefore(errorIcon, inputField.nextSibling);
    
   
    let errorText = document.createElement('p')
    errorText.innerText = 'Please provide a valid email';
    errorText.classList.add('error-text');

    let form = document.getElementById('form')
    form.appendChild(errorText)


}
