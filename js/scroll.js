const head = document.querySelector(".hedoor");
const cont = document.querySelector(".unhead");
const headerHeight = head.offsetHeight;

const firstHeight = cont.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;


	if (scrollDistance >= firstHeight + headerHeight){
		head.classList.add('head--fixed');
		cont.style.marginTop = '${headerHeight}px';
	}
	else{
		head.classList.remove('head--fixed');
		cont.style.marginTop = null;
	}
});