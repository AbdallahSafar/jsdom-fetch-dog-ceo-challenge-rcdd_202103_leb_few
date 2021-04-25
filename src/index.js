console.log('%c HI', 'color: firebrick')

function fetchImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const obj;
  fetch(imgUrl).then(response => response.json()).then(json => obj = json);
  return obj;
}
