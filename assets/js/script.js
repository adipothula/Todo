var s = document.getElementsByTagName("span");
var i = document.getElementById("entry");
var l = document.getElementById("list");


//crossign the todo in the list

l.addEventListener("click", function(e) {
	
	//remove the todo

	if(e.target.tagName.toLowerCase() === "i") {
		e.stopPropagation();
		e.target.parentElement.parentElement.remove();
	}

	if(e.target.tagName.toLowerCase() === "span") {
		e.stopPropagation();
		e.target.parentElement.remove();
	}

	//Cross off todo by clicking

	if(e.target.tagName.toLowerCase() === "li") {
		e.stopPropagation();
		e.target.classList.toggle("completed");
	}
}); 

//Add a todo into the list

i.addEventListener("keypress", function(e) {
	if(e.which === 13) {
		var todotxt = this.value;
		var ul = document.getElementById("list");
		var newitem = document.createElement("li");
		newitem.innerHTML = "<span><i class='fa fa-trash'></i></span>" + todotxt;
		ul.appendChild(newitem);
		this.value = "";
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});



// -------------------------------------------------------------------------------
// ------------------------------------CLOCK--------------------------------------
// -------------------------------------------------------------------------------

  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();