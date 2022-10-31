
let memeImg = document.querySelector('#imgURL');
let form = document.querySelector('#memeform');


form.addEventListener('submit', function(e){
    e.preventDefault();
    //when submit it clicked
    //all the below elements are created
    let meme = document.createElement('div');
    let topText = document.createElement('div');
    let bottomText = document.createElement('div');
    let img = document.createElement('img');

    let btn = document.createElement("button");
      btn.setAttribute("type","button");
      
      img.src = document.getElementById('imgURL').value;
      topText.classList.add("topText");
      topText.innerHTML = document.getElementById('topText').value;
      
      bottomText.classList.add("bottomText");
      bottomText.innerHTML = document.getElementById('bottomText').value;
      
      btn.innerHTML = "DELETE";
      
      meme.classList.add("meme");
      meme.appendChild(topText);
      meme.appendChild(bottomText);
      meme.appendChild(img);
      meme.appendChild(btn);
      
      let memeLocation = document.getElementById('location');
      memeLocation.appendChild(meme);

      document.getElementById('imgURL').value = "";
      document.getElementById('topText').value = "";
      document.getElementById('bottomText').value = "";

      btn.addEventListener('click', function(e) {
          meme.remove();
      });

});