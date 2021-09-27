function verify(){
  var yes;
  yes = Number(document.getElementById("age").value)
  if(yes >= 21){
    
    Cookies.set('validAge', true, { expires: 7})
    window.location.replace('./index.html')
  } else {
    
    }

  }
