const entreeTache=document.getElementById("nTache");
const ajoutButton=document.getElementsByTagName("button")[0];
const icTacheTit=document.getElementById("icTache");
const cTacheTit=document.getElementById("cTache");


const createNewTaskElement=function(blocTache){

	const listeObjet=document.createElement("li");

	const checkBox=document.createElement("input");
	const label=document.createElement("label");
	const editInput=document.createElement("input");
	const editButton=document.createElement("button");
	const deleteButton=document.createElement("button");

	label.innerText=blocTache;

	checkBox.type="checkbox";
	editInput.type="text";
	editButton.innerText="Modifier";
	editButton.className="modifier";
	deleteButton.innerText="Supprimer";
	deleteButton.className="supprimer";



	listeObjet.appendChild(checkBox);
	listeObjet.appendChild(label);
	listeObjet.appendChild(editInput);
	listeObjet.appendChild(editButton);
	listeObjet.appendChild(deleteButton);
	return listeObjet;
}



const addTask=function(){
	const listeObjet=createNewTaskElement(entreeTache.value);

	icTacheTit.appendChild(listeObjet);
	bindTaskEvents(listeObjet, taskCompleted);

	entreeTache.value="";

}

const editTask=function(){

    const listeObjet=this.parentNode;

    const editInput=listeObjet.querySelector('input[type=text]');
    const label=listeObjet.querySelector("label");
    const containsClass=listeObjet.classList.contains("editMode");
		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}
		listeObjet.classList.toggle("editMode");
}

const deleteTask=function(){
    const listeObjet=this.parentNode;
    const ul=listeObjet.parentNode;
		ul.removeChild(listeObjet);
}

const taskCompleted=function(){
	const listeObjet=this.parentNode;
	cTacheTit.appendChild(listeObjet);
				bindTaskEvents(listeObjet, taskIncomplete);
}

const taskIncomplete=function(){
    const listeObjet=this.parentNode;
        icTacheTit.appendChild(listeObjet);
			bindTaskEvents(listeObjet,taskCompleted);
}

const ajaxRequest=function(){
	console.log("AJAX Request");
}

ajoutButton.addEventListener("click",addTask);
ajoutButton.addEventListener("click",ajaxRequest);

const bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
	const checkBox=taskListItem.querySelector("input[type=checkbox]");
	const editButton=taskListItem.querySelector("button.modifier");
	const deleteButton=taskListItem.querySelector("button.supprimer");

        editButton.onclick=editTask;
        deleteButton.onclick=deleteTask;
        checkBox.onchange=checkBoxEventHandler;
}