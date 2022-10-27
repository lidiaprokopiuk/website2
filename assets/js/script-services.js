if ( document.URL.includes("services.html") ) {

		let onResizing = function(event) {
		let heightHeader = document.querySelector('.subpage-header .bg-header');
    if (window.innerWidth > 992) {
		 	
			let heightBox = document.querySelector('.element-bottom').offsetHeight;
		 	let valueHMax = heightHeader.style.height = 'calc(100vh - ' +   heightBox + 'px)';
	 	} else {
	 		let valueHMin = heightHeader.style.height = '660px';
	 	}
	 }

	window.onresize = onResizing;
	window.onload = onResizing;
		
}