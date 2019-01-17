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
		    document.getElementById("badge").innerText=name;
		    document.getElementById("mini-avatar").src=avatar;
		   };

		  Array.from(classname).forEach(function(element){
		    element.addEventListener("click", myFunction);
		  });

		  document.getElementById("close").addEventListener("click", closeModal);
		  document.getElementById("my-modal").addEventListener("click", closeModal);
		  function closeModal(){
		    document.getElementById("my-modal").classList.remove("show-it");
		  }

		  document.getElementById("close-box").addEventListener("click", closeMessege);
		  function closeMessege(){
		   	document.getElementById("message-box").classList.remove("show");
		  }

		  var callMsg = function(){
		  	document.getElementById("msg").innerHTML = "";
		  	document.getElementById("message-box").classList.add("show"); 
		  	var btn = document.getElementById("send");
				var message = document.getElementById("message");
				var box = document.getElementById("msg");
				btn.addEventListener("click", sendMessage);
				function sendMessage(){
				  box.innerHTML += "<p class='line'>"+ message.value+"</p>";
				  message.value = "";
				}
		  }

		  document.getElementById("call-msg").addEventListener("click", callMsg);
		


		}, 1000);
}