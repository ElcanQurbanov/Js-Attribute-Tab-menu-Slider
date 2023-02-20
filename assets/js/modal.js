"use strict";

let btn = document.querySelector("button");

let login = document.querySelector(".login");


btn.addEventListener("click", function(){
    login.classList.remove("modal-y")
    login.classList.add("active")
})