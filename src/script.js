// This file is required by karma.conf.js and loads recursively all the .spec and framework files
function myAct(){
	console.log("loading list of tutors..."); 
	setTimeout(function(){ 
		document.getElementById("fill").classList.add("full"); 
		
		var classname = document.getElementsByClassName("pb-upper");
			var myFunction = function() {
				document.getElementById("avatar").src="";
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
		    document.getElementById("wrap").classList.add("noscroll");
		   };

		  setTimeout(function(){

				document.getElementById("loading").classList.add("loaded"); 
				Array.from(classname).forEach(function(element){
		    	element.addEventListener("click", myFunction);
		  	});

		 	},1000);

		  
		  document.getElementById("close").addEventListener("click", closeModal);
		  document.getElementById("my-modal").addEventListener("click", closeModal);
		  function closeModal(){
		    document.getElementById("my-modal").classList.remove("show-it");
		    document.getElementById("wrap").classList.remove("noscroll");
		  }

		  document.getElementById("close-box").addEventListener("click", closeMessege);
		  function closeMessege(){
		   	document.getElementById("message-box").classList.remove("show");
		  }

		  var callMsg = function(){
		  	var box = document.getElementById("msg");
		  	box.innerHTML = "";
		  	document.getElementById("message-box").classList.add("show"); 
		  	var btn = document.getElementById("send");
				var message = document.getElementById("message");
				message.focus();
				
				btn.addEventListener("click", sendMessage);
				function sendMessage(){
					// var time = new Date();
				 //  var timeNow = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
				  box.innerHTML += "<p class='line'>"+ message.value+"</p>";
				  message.value = "";
				}
		  }

		  document.getElementById("call-msg").addEventListener("click", callMsg);
		


		}, 1000);
}
