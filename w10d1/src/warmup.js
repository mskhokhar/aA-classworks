
const partyHeader = document.getElementById('party');

let htmlGenerator;
export default htmlGenerator = (string, htmlElement) => {
  let node = document.createElement('p');
  node.innerHTML = string;
  htmlElement.appendChild(node);
};

