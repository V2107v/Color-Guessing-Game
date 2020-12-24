/*window.setTimeout(function() {*/
	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colordisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var reset = document.querySelector("#reset");
	var easy = document.querySelector("#easy");
	var hard = document.querySelector("#hard");
	var numSquares = 6;

	var colors = generateRandomColors(numSquares);

	var pickedColor = pickColor();

	easy.addEventListener("click", function() {
		hard.classList.remove("selected");
		easy.classList.add("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		messageDisplay.textContent = "";
		reset.textContent = "New Colors";
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i<squares.length; i++) {
			if(colors[i]) {
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
	});

	hard.addEventListener("click", function() {
		easy.classList.remove("selected");
		hard.classList.add("selected");
		numSquares = 6;
		reset.textContent = "New Colors";
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		for(var i = 0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";		
		}
	});

	reset.addEventListener("click",function() {
		//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		//change color of squares
		for(var i = 0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
		//change h1 color
		h1.style.backgroundColor = "steelblue";
		//change message display
		messageDisplay.textContent = "";
		//change reset button text
		reset.textContent = "New Colors";
	});

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++) {
		//add colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add clicklistener to squares
		squares[i].addEventListener("click",function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				reset.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	function changeColors(color){
		//loop through all squares
		for(var i = 0; i<squares.length; i++) {
			//change each color to match given color
			squares[i].style.backgroundColor = color;
		}
		
	}

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num) {
		//make an array
		var arr = [];
		//repeat num times
		for(var i = 0; i<num ; i++) {
			//get random color and push into array
			arr.push(randomColor());
		}
		//return array
		return arr;
	}

	function randomColor(){
		//pick a red from 0 to 255
		var r = Math.floor(Math.random()  * 256);
		//pick a green from 0 to 255
		var g = Math.floor(Math.random()  * 256);
		//pick a blue from 0 to 255
		var b = Math.floor(Math.random()  * 256);

		//stitch into rgb and return it
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

// }, 50);