//console.log('%c HI', 'color: firebrick')

function fetchImgs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let obj;
  fetch(imgUrl).then(response => response.json()).then(json => console.log(json));
  // console.log(obj);
  // return obj;
}

fetchImgs();
