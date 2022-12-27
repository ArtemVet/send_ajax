<?php 
	$post = json_decode($_POST['post'], true);
	$post['title'] .= ' (Обработано)';
	$post['message'] .= ' (Обработано)';

	$post = json_encode($post);
	echo $post;