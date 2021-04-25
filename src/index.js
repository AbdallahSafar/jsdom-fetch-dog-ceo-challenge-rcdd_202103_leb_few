//console.log('%c HI', 'color: firebrick')

function fetchImgs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let imgDiv = document.getElementById("dog-image-container");
  fetch(imgUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(let i=0;i<json.messages.length;i++) {
      imgDiv.insertAdjacentHTML('beforeend',`<img src = ${json.messages[i]}>`);
    }
  });
}

fetchImgs();
