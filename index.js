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
    }

}