function addItem() {
   var newItem = document.createElement("div");
   newItem.innerHTML = document.getElementById("box").value;
	document.getElementById("list").appendChild(newItem);
}
function addItem1() {
   var newItem1 = document.createElement("div");
   newItem1.innerHTML = document.getElementById("box1").value;
	document.getElementById("list1").appendChild(newItem1);
}