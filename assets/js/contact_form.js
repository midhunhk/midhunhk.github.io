(function(){
    
    const sendForm = (e) => {
        e.preventDefault()

        const apiId = "AKfycbwj4hvut-et1gj3JZCZNcDgx6LBDnsnrCxddfrT3fmF5wG9VQUS2Zi6qkkzfhpf69_MKQ"
        const uri = `https://script.google.com/macros/s/${apiId}/exec`
        const message = contactForm.message.value

        const encodedData = encodeURI(JSON.stringify({
            name: contactForm._replyto.value,
            email: contactForm._replyto.value,
            subject: `midhunhk_com contact form ${contactForm._replyto.value}`,
            message: message,
        }))

        const messageError = document.querySelector("#messageError")
        
        if(message.length 
            && (message.length < 12 || message.split(' ').length < 2) ){
            messageError.classList.remove('is-hidden')
            return false;
        }

        const request = `${uri}?data=${encodedData}`
    
        fetch(request)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                contactForm._replyto.value = ""
                contactForm.message.value = ""

                const messageSuccess = document.querySelector("#messageSuccess")
                messageSuccess.classList.remove('is-hidden')
                messageError.classList.add('is-hidden')
            })

        return false;
    }
    
    const contactForm = document.getElementById("contactForm")
    contactForm.addEventListener("submit", sendForm)

})()

const scrollToSection = (section) => {
    const element = document.getElementById(section)
    const y = element.getBoundingClientRect().top + window.scrollY - 60;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
    return false
}