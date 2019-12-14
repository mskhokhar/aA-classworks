import Queue from './queue';
export default class DOMNodeCollection{
  constructor(array){
    this.collection = array;
    return this;
  }
}
DOMNodeCollection.prototype.html = function (str) {
  if (!str) {
    return this.collection[0].innerHTML;
  } else {
    for (let i = 0; i < this.collection.length; i++) {
      this.collection[i].innerHTML = str;
    }
  }
  return this;
};

DOMNodeCollection.prototype.empty = function (){
  for(let i = 0; i < this.collection.length; i++){
    this.collection[i].innerHTML = "";
  }
};

DOMNodeCollection.prototype.append = function(els){
  if (typeof els === 'string'){
    els = new DOMNodeCollection([els]);
  } else if (els instanceof HTMLElement){
    els = new DOMNodeCollection([els.cloneNode(true)]);
  } else if (els instanceof DOMNodeCollection){
    for (let i = 0; i < els.collection.length; i++){
      els.collection[i] = els.collection[i].cloneNode(true);
    }
  }
  for (let i = 0; i < this.collection.length; i++) {
    for (let j = 0; j < els.collection.length; j++) {
      if (els.collection[j] instanceof HTMLElement) {
        this.collection[i].appendChild(els.collection[j].cloneNode(true));
      } else {
        this.collection[i].innerHTML += els.collection[j];
      }
    }
  }
};

DOMNodeCollection.prototype.attr = function(attrName, attrValue){
  for (let i = 0; i < this.collection.length; i++) {
    if (!attrValue){
      return this.collection[i].getAttribute(attrName);
    } else {
      this.collection[i].setAttribute(attrName, attrValue);
    }
  }
  return this;
};
DOMNodeCollection.prototype.addClass = function(className){
  if (!className){return this;}
  for (let i = 0; i < this.collection.length; i++) {
    this.collection[i].className += ` ${className}`;
  }
  return this;
};
DOMNodeCollection.prototype.removeClass = function(className){
  if (!className){return this;}
  for (let i = 0; i < this.collection.length; i++) {
    if (this.collection[i].classList.contains(className)){
      this.collection[i].classList.remove(className);
    }
  }
  return this;
};

DOMNodeCollection.prototype.children = function(){
  const result = [];
  for (let i = 0; i < this.collection.length; i++) {
    result.push(this.collection[i].childNodes);
  }
  return new DOMNodeCollection(result);
};
DOMNodeCollection.prototype.parent = function(){
  const result = new Set();
  for (let i = 0; i < this.collection.length; i++) {
    result.add(this.collection[i].parentNode);
  }
  return new DOMNodeCollection(Array.from(result));
};
DOMNodeCollection.prototype.find = function(selector){
  if (!selector) return new DOMNodeCollection([]);

  if (typeof selector === 'string'){
    var check = 'element';
    if(selector[0] === '.'){check = 'class';}
    else if(selector[0] === '#'){check = 'id';}
  } else {

  }
  
  
  let queue = new Queue();
  let result = [];
  console.log(this.collection[0].childNodes);
  
  queue.enqueue(this.collection[0].childNodes);
  console.dir(queue)
  while (!queue.isEmpty()){
    
    let currentChild = queue.dequeue();
    console.log(currentChild);
    if (check === 'class'){
      if (Array.from(currentChild.classList).includes(selector.slice(1))){
        result = result.concat(currentChild);
      }
    } else if (check === 'id'){
      if (currentChild.id === selector.slice(1)) {
        result = result.concat(currentChild);
      }
    } else if (check === 'element'){
      if (currentChild.nodeName === selector) {
        result = result.concat(currentChild);
      }
    }
    queue.enqueue(currentChild.childNodes);
  }
  return new DOMNodeCollection(result);
};



// let anything = window.$l('.list-element');
// anything.append(document.getElementsByClassName('list-element')[0])

// module.exports = DOMNodeCollection;
// .append('<li></li>')
