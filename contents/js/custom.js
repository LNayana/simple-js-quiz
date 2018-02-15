function submitAnswers(){
	var total= 5;
	var score= 0;
	var correctAnswers= ["a","a","c","c","c"];
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//validations
	for(var i = 1;i<=total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert("Please submit answer for question "+i);
			return false;
		}
	}
	
	//check answers
	for(var i=1; i <= total; i++){
		if(eval('q'+i) === correctAnswers[i-1]){
			score++;
		}
	}
	
	var divResult = document.getElementById('lblResults');
	
	if(divResult){
		divResult.innerHTML = "<span>You scored <strong>"+score+"</strong> out of <strong>"+total+"</strong></span>";
		
		if(score <=3){
			divResult.className = "text-center alert alert-danger";
		}
		else{
			if(score > 3 && score <=5){
				divResult.className="text-center alert alert-success";
			}else
				divResult.removeAttribute("class");
		}
	}
	return false;
}