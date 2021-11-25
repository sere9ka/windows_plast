const mobileMenu = () => {
    const btnsNavbar = document.querySelectorAll('.navbar-toggle')
    const navBar = document.getElementById('navbar-collapse')

    

    const getToMenu = (e) => {
        navBar.classList.remove('navbar-collapse', 'collapse')
        // .navbar-collapse.collapse
    }

    btnsNavbar.forEach((btn, index) => {
        let btnItem = btn.querySelectorAll('span')
        btn.addEventListener('click', (e) => {
            // navBar.style.display = "flex"
            getToMenu(e)
        })
    })
}

export default mobileMenu