window.onload = function(){
	var btm = document.querySelectorAll(".btm");
	var show = document.querySelectorAll(".show");
	
	for(var i = 0;i <btm.length;i++){
		btm[i].index = i;
		btm[i].onmouseover = function(){
	   			show[this.index].style.display = "block";
		}
		btm[i].onmouseout = function(){
	   			show[this.index].style.display = "none";
		}
	}
	for(var j = 0;j < show.length;j++){
		show[j].index = j;
		show[j].onmouseover = function(){
	   			show[this.index].style.display = "block";
//	   			show[this.index].style.transform = "scale(1.5)";
		}
		show[j].onmouseout = function(){
	   			show[this.index].style.display = "none";
		}
	}
	
}
