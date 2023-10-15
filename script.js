//your code here
let container = document.getElementById("parent");
let Images = document.getElementsByClassName("image") ;


function onDragStart(event){
 event.dataTransfer.setData("imageID" , event.target.id);	
}

function onDragOver(event){
	  event.preventDefault();
}

function onDrop(event){

	let deginationImg = event.target;
	let sourseImgId = event.dataTransfer.getData("imageID");
	let sourseImg = document.getElementById(sourseImgId);
	let nextOfsourseImg = sourseImg.nextElementSibling;
	let nextOfdeginationimg = deginationImg.nextElementSibling;
    container.insertBefore(sourseImg , nextOfdeginationimg  );
	container.insertBefore(deginationImg ,nextOfsourseImg );
	
}

for(let i = 0 ; i<Images.length; i++){
	Images[i].addEventListener("dragstart" , onDragStart);
	Images[i].addEventListener("dragover" , onDragOver);
	Images[i].addEventListener("drop" , onDrop);
}