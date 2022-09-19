
var arr=JSON.parse(localStorage.getItem("details"))||[]
  function funclick(){
    event.preventDefault()

    document.getElementById("forms")

    let name=forms.name.value
    let email=forms.email.value
    let password=forms.password.value


    var details= new getData(name,email,password)
    arr.push(details)
    // console.log(details)
    localStorage.setItem("details",JSON.stringify(arr))
    window.location.reload()
    alert("Sign up successfully")

  }


  function getData(n,e,p){
    this.name=n;
    this.email=e;
    this.password=p;
  }
