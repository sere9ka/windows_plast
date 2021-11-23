const sertModal = () => {
    const sectionDoc = document.getElementById('documents')
    const sertifikateBlocks = sectionDoc.querySelectorAll('.text-center > div')
    const body = document.querySelector('body')
    const overlay = document.querySelector('.overlay')

    const getClose = (newModal) => {
        newModal.remove()
        overlay.classList.toggle('overlay-open')
    }

    const getNewModal = (linkDocument) => {
        const newModal = document.createElement('div')
        const newImg = document.createElement('img')
        const newBtn = document.createElement('span')
        newBtn.classList.add('sert-modal__close')
        newBtn.textContent = 'x'
        newImg.classList.add('sert-img__modal')
        newImg.src = linkDocument
        newModal.append(newImg)
        newModal.append(newBtn)
        newModal.classList.toggle('modal-sert')

        overlay.append(newModal)

        overlay.classList.toggle('overlay-open')
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target === newBtn) {
                getClose(newModal)
            }
        })
    }


    sertifikateBlocks.forEach((sertifikateBlock, id) => {
        let sertLink = sertifikateBlock.querySelector('a')

        sertLink.addEventListener('click', (e) => {
            e.preventDefault()
            getNewModal(sertLink)
        })
    })

    
}

export default sertModal