
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    axios.get("http://localhost:3000/products")
    .then((res) => {
        const song = document.getElementById("music-content")
        for(let i=0;i<res.data.length ; i++){
        console.log(res.data[0])
        let info= res.data[i]
        const ID = info.id
        const name = info.title
        const price = info.price
        const img_url = info.imageUrl
        
        const listen = document.createElement('div')

        listen.setAttribute("id",ID)
        console.log(listen)
        
        listen.innerHTML  = 
        
        `<h3>${name}</h3>
        <div class="image-container">
            <img class="prod-images" src=""
            alt="">
        </div>
        <div class="prod-details">
            
             <span>$<span>${price}  </span></span>
           
            <button class="shop-item-button" type="button">ADD TO CART</button>
        
            
        </div>

    </div>`
  song.appendChild(listen)
        }
        

        

    })
   
});