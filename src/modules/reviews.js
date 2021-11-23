const reviews = () => {
    const comBlock = document.querySelector('.comments-container')
    const comRows = comBlock.querySelectorAll('.row')

    const getCommentRow = (comment, index) => {
        comRows.forEach(comRow => {
            const avatar = comRow.querySelector('.avatar')
            const reviewBlock = comRow.querySelector('.review-inner')
            const reviewBlockp = reviewBlock.querySelectorAll('p')
            console.log(comment, index);
            if (comment.image !== '') {
                avatar.src = `./images/users/${comment.image}`
            } else avatar.src = `./images/benefits/3.png`
            reviewBlockp.forEach((par, i) => {
                if (par.classList.value == 'text-normal') {
                    par.textContent = comment.author;
                } else {
                    par.textContent = comment.comment;
                }
            })
        })
    }

    
    const getData = () => {
        return fetch('./comments.json', {
            method: 'GET',
            // body: JSON.stringify(data),
            // headers: {
            //     "Content-Type": "application/json"
            // }
        })
            .then(res => res.json())
    }

    getData()
        .then(data => {
            data.comments.forEach((comment, index) => {
                console.log(comment);
                // getCommentRow(comment, index)
            })
        })
        .catch(error => {
            if (error.message === 'Failed to fetch') {
                error.message = 'Данные не получены, ошибка подключения'
            }
        })
}

export default reviews