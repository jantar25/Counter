type ="text/javascript"

let count=0;
let enteredNo=document.getElementById("entered_no");
let saveEl=document.getElementById('save_el');
function increment() {
	count+=1;
	enteredNo.textContent=count;
}
function save() {
	saveCount=count+" - ";
	saveEl.textContent+=saveCount;
	enteredNo.textContent=0;
	count=0;

}
