
    async function uploadData(){
        let query=document.getElementById("query").value
      const url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
      // console.log(url)
  
      let res=await fetch(url)
      let data=await res.json();
      console.log(data)
      Append(data.hotels)
  
      }
  
      function Append(data){
  
        data.forEach((el) => {
  
          
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
  
        let btn=document.createElement("button")
        btn.innerText="Book"
        btn.addEventListener("click",function(){
          bookfun(el)
        })
  
  
        hotel.append(img,title,price,ac,rating,btn)
  
        document.getElementById("hotels_list").append(hotel)
          
        });
  
      }
  
      var varr=JSON.parse(localStorage.getItem("room"))||[]
      function bookfun(el){
        varr.push(el)
        localStorage.setItem("room",JSON.stringify(varr))
        window.location.href="checkout.html"
        
      }
      
  

    //   <button onclick="lwfun()">low to high</button>
    //   <button onclick="hlfun()">high to low</button>
    //   <button onclick="acfun()">AC</button>
    //   <button onclick="Nafun()">NON AC</button>
