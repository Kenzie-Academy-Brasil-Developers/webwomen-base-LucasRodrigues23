/* Desenvolva sua lógica aqui... */
function buttonApply() {
    let buttons = document.querySelectorAll('.bt-apply')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
                let idBt = button.id.replace('bt_apply_', '');
                let job = jobsData.find(obj => obj.id === parseInt(idBt))
                
                applyAddorRemove(job, button)
                renderCardsaside(getItemLocalStorage())

            });
        })
 };


buttonApply()