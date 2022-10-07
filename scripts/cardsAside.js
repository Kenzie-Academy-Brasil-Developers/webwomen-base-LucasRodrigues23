function renderCardsaside(data) {
    const ul = document.querySelector('#ul_aside')
    ul.innerHTML=''
    if (data.length > 0) {
        data.forEach((element) => {
            const card = cardAsideCreator(element)
            ul.appendChild(card)
    }); 
    } else {
        const empty = emptyAside()
        ul.appendChild(empty)
        
    }
}   
renderCardsaside(getItemLocalStorage())


function cardAsideCreator(obj) {
    const card = document.createElement('li')
    card.classList = 'aside-card flex jus-between al-top'
    const boxCard = document.createElement('div')
    boxCard.classList = 'box-card-aside flex flex-col'
    const cardTitle = document.createElement('h5')
    cardTitle.classList = 'title-5 text-grey-1'
    cardTitle.innerText = obj.title
    const boxEntLoc = document.createElement('div')
    boxEntLoc.classList = 'box-ent-loc flex al-center jus-start'
    const enterprise = document.createElement('p')
    enterprise.classList = 'text-3 text-grey-2'
    enterprise.innerText = obj.enterprise
    const location = document.createElement('p')
    location.classList = 'text-3 text-grey-2'
    location.innerText = obj.location
    boxEntLoc.append(enterprise, location)
    boxCard.append(cardTitle, boxEntLoc)
    const remove = document.createElement('button')
    remove.classList = 'bt-remove-aside'
    remove.id = `bt_remove_${obj.id}`
    card.append(boxCard, remove)

    remove.addEventListener('click', (event) => {
        event.preventDefault()
            let idBt = remove.id.replace('bt_remove_', '');
            let job = jobsData.find(obj => obj.id === parseInt(idBt))
            
            applyAddorRemove(job, remove)
            renderCardsaside(getItemLocalStorage())
            renderCardsMain(jobsData)
            buttonApply()

        });

    return card
}

function emptyAside() {
    const li = document.createElement('li')
    li.insertAdjacentHTML('afterbegin', `<p class="no-apply text-2 text-grey-2">Você ainda não aplicou para nenhuma vaga.</p>`)
    return li
}