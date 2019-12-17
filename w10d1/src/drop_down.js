
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export default function dogLinkCreator(){
  let list = document.getElementsByClassName("drop-down-dog-list");
  let dogsArray = Object.entries(dogs);
  for (let i = 0; i < dogsArray.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = dogsArray[i][0];
    link.href = dogsArray[i][1];
    let listItem = document.createElement("li");
    listItem.appendChild(link);
    listItem.className = "dog-list";
    list[0].appendChild(listItem);
  }
}



