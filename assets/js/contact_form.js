(function(){
    
    const sendForm = (e) => {
        e.preventDefault()

        const apiId = "AKfycbwj4hvut-et1gj3JZCZNcDgx6LBDnsnrCxddfrT3fmF5wG9VQUS2Zi6qkkzfhpf69_MKQ"
        const uri = `https://script.google.com/macros/s/${apiId}/exec`

        const encodedData = encodeURI(JSON.stringify({
            name: contactForm._replyto.value,
            email: contactForm._replyto.value,
            subject: `midhunhk_com contact form ${contactForm._replyto.value}`,
            message: contactForm.message.value,
        }))
        const request = `${uri}?data=${encodedData}`
    
        fetch(request)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                contactForm._replyto.value = ""
                contactForm.message.value = ""

                const messageSuccess = document.querySelector("#messageSuccess")
                messageSuccess.classList.remove('is-hidden')
            })

        return false;
    }
    
    const contactForm = document.getElementById("contactForm")
    contactForm.addEventListener("submit", sendForm)

})()