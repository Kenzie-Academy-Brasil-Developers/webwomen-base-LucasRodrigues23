function renderCardsMain(data) {
    const ul = document.querySelector('#ul_main')
    ul.innerHTML=''

    data.forEach((element) => {
        const card = mainCardCreator(element)
       
        ul.appendChild(card)
    });
    
}

renderCardsMain(jobsData)

function mainCardCreator(obj) {

    const card = document.createElement('li')
    card.classList = 'card flex flex-col'
    const titleBox = document.createElement('div')
    titleBox.classList = 'box-title-card flex flex-col'
    const title = document.createElement('h2')
    title.classList = 'title-4 text-grey-1'
    title.innerText = obj.title
    const boxEntLoc = document.createElement('div')
    boxEntLoc.classList = 'box-ent-loc flex al-center jus-start'
    const enterprise = document.createElement('p')
    enterprise.classList = 'text-3 text-grey-2'
    enterprise.innerText = obj.enterprise
    const location = document.createElement('p')
    location.classList = 'text-3 text-grey-2'
    location.innerText = obj.location
    boxEntLoc.append(enterprise, location)
    titleBox.append(title, boxEntLoc)
    const description = document.createElement('p')
    description.classList = 'text-2 text-grey-2'
    description.innerText = obj.descrition
    const boxMadelButton = document.createElement('div')
    boxMadelButton.classList = 'box-madel-bt flex jus-between'
    const modalities = document.createElement('p')
    modalities.classList = 'modalities text-3 text-grey-2'
    modalities.innerText = obj.modalities
    const apply = document.createElement('button')
    apply.classList = 'bt-medium bt-apply'
    apply.id = `bt_apply_${obj.id}`

    if(applyExist(obj) >= 0){
        apply.innerText = "Remover candidatura";
      }else{
        apply.innerText = "Candidatar";
      }

    boxMadelButton.append(modalities, apply)
    card.append(titleBox, description, boxMadelButton)
    
 
    return card
}