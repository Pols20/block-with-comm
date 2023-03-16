//лайки
const likeButtons = Array.from(document.querySelectorAll(".likes-plus"));
const likeCounts = Array.from(document.querySelectorAll(".count-likes"));

likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    const current = Number(likeCounts[index].innerHTML);
    const inc = button.classList.contains("is-active") ? 1 : -1;
    likeCounts[index].innerHTML = current + inc;
  });
});


//удаление комментариев
let comments = document.getElementById('container-for-comments');
comments.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let commentСontainer = event.target.closest('.comment-container');
    commentСontainer.remove();
};

//отправка комментария
let commentName = document.getElementById('idCommentName');
let commentsHead = document.getElementById('comments-head');
let commentText = document.getElementById('idCommentText');
let commentsTextarea = document.getElementById('commentsTextarea');

let div = '';
let div2 = '';

document.getElementById("idCommentFrom").addEventListener('submit', function(e) {
    e.preventDefault();
});


//вывод через энтер
document.getElementById('idCommentText').onkeydown = function(e){
   if(e.keyCode == 13){
    let valueName = commentName.value;
  let valueText = commentText.value; 

  

	  if (valueName == '' && valueText == '') {
	  	idCommentText.blur();

	  	//работа с именем
	  	div = document.createElement('div');
	  	div.className = "textElement";
	  	div.innerHTML = "Введите имя";
	  	commentsHead.append(div);

	  	//работа с текстом
	  	div2 = document.createElement('div');
	  	div2.className = "textElement2";
	  	div2.innerHTML = "Введите комментарий";
	  	commentsTextarea.append(div2);

	  } else {
	  	alert("Ваш комментраий отправлен на модерацию");
	  	commentText.value = "";
	  	commentName.value = "";

	    document.getElementById("idCommentFrom").dispatchEvent(ev);
	  }
   }
};


document.getElementById("js-submit-comment").addEventListener('click', function(e) {
  var ev = new Event("submit");

  
  let valueName = commentName.value;
  let valueText = commentText.value; 

  

	  if (valueName == '' && valueText == '') {

	  	//работа с именем
	  	div = document.createElement('div');
	  	div.className = "textElement";
	  	div.innerHTML = "Введите имя";
	  	commentsHead.append(div);

	  	//работа с текстом
	  	div2 = document.createElement('div');
	  	div2.className = "textElement2";
	  	div2.innerHTML = "Введите комментарий";
	  	commentsTextarea.append(div2);

	  } else {
	  	alert("Ваш комментраий отправлен на модерацию");
	  	commentText.value = "";
	  	commentName.value = "";

	    document.getElementById("idCommentFrom").dispatchEvent(ev);
	  }

});

//проверка инпута и удаление дива 

commentName.addEventListener ('click', function() {
	if (div.classList.contains('textElement')) {
		div.remove('textElement');
	}
});

commentText.addEventListener ('click', function() {
	if (div2.classList.contains('textElement2')) {
		div2.remove('textElement2');
	}
});