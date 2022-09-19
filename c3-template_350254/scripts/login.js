var arr=JSON.parse(localStorage.getItem("details"))||[]
// console.log(arr)
var array=JSON.parse(localStorage.getItem("alldata"))||[]
  function funget(){
    event.preventDefault()

    document.getElementById("forms")

    let email=forms.email.value
    let password=forms.password.value


    var alldata= new setData(email,password)
    array.push(alldata)
    // console.log(alldata)
    localStorage.setItem("alldata",JSON.stringify(array))
    window.location.reload()

    
    if(array.email!=arr.email ){
      alert("User doesn't exist, Sign Up")
    }
    else if(array.password!=arr.password) {
      alert("Wrong credentials")
    }
    else{
        alert("Login successful!")
    }
  

  }


  function setData(e,p){
    this.email=e;
    this.password=p;
  }
