const form = document.querySelector(".form-quizz")
let tableauResultats = []
const reponses = ['c','a','b','a','c']
const emojis = ['✅','✨','👀','😭','','👎']
const titreResultat = document.querySelector('.resultats h2')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const touteslesQuestions = document.querySelectorAll('.question-block')
let verifTableau = []

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    for(i=1; i<6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats)
    tableauResultats= []
})



function verifFunc(tabResultats) {
    for(let a=0; a<5; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true)
        }else{
            verifTableau.push(false)
        }
        
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau)
    couleursFunction(verifTableau)
    verifTableau = []
}

function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length
    // console.log(nbDeFautes)

    switch(nbDeFautes){

        case 0:
            titreResultat.innerText = `✅ Bravo, c'est un sans faute ! ✅`
            aideResultat.innerText= ''
            noteResultat.innerText= '5/5'
            break
        case 1:
            titreResultat.innerText = `✨ Vous y etes presque ! ✨`
            aideResultat.innerText= 'Retentez une autre reponse dans la case rouge puis re-validez'
            noteResultat.innerText= '4/5'
            break

        case 2:
            titreResultat.innerText = `✨ Encore un effort... 👀`
            aideResultat.innerText= 'Retentez une autre reponse dans les cases rouge puis re-validez'
            noteResultat.innerText= '3/5'
            break
        case 3:
            titreResultat.innerText = `👀 il reste quelques erreurs.😭`
            aideResultat.innerText= 'Retentez une autre reponse dans les cases rouge puis re-validez'
            noteResultat.innerText= '2/5'
            break
        case 4:
            titreResultat.innerText = `😭 Peut mieux faire 😭`
            aideResultat.innerText= 'Retentez une autre reponse dans les cases rouge puis re-validez'
            noteResultat.innerText = '1/5'
            break
        case 5:
            titreResultat.innerText = `👎 Peut mieux faire 👎`
            aideResultat.innerText= 'Retentez une autre reponse dans les cases rouge puis re-validez'
            noteResultat.innerText= '0/5'
            break

        default:
            'wops, cas innatendu'
    }

}



function couleursFunction(tabValBool) {
    for (let j = 0; j<tabValBool.length; j++){
        if(tabValBool[j] === true) {
            touteslesQuestions[j].style.background = 'lightgreen'
        }else{
            touteslesQuestions[j].style.background = '#ffb8b8'
            touteslesQuestions[j].classList.add('echec')

            setTimeout(() =>{
                touteslesQuestions[j].classList.remove('echec')
            },500)
        }
    }

}

touteslesQuestions.forEach(item =>{
    item.addEventListener('click',() =>{
        item.style.background = "white"
    })
})

