// let form = document.querySelector('#memeform');
// // let img = document
// const topText = document.querySelector('input[name="toptext"]');
// const bottomText = document.querySelector('input[name="bottomtext');
// const results = document.querySelector ('#results');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     let memeImage = document.querySelector('#imgURL').value; //grab value that the user has typed
//     let img = document.createElement('img'); //create and image element
//     img.src = memeImage; //
//     document.body.appendChild(img) //add to dom
//     // console.log(memeImage.value, topText.value, bottomText.value)
// });
// //a



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