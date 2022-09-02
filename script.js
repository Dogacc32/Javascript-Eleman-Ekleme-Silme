const form = document.querySelector("form");
const txtTaskName = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const tasklist = document.querySelector("#task-list");
const input = document.querySelector("input");
eventListeners();

function eventListeners() {

   //SubmitItem
   form.addEventListener("submit", addNewItem);

   //DeleteItem
   tasklist.addEventListener("click", DeleteItem);

   //Delete All
   btnDeleteAll.addEventListener("click", DeleteAllItems);
}

function addNewItem(e) {
   if (input.value === '') {
      alert("add new Item");
      //console.log("submit");
   }

   // li oluşturma

   const li = document.createElement("li");
   li.className = "list-group-item list-group-item-secondary"
   li.appendChild(document.createTextNode(input.value));

   // a oluşturma

   const a = document.createElement("a");
   a.className = "delete-item float-right";
   a.setAttribute("href", "#");
   a.innerHTML = '<i class="fas fa-times"></i>';


   li.appendChild(a);
   tasklist.appendChild(li);


   e.preventDefault();
}

// DeleteItem

function DeleteItem(e) {

      if (e.target.className === "fas fa-times") {
         if (confirm("Silmek istediğinizden emin misiniz?")) {
         e.target.parentElement.parentElement.remove();
      }

   }
   e.preventDefault();
}

// DeleteAllItems

function DeleteAllItems(e) {
   if (confirm("Tüm elemanları silmek istediğinizden emin misiniz?")) {
      tasklist.childNodes.forEach(function (item) {
         if (item.nodeType === 1) {
            item.remove();
         }
      })
   }
}


//tasklist.innerHTML="";
