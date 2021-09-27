function verify() {
  var yes;
  yes = Number(document.getElementById("age").value)
  if (yes >= 21) {

    Cookies.set('validAge', true, { expires: 1/24 })
    window.location.replace('./index.html')
  }
  else {
    var element = document.getElementById('modal-underage')
    element.classList.add('is-active')
  }

}


document.addEventListener('click', event => {
  if (event.target.classList.contains('modal-close')) {
    var element = document.getElementById('modal-underage')
    element.classList.remove("is-active")
  }
})