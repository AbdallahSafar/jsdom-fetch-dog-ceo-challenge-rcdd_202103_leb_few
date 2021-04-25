console.log('%c HI', 'color: firebrick')

function fetchImgs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const obj;
  fetch(imgUrl).then(response => response.json()).then(json => obj = json);
  console.log(obj);
  return obj;
}

function renderImgs(obj)
{

}

fetchImgs();
