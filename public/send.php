<?
	$to = 'getmoreleads@yandex.ru'; 
	$subject = 'Заявка от пользователя GetMoreLeads'; 
	$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['phone'].'</p>                        
					<p>email: '.$_POST['email'].'</p>                        
					<p>Форма: '.$_POST['form'].'</p>   
					<p>Брэнд: '.$_POST['brand'].'</p>   
					<p>Сайт: '.$_POST['site'].'</p>   
					<p>Регион: '.$_POST['region'].'</p>   
					<p>Бюджет: '.$_POST['budget'].'</p>   				
					<p>Landing: '.$_POST['landing'].'</p>   				
					<p>Utm: '.$_POST['urlParams'].'</p>   				
				</body>
			</html>'; 
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
	//$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	return mail($to, $subject, $message, $headers); 
?>