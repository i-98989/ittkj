// 播放笑声
function playSound() {
	var audio = new Audio('laoyeye.mp3');
	audio.play();
	
	// 更新点击数量
	updateCounter();
}

// 显示消息
function showMessage() {
	alert('这是老爷爷的图片');
}

// 更新点击数量
function updateCounter() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('clicks').innerHTML = this.responseText;
		}
	};
	xhr.open('GET', 'update_counter.php', true);
	xhr.send();
}
