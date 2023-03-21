const input = document.getElementById('email')
const submit = document.getElementById('submit')
const errorMessage = document.querySelector('.error-message')

const socialLinks = document.querySelectorAll('.social-icons a')
const icons = document.querySelectorAll('.social-icons a i')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (!input.checkValidity()) {
        input.style.outline = '1px solid var(--error)'
        errorMessage.style.display = 'block'
    } else {
        input.style.outline = 'none'
        errorMessage.style.display = 'none'
    }
})

for (let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].addEventListener('mouseover', () => {
        icons[i].style.color = 'var(--cyan)'
    })

    socialLinks[i].addEventListener('mouseout', () => {
        icons[i].style.color = '#fff'
    })
}

