(function () {
	
	function backToTop(){
		let btn = document.getElementById('back-top');
		
		window.addEventListener('scroll', function(){
			let currOffset = window.pageYOffset;

			if(currOffset > 200){
				btn.style.display = "block";
				btn.classList.add("show");
				btn.classList.remove("hide");
			}
			else {
				if (btn.classList.contains('show')){
					btn.classList.add("hide");
					btn.classList.remove("show");
					setTimeout(() => {
						btn.style.display = "none";
					}, 200);
				}
			}
		});

		btn.addEventListener('click', function(evt){
			evt.preventDefault();
			let a = setInterval(function(){
				if (pageYOffset === 0){
					clearInterval(a);
				}
				window.scroll(0, window.pageYOffset - 50);
			}, 10);
		});
	}

	function animPlaceholder(){
		let filledInput = document.getElementsByTagName('input');
		let filledTA = document.getElementsByTagName('textarea');
		
        for (let i = 0; i < filledInput.length; i++){
            filledInput[i].addEventListener('input', function (){
                if (this.value){
                    this.classList.add('filled-input')
                }else{
                    this.classList.remove('filled-input');
                }
            });
		}
		
		for (let i = 0; i < filledTA.length; i++){
            filledTA[i].addEventListener('input', function (){
                if (this.value){
                    this.classList.add('filled-input')
                }else{
                    this.classList.remove('filled-input');
                }
            });
        }
	}

	function getSelectedFile(){
		let fileField = document.getElementsByClassName('input-file')[0];
		fileField.addEventListener('change', function(){
			document.getElementsByClassName('selected-file')[0].textContent = fileField.files[0]['name']
			console.log(fileField.files[0]['name']);
		});
	}

	return {
		backToTop: backToTop(),
		animPlaceholder: animPlaceholder()
		// getSelectedFile: getSelectedFile()
	}
})();

function getSelectedFile(){
	let fileField = document.getElementsByClassName('input-file')[0];
	fileField.addEventListener('change', function(){
		document.getElementsByClassName('selected-file')[0].textContent = fileField.files[0]['name']
		console.log(fileField.files[0]['name']);
	});
}

function galleryManagement(){

	document.onkeydown = function(event) {
		event.preventDefault();
		curImageIndex = document.URL.substring(document.URL.lastIndexOf('_') + 1);
		btnToClick = null;
		switch (event.keyCode) {
			case 27:
				btnToClick = document.getElementById('closebtn' + curImageIndex);
				break;
			case 37:
				btnToClick = document.getElementById('prevbtn' + curImageIndex);
				break;
			case 39:
				btnToClick = document.getElementById('nextbtn' + curImageIndex);
				break;
		}
		performAction(btnToClick);
	};

	function performAction(btnToClick){
		let evt = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		});
		btnToClick.dispatchEvent(evt);
	}
}

function createCalendar(){
	let today = new Date();
	let y = today.getFullYear();
	let m = today.getMonth() + 1;
	let d = today.getDate();

	let date = new Date(y, m-1, d);
	let daysInCurrMonth = new Date(y, m, 0).getDate();
	let firstDayInMonth = new Date(y, m-1, 1).getDay();
	let lastDayInMonth = new Date(y, m-1, daysInCurrMonth).getDay();
	let daysFromPrevMonth = firstDayInMonth;
	let daysFromNextMonth = 6 - lastDayInMonth;
	
	let calendar = '<div class="day day-title">Sun</div><div class="day day-title">Mon</div><div class="day day-title">Tue</div><div class="day day-title">Wed</div><div class="day day-title">Thu</div><div class="day day-title">Fri</div><div class="day day-title">Sat</div>';
	let counter = 1;
	
	for (let j = daysFromPrevMonth-1; j >=0; j--) {
		let d = new Date(y, m-1, 0);
		calendar += `<div class="day prev-month">${d.getDate() - j}</div>`;
		counter++;
	}

	for (let i = 1; i <= daysInCurrMonth; i++) {
		if (i == date.getDate()) {
			calendar += `<div class="day today curr-month">${i}</div>`;
		}else {
			calendar += `<div class="day curr-month">${i}</div>`;

		}
		if (counter % 7 === 0) {
			if (daysFromNextMonth == 0 && i == daysInCurrMonth) {
				// calendar += "</tr>\n";
			}else {
				// calendar += "</tr>\n  <tr>";
			}
		}
		counter++;
	}

	for (let i = 0; i < daysFromNextMonth; i++) {
		calendar += `<div class="day next-month">${i+1}</div>`;
	}

	document.getElementById('calendar').innerHTML = calendar;
}


function test(){
	console.log("HI");
}

function getSelectedDate(){
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let month = new Date().getMonth();
	let year = new Date().getFullYear();

	let days = document.getElementsByClassName('curr-month');
	for (let i = 0; i < days.length; i++) {
		days[i].addEventListener('click', function(){
			let selectedDate = +days[i].textContent;
			if (selectedDate < 10) {
				document.getElementById('user_date').value = "0" + selectedDate + "/" + months[month] + "/" + year;
			}else{
				document.getElementById('user_date').value = selectedDate + "/" + months[month] + "/" + year;
			}
		})
	}

	let hours = document.getElementsByClassName('hour');
	for (let i = 0; i < hours.length; i++) {
		const element = hours[i];
		hours[i].addEventListener('click', function(evt){
			document.getElementById('user_hour').value = hours[i].textContent;
		})
	}
}