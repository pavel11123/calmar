function menu__open(){
	document.getElementById("phone__menu-id").style.width="100%";
	document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function menu__close(){
	document.getElementById("phone__menu-id").style.width="0";
	document.getElementById("phone__menu-id-body").style.overflow="visible";
}

function popup__login(){
	document.getElementById("popup-id-login").style.opacity="1";
	document.getElementById("popup-id-login").style.zIndex="1000";
	document.getElementById("popup-id-login").style.visibility="visible";
	document.getElementById("popup-id-login").style.transition="opacity .3s, visibility 0s";
	document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function popup__closelogin(){
	document.getElementById("popup-id-login").style.opacity="0";
	document.getElementById("popup-id-login").style.zIndex="-1";
	document.getElementById("popup-id-login").style.visibility="hidden";
	document.getElementById("popup-id-login").style.transition="opacity .3s, visibility 0s 1s";
	document.getElementById("phone__menu-id-body").style.overflow="visible";
}

function popup__registration(){
	document.getElementById("popup-id-registration").style.opacity="1";
	document.getElementById("popup-id-registration").style.zIndex="1000";
	document.getElementById("popup-id-registration").style.visibility="visible";
	document.getElementById("popup-id-registration").style.transition="opacity .3s, visibility 0s";
	document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function popup__closeregistration(){
	document.getElementById("popup-id-registration").style.opacity="0";
	document.getElementById("popup-id-registration").style.zIndex="-1";
	document.getElementById("popup-id-registration").style.visibility="hidden";
	document.getElementById("popup-id-registration").style.transition="opacity .3s, visibility 0s 1s";
	document.getElementById("phone__menu-id-body").style.overflow="visible";
}