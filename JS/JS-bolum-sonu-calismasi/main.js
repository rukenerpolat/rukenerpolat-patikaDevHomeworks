// FORMLARLA ÇALIŞMAK : BÖLÜM SONU EGZERSİZİ

/*
1: Formu seç
2: Input Bilgisini UL içerisine ekle
3: Form içindeki bilgiyi sıfırla
4: Eğer formda bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) {   //Gönder butonunua basınca boş satır eklemesini engelledik
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""  // gönderdikten sonra sıfırladık
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "DİKKAT! ",
            "Eksik Bilgi Girdiniz! ",
            "danger"
        )
    }
}

let userListDOM = document.querySelector('#userList')
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}