let randomNum = Math.round((Math.random() * (99 - 10) + 10));
    let countStep = 1;
    console.log(randomNum);
	
	function checkAnswer(){

		let info;
		let answer = document.getElementById('answer');
		let result = Math.abs(randomNum - answer.value);

		if( result == 0 ){
			info = 'Поздравляем! Вы угадали число!';
			answer.style.display = 'none';
            document.getElementById('send').style.display = 'none';
        }else if( result < 5 ){
			info = 'Очень тепло! (ошиблись в диапазоне от 1 до 5)';
		}else if( result < 10 ){
			info = 'Тепло! (ошиблись в диапазоне от 0 до 10)';
		}else if( result < 50 ){
			info = 'Холодно! (ошиблись в диапазоне от 0 до 50)';
		}else{
			info = 'Очень холодно! (ошиблись на 100000000000 и более 😁)';
		}

		document.getElementById('info').innerHTML += '<p>#' + countStep + ' Вы ответили: ' + answer.value + ' - ' + info + '</p>';
		answer.value = '';
		countStep++;
	}