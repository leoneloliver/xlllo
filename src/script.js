// This file is required by karma.conf.js and loads recursively all the .spec and framework files
function myAct(){
	console.log("loading list of tutors...");

	setTimeout(function(){ 
		var classname = document.getElementsByClassName("pb-upper");
			var myFunction = function() {
		    var name = this.getAttribute("data-name");
		    var email = this.getAttribute("data-email");
		    var address = this.getAttribute("data-address");
		    var avatar = this.getAttribute("data-avatar");
		    //alert(name+'-'+email+'-'+address+'-'+avatar);		   
		    document.getElementById("avatar").src=avatar;
		    document.getElementById("name").innerText=name;
		    document.getElementById("address").innerText=address;
		    document.getElementById("email").innerText=email;
		    document.getElementById("my-modal").classList.add("show-it");   
		   };
		  Array.from(classname).forEach(function(element) {
		    element.addEventListener("click", myFunction);
		  });
		  document.getElementById("close").addEventListener("click", closeModal);
		  document.getElementById("my-modal").addEventListener("click", closeModal);
		  function closeModal(){
		    document.getElementById("my-modal").classList.remove("show-it");
		  }
		}, 1000);
}