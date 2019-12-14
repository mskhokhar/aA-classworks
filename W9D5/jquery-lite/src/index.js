import DOMNodeCollection from './dom_node_collection'; 
function $l(selector) {
  
  if (typeof selector === 'string' ) {
    if (!selector[0] === '#'){
      return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
    } else {
      return new DOMNodeCollection([document.getElementById(selector.slice(1))]);
    }

  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
}

window.$l = $l;