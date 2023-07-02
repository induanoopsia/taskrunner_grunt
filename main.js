function reply_click(clickit){
	document.getElementById("clickit").onclick = function(){
		var display = document.getElementById("display");
		display.innerText = "Hello";
	};
}
