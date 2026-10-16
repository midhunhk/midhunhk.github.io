/*
 * Site-wide behaviour: navigation state and scroll reveal animations.
 * @author: Midhunhk
 */
(function () {
    const nav = document.getElementById('mhNav')

    if (nav) {
        const toggle = nav.querySelector('.mh-nav__toggle')

        // Switch the transparent navbar to a solid one once the page scrolls
        const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        // Mobile menu toggle
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open')
            toggle.setAttribute('aria-expanded', open)
        })

        // Close the mobile menu after picking a link
        nav.querySelectorAll('.mh-nav__menu a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open')
                toggle.setAttribute('aria-expanded', false)
            })
        })
    }

    // Reveal elements as they scroll into view
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'))
        return
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    items.forEach(el => observer.observe(el))
})()
