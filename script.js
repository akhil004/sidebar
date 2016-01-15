
function handleRequest(request){
	if (request.callFunction == "toggleSidebar") {
		toggleSidebar();
	}

}
chrome.extension.onRequest.addListener(handleRequest);
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('div');
		var menuImage = chrome.extension.getURL('menu.png');
		var menuImage1 = chrome.extension.getURL('sample.jpg');
		var sideBarImage = chrome.extension.getURL('Sidebar-Menu.png');
		var url = chrome.extension.getURL('jquery.js');
		var myscript = chrome.extension.getURL('myscript.js');


		sidebar.id = "mySidebar";
		sidebar.innerHTML = "\
		<script src=' "+url+" '></script>\
		<div style='width: 88%;margin-left: 1%;padding: 23px 0px 28px 38px;margin-top: 6px;border: 1px solid black;'><a href='javascript:void(0);'><img src=' "+menuImage+"' id='menuBarToggle' style='height: 36px;margin-left: 0%;margin-top: -16px;position: relative;float: right;margin-right: 7px;'></a>\
        </div>\
			<a href='javascript:void(0);' ><img src=' "+sideBarImage+"' id='sideBarToggle' style='height: 12%;margin-left: 50%;position: absolute;margin-top: 55%'></a>\
			<div id='mymenu' style='width:88%;background: aliceblue;margin-left: 1%;padding: 23px 0px 28px 38px;border: 1px solid black;margin-top: 3%;height: 21%;'>\
			 <h1>Menu</h1>\
            </div>\
			<div style='width: 88%;background: aliceblue;margin-left: 1%;padding: 23px 0px 28px 38px;margin-top: 4%;border: 1px solid black;'>\
			<form enctype='multipart/form-data' method='post'>\
			<input type='file' name='filename' > \
			<input type='submit' name='submit'></form></div>\
			<div style='width: 97%;background: aliceblue;margin-left: 1%;margin-top: 4%;border: 1px solid black;'>\
			<img src=' "+menuImage1+"' style='width: 100%;'>\
			</div>\
		";
		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			left:0px;\
			width:30%;\
		    height:100%;\
		    transform: translateX(0px);\
			background:white;\
			border:1px solid black;\
			z-index:999999;\
			transition: transform 1s ease-in-out;\
		";
		document.body.appendChild(sidebar);
		sidebarOpen = true;
		var actualCode = [ 'var toggle = (function () { var visible = false, ele = document.getElementById("mymenu"), btn = document.getElementById("menuBarToggle");function flip() {var display = ele.style.display;ele.style.display = (display === "block" ? "none" : "block");visible = !visible;}btn.addEventListener("click", flip);ele.addEventListener("click", function (e) {e.stopPropagation();});document.addEventListener("click", function (e) {if (visible && e.target !== btn) flip();});ele.style.display = "none";return flip;}());'
		+ 'var slideBar = (function () {ele1 = document.getElementById("mySidebar"), btn1 = document.getElementById("sideBarToggle");function slideInOut() {var webkitTransform = ele1.style.webkitTransform;ele1.style.webkitTransform = (webkitTransform === "translateX(-361px)" ? "translateX(0px)" : "translateX(-361px)");}btn1.addEventListener("click", slideInOut);ele1.addEventListener("click", function (e) {e.stopPropagation();});return slideInOut;}()); ' ].join('\n');
		var myScript = document.createElement('script');
		myScript.id= "myScript";
		myScript.textContent = actualCode;
		(document.head||document.documentElement).appendChild(myScript);
		script.parentNode.removeChild(script);

	}
}

