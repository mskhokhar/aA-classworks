class Todo{
  constructor(){
    let localStorage = window.localStorage;
    this.list = JSON.parse(localStorage.getItem("list")) || [];
    const todoList = document.getElementsByClassName("create-list")[0];
    this.populateList(this.list);
    todoList.addEventListener("click", (e) => {
      e.preventDefault();
      let todoString = document.getElementById("todo-text-field").value;
      let todoObj = { "text": todoString, "done": false };
      this.list.push(todoObj);
      document.getElementById("todo-text-field").value = '';
      this.populateList([this.list[this.list.length-1]]);
      localStorage.setItem("list", JSON.stringify(this.list));
    });
    const checkBox = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkBox.length; i++) {
      const check = checkBox[i];
      check.addEventListener("click", (e) => {
        let index = e.target.getAttribute("dataindex");
        if (!check.getAttribute("checked")) {
          e.target.removeAttribute("checked");
          this.list[index]["done"] = true;
        } else {
          e.target.setAttribute("checked", "banana");
          this.list[index]["done"] = false;
        }
        localStorage.setItem("list", JSON.stringify(this.list));
      });
    }
  }

  populateList(listArray){
    listArray.forEach((el, i) => {
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("class", "checkbox");
      input.setAttribute("dataIndex", `${i}`);
      if (el.done) {
        input.setAttribute("checked", "banana");
      }
      let label = document.createElement("label");
      label.setAttribute("for", `item${i}`);
      label.innerHTML = el.text;
      let ul = document.getElementsByClassName("todos")[0];
      let li = document.createElement("li");
      li.appendChild(input);
      li.appendChild(label);
      ul.appendChild(li);
    });
  }
  
}

module.exports = Todo;



