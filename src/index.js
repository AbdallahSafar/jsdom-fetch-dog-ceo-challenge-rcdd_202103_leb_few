//console.log('%c HI', 'color: firebrick')

function fetchImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgDiv = document.getElementById("dog-image-container");
  fetch(imgUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(let i=0;i<json.message.length;i++) {
      imgDiv.insertAdjacentHTML('beforeend',`<img src = ${json.message[i]} width='300px' height='200px' style='margin-right: 10px'>`);
    }
  });
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const imgDiv = document.getElementById("dog-breeds");
  fetch(imgUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(let i=0;i<json.message.length;i++) {
      imgDiv.insertAdjacentHTML('beforeend',`<img src = ${json.message[i]} width='300px' height='200px' style='margin-right: 10px'>`);
    }
  });
}

fetchImgs();
