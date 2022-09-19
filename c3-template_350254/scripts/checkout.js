
  var varr=JSON.parse(localStorage.getItem("room"))||[]
  // console.log(varr)
Append(varr)
    function Append(varr){

      varr.forEach((el) => {

        
      let hotel=document.createElement("div")
      hotel.setAttribute("class","hotel")
  
      let img=document.createElement("img")
      img.src=el.Images.one
      img.setAttribute("id","img")
      let title=document.createElement("h2")
      title.innerText=el.Title
      let price=document.createElement("h3")
      price.innerText=el.Price
      let ac=document.createElement("h4")
      ac.innerText=el.Ac
      let rating=document.createElement("h4")
      rating.innerText=el.Rating



      hotel.append(img,title,price,ac,rating)

      document.getElementById("hotel_details").append(hotel)
        
      });

    }


    function subclick(fun,del){
        id=setTimeout(function(){
            alert("Your Booking is successfully")
        },5000)

    }
