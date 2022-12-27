
function sendAjax() {
	let xhr;

	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	else {
		xhr = false;
	}

	if(xhr) {
		let post = JSON.stringify({
				title: document.getElementsByClassName('titleLine')[0].value,
				message: document.getElementsByClassName('messageLine')[0].value,
			});
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					let answer = JSON.parse(xhr.responseText);
					document.getElementsByClassName('title')[0].innerHTML = answer.title;
					document.getElementsByClassName('message')[0].innerHTML = answer.message;
				}
			}
		};
		xhr.open('POST', 'handler.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
		xhr.send('post=' + post);
	} else {
		alert('Ваш браузер не поддерживает AJAX');
	}
}

document.getElementsByClassName('btn')[0].onclick = () => {
	sendAjax();
};