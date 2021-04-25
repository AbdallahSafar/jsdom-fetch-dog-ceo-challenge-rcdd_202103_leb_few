//console.log('%c HI', 'color: firebrick')

function fetchImgs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let imgDiv = document.getElementById("dog-image-container");
  fetch(imgUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(let i=0;i<json['message'].length;i++) {
      imgDiv.innerHTML += `<img src = ${json.message[i]}>`;
    }
  });
}

fetchImgs();
