//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let section1 = document.getElementById('test')
let section2 = document.getElementById('test2')

const options = {
    // root: someElement,
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add('pink-background')
        }
    })
}, options)

observer.observe(section1)
observer.observe(section2)

