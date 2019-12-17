import htmlGenerator from "./warmup";
import dogDropDown from "./drop_down";
import Todo from "./todo_list";
const Clock = require("./clock");
const partyHeader = document.getElementById('party');
htmlGenerator('Party Time.', partyHeader);
dogDropDown();
let clock = new Clock();

const dogDropDownNav = document.getElementsByClassName("h3-drop-down")[0];
dogDropDownNav.addEventListener("mouseenter", function(){
  let dogList = document.getElementsByClassName("drop-down-dog-list")[0];
  dogList.className = "drop-down-dog-list ";
});

dogDropDownNav.addEventListener("mouseleave", function () {
  let dogList = document.getElementsByClassName("drop-down-dog-list")[0];
  dogList.className = "drop-down-dog-list hidden";
});

let todo = new Todo();
