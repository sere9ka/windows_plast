const mobileMenu = () => {
    const btnsNavbar = document.querySelectorAll('.navbar-toggle')
    const navBar = document.getElementById('navbar-collapse')
    const width = document.documentElement.clientWidth
    

    const getToMenu = (e) => {
        navBar.classList.toggle('collapse')
        navBar.classList.toggle('navbar-collapse')
        // .navbar-collapse.collapse
    }

    btnsNavbar.forEach((btn, index) => {
        let btnItem = btn.querySelectorAll('span')
        btn.addEventListener('click', (e) => {
            // navBar.style.display = "flex"
            getToMenu(e)
        })
    })

    if (width >= 992) {
        getToMenu()
    } else return
}

export default mobileMenu