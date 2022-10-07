function getItemLocalStorage() {
    return JSON.parse(localStorage.getItem('webwoman:apply-data')) || []
     
 }

function applyExist(job) {
    return getItemLocalStorage().findIndex(element => element.id === job.id)
}

function applyAddorRemove(job, button) {
    const jobExist = applyExist(job)
    let applyList = getItemLocalStorage()

    if (jobExist<0) {
        applyList = [...applyList, job]
        button.innerText = "Remover Candidatura"
    }else{
        applyList.splice(jobExist, 1)
        button.innerText = "Candidatar"
    }
    localStorage.setItem('webwoman:apply-data', JSON.stringify(applyList))
    console.log(applyList);
}

