//	MENU TOGGLE - GLOBAL
//-----------------------

function toggleMenu() {

	const menu = document.querySelector(".top-navbar");

	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		toggle.querySelector("a").innerHTML = "<i class='bi bi-list'></i>";
	} else {
		menu.classList.add("active");
		toggle.querySelector("a").innerHTML = "<i class='bi bi-x'></i>";
	}
}

const toggleButton = document.querySelector(".toggle");
toggleButton.addEventListener("click", toggleMenu, false);



//	AOS
//--------------------------
	

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



///ARROW ANIMATION

let arrowDown = document.querySelectorAll('.header-arrow-down');
for(let w = 0; w< arrowDown.length; w++) {
	arrowDown[w].addEventListener("click", function() {
	document.querySelector('.main').scrollIntoView();
	})
}



//	LIGHTBOX
//--------------

const lightbox = GLightbox({
	touchNavigation: true,
	loop: true,
	autoplayVideos: true
});


//	MULTI SLIDER - PROJECT PAGE
//----------------------------------

if ( document.URL.includes("project.html") ) {

	// carosuel with cards

	let swiperCard = new Swiper(".swiperCard", {
		centeredSlides: true,
		slidesPerView: "auto",
		initialSlide : 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// carosuel with columns

	let swiperColumn = new Swiper(".swiperColumn", {
		slidesPerView: 2,
		spaceBetween: 24,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
		},
	});

	// button show more images

	let galleryContent = document.getElementById('galleryContent');
	const loadMoreButton = document.getElementById('loadMore');
	const hiddenImage = [...galleryContent.querySelectorAll('.hidden')];

	hiddenImage.splice(0, 3).forEach(
		elem => elem.classList.remove('hidden')
	);

	loadMoreButton.addEventListener('click', function(e) {
		e.preventDefault();
		
		hiddenImage.splice(0, 3).forEach(
			elem => elem.classList.remove('hidden')
		)
		
		if (hiddenImage.length == 0) {
			loadMore.classList.add('hidden');
		}
	});

}

// CHOOSE OR DRAG AND DROP FILES
// --------------------------------

const dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
	document.body.addEventListener(eventName, preventDefaults, false)
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults (e) {
	e.preventDefault()
	e.stopPropagation()
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
	let dt = e.dataTransfer
	var files = dt.files

	handleFiles(files)
}

function handleFiles(files) {
	files = [...files]
	files.forEach(uploadFile)
}

const previewFile = document.querySelector('.drop-file-name');

var listFile = document.createElement('ul');
previewFile.appendChild(listFile);

function uploadFile(file) {

	if ( document.URL.includes("about.html") ) {
		const listItemFileA = document.createElement('li');
		const fileNameA = document.createElement('span');
		fileNameA.textContent = `${file.name}`;
		listItemFileA.appendChild(fileNameA);
		listFile.appendChild(listItemFileA);
	} 
	else {
	 	const listItemFile = document.createElement('li');
		const fileType = document.createElement('i');

		const fileName = document.createElement('span');
		fileName.classList.add('d-inline-block', 'text-truncate');

		const fileValue = fileName.textContent = `${file.name}`;
		const extensionFile = fileValue.split(".")[1].toLowerCase();
		fileType.classList.add('fs-4', 'fw-bold', 'bi', 'bi-filetype-'+ extensionFile);
			
		const removeFile = document.createElement('div');
		removeFile.classList.add('remove-file','text-light-gray', 'd-flex', 'align-self-center');
		removeFile.innerHTML = '<i class="bi bi-trash3 me-0 me-sm-2"></i><span class="d-none d-sm-inline-block pt-1 ms-0"> Remove</span>';
		
		const fileN = fileName.textContent = `${file.name}`; 
		listItemFile.innerHTML+= fileType.outerHTML + fileName.outerHTML + removeFile.outerHTML;
		listFile.appendChild(listItemFile);

		listItemFile.querySelector('.remove-file').addEventListener("click", function() {
			this.parentNode.remove();
		});

	}
} 


//	FILL SELCECT BOXS
//--------------------

const selectOption = document.querySelectorAll('.select-option li');
for(let v = 0; v < selectOption.length; v++) {
	selectOption[v].addEventListener("click", function (event) {
		document.getElementById('formSelectBox').innerHTML = selectOption[v].querySelector('label').innerHTML;
		console.log(document.querySelector('label').innerHTML);
	});
}

let allCheckBox = document.querySelectorAll('.form-check-input');
let fillInput = document.getElementById('formCheckBox');
allCheckBox.forEach((checkbox) => { 
	checkbox.addEventListener('change', (event) => {
		if (event.target.checked) {
			var inputValue = event.target;

		 	if (fillInput.innerHTML === 'What Service Do You Need?') {
				fillInput.innerHTML = '';
				fillInput.innerHTML += inputValue.value + ', ';
			} else {
			 	fillInput.innerHTML += inputValue.value + ', ';
			} 
		}	 
		else {
			if (fillInput.textContent.includes(event.target.value + ', ')) {
				let str = fillInput.textContent;
				document.getElementById("formCheckBox").innerHTML = str.replace(event.target.value + ', ', "")
			}
			if (fillInput.childNodes.length === 0) {
				document.getElementById("formCheckBox").innerHTML = "What Service Do You Need?";
			}
 		} 
	}); 
});

const chooseOption = document.querySelectorAll('.choose-option li');
for(let c = 0; c < chooseOption.length; c++) {
	chooseOption[c].addEventListener("click", function (event) {
		document.getElementById('formChooseBox').innerHTML = chooseOption[c].querySelector('label').innerHTML;
		console.log(document.querySelector('label').innerHTML);
	});
}

// GET INFO FROM FORM 
// --------------------

function formNextButton(){
	var nameValue = document.getElementById("user_name").value;
	var emailValue = document.getElementById("user_email").value;
	var phoneValue = document.getElementById("user_phone").value;

	document.getElementById("nameValue").innerHTML = nameValue;
	document.getElementById("emailValue").innerHTML = emailValue;
	document.getElementById("phoneValue").innerHTML = phoneValue;
}


//	CALENDER
//------------------------
//------------------------

const date = new Date();
const year = date.getUTCFullYear();
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekDay = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",		
];
	
var renderCalender = () => {

	date.setDate(1);
	
	const lastDay = new Date(date.getUTCFullYear(), date.getMonth()+1, 0).getDate();
	const prevLastDay = new Date(date.getUTCFullYear(), date.getMonth(), 0).getDate();		
	const firstDayIndex = date.getDay();
	const lastDayIndex = new Date(date.getUTCFullYear(), date.getMonth()+1, 0).getDay();
	const nextDays = 7 - lastDayIndex -1;			

	let currentDate = document.querySelectorAll('#cal .current, #card .current');
	for(let q = 0; q < currentDate.length; q++) {
		currentDate[q].innerHTML = months[date.getMonth()] + ' '+ year;
	}
	
	let monthDays = document.querySelector('#cal .dates');
	let monthDaysModal = document.querySelector('#card .dates');


	const request = new Request('https://lidiap.buildmy.ca/magenta-api/available-days.php?y='+ year +'&m='+ months[date.getMonth()]);

	fetch(request)
		.then(response => response.json())					
		.then(response => {
			let availableDay = response;
			showAvailableDays (availableDay);	
	});

	function showAvailableDays (availableDay) {

		var days = "";	

		for(let x = firstDayIndex; x > 0; x--) {
			days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
		}

		for(let i = 1; i <= lastDay; i++) {
			const value = availableDay.find(elem => elem === i);
			if ( i === value) {
				if( i === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
				days += `<div class="date circle today" onclick="getDate(this)" role="button">${i}</div>`;
				} else {
					days += `<div class="date circle" onclick="getDate(this)" role="button">${i}</div>`;
				} 
			} else {
				days += `<div class="date unavailable-date" role="button">${i}</div>`;
			}					
		}

		for(let y = 1; y <= nextDays; y++) {
			days += `<div class="next-date">${y}</div>`;
			monthDays.innerHTML = days;
			monthDaysModal.innerHTML = days;
		}
	}
	
}

	//CHANGE MONTH	------------------------------

	document.getElementById("prev1").addEventListener("click", () => {
		date.setMonth(date.getMonth()-1);
		renderCalender();
	});
	document.getElementById("prev2").addEventListener("click", () => {
		date.setMonth(date.getMonth()-1);
		renderCalender();
	});

	document.getElementById("next1").addEventListener("click", () => {
		date.setMonth(date.getMonth()+1);
		renderCalender();
	});
	document.getElementById("next2").addEventListener("click", () => {
		date.setMonth(date.getMonth()+1);
		renderCalender();
	});

	renderCalender();


	// GET DATE ------------------------------

	function getDate($this) {

		let myModal = new bootstrap.Modal(document.getElementById("bookCall"), {});

		let getMonth = date.getMonth()+1;
			let month = ('0' + getMonth).slice(-2);
			let getYear = date.getFullYear();
			let weekDayName = weekDay[date.getUTCDay()];			 	

		if (document.getElementById("bookCall").classList.contains("show")) {	
			let styleElems = document.querySelectorAll(".date");
			for(let i=0;i<styleElems.length;i++){			 
				styleElems[i].style.cssText = "border: 1px solid #fff;";
				event.target.style.cssText = "border: 1px solid #EB008B; color: #EB008B; background-color: #fff";
			}		

			//modal 1
			document.getElementById('date-display').innerHTML = 'Choosed date: ' + $this.innerHTML + '.' + month + '.' + getYear;

			//modal 2			
			const fullDate = document.querySelectorAll('.full-date');
			for(let d = 0; d < fullDate.length; d++) {
				fullDate[d].innerHTML = weekDayName + ', ' + months[date.getMonth()] + ' ' + $this.innerHTML + ', ' + getYear;
			}

		} else {
			myModal.show($this);

			//unstyle
			const unstyleDate = document.querySelectorAll('#dates .date');
			for(let l = 0; l < unstyleDate.length; l++) {
				unstyleDate[l].style.cssText = "border: 1px solid #ffffff; color: #000000;"
			}
			
			const fullDate = document.querySelectorAll('.full-date');
			for(let d = 0; d < fullDate.length; d++) {
				fullDate[d].innerHTML = weekDayName + ', ' + months[date.getMonth()] + ' ' + $this.innerHTML + ', ' + getYear;
			}
			document.getElementById('date-display').innerHTML = 'Choosed date: ' + $this.innerHTML + '.' + month + '.' + getYear;			

			//check date
			const valueDate = $this.innerHTML;
			const elements = Array.from(document.querySelectorAll('#dates .date'));

			const match = elements.find(el => {
				return el.textContent.toLowerCase().includes(valueDate.toLowerCase());
			});
				match.style.cssText = "border: 1px solid #EB008B; color: #EB008B; background-color: #fff";
		}

		//uncheck today
		const modalDates = document.getElementById('dates');
		const todayColor = modalDates.getElementsByClassName('today');
		for(i = 0; i < todayColor.length; i++) {
			todayColor[i].classList.remove("today");
		}

		const requestHour = new Request('https://lidiap.buildmy.ca/magenta-api/available-times.php?y='+ year +'&m='+ months[date.getMonth()] + '&d=' + $this.innerHTML);

		fetch(requestHour)
			.then(response => response.json())					
			.then(response => {
				let availableHour = response;
				showAvailableHour (availableHour);	
		});

		function showAvailableHour (availableHour) {
			sectionHours = document.getElementById("sectionHours");
		
			function setHourFunction() {
				availableHour.forEach(function (i) {
				var hourBox = document.createElement("div");
				hourBox.classList.add('hourBox', 'd-flex');
						
				var hourBoxItem = document.createElement("div");
			 	hourBoxItem.classList.add('hourBox-item', 'text-center', 'text-pink', 'form-control', 'box', 'rounded-0', 'mb-3');

			 	var hourBoxBtn = document.createElement("div");
			 	hourBoxBtn.classList.add('hourBox-btn', 'btn', 'btn-pink', 'form-control', 'box', 'rounded-0', 'mb-3');
			 	hourBoxBtn.setAttribute('data-bs-target', '#nextTab');
			 	hourBoxBtn.setAttribute('data-bs-toggle', 'modal');
			 	hourBoxBtn.setAttribute('data-bs-dismiss', 'modal');
			 	hourBoxBtn.textContent = 'Confirm';

		 		//active
		 		hourBox.onclick = function() {
					var b = document.querySelector(".hourBox.active");
					if (b) b.classList.remove("active");
					this.classList.add('active');								
				};
						
				hourBoxItem.textContent = i;
				hourBox.innerHTML+= hourBoxItem.outerHTML + hourBoxBtn.outerHTML;
				sectionHours.appendChild(hourBox);
		
				hourBox.addEventListener("click", function (event) {
					const setHour = document.querySelectorAll('.setHour');
					for(let h = 0; h < setHour.length; h++) {
						setHour[h].innerHTML = hourBoxItem.innerHTML;
					}
		 		});
			});
		}
		setHourFunction();	
	}
}

// ADD AND REMOVE GUESTS	
//--------------------------
	
(function() {
	let counter = 0;
	let addInputs = document.getElementById('addInput');
	let addFileds = document.getElementById('addFileds');
	let addInput = function() {
		counter++;
		let divGuest = document.createElement("div");
		divGuest.classList.add('guest-input', "d-flex", "justify-content-between", "mb-4", "flex-wrap", "flex-sm-nowrap", "position-relative");
		divGuest.id = "guest-" + counter;
		divGuest.innerHTML = '<input type="text" placeholder="Your Name *" class="box rounded-0 form-control w-33 mb-4 mb-sm-0">'
		+ '<input type="email" placeholder="E-mail *" class="box rounded-0 form-control w-50">' 
		+ '<i class="removeFiled bi bi-trash3 text-light-gray fs-4 align-self-center p-0" type="button" onclick="remove(this)"></i>';
	 
		addFileds.appendChild(divGuest);
	}; 
	addInputs.addEventListener('click', function() {
		addInput();
	}.bind(this)); 
})();
	
function remove(el) {
	var element = el;
	element.parentNode.remove();
}






//	POPOVER
//--------------------------
	
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList;
// To allow table elements
myDefaultAllowList.img = ['src', 'srcset', 'alt', 'title', 'width', 'height', 'onclick'];
myDefaultAllowList.button = ['data-bs-option'];

function changeImage(imgs) {
	let expandImg = document.querySelector(".changeImage");
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
};



var myPopoverTrigger = document.querySelectorAll( '.magenta-002 .point-item' ).forEach( function(node){
	
	node.addEventListener("mouseenter", function(e) {

		let popover = bootstrap.Popover.getInstance(node); 
		popover.show();

		if (window.innerWidth < 768) {
			var bgDark = document.createElement("div");
			bgDark.classList.add('modal-backdrop', 'fade', 'show');
			document.body.appendChild(bgDark);
			document.body.classList.add('modal-open');
			document.body.style.overflow = 'hidden';
		}

		document.querySelector('.popover.show').addEventListener("mouseleave", function() {
			popover.hide();
			document.body.classList.remove('modal-open');
			document.body.style.overflow = 'visible';
			bgDark.remove();
		});

		document.querySelector('.popover-close').addEventListener("click", function() {
			popover.hide();
			document.body.classList.remove('modal-open');
			document.body.style.overflow = 'visible';
			bgDark.remove();
		});
		
	});

});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));	
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// POPOVER DISMISS	------------------------------
var popoverDismiss = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
	trigger: 'focus',		
});