<?php
$file = 'counter.txt';
$count = 0;

// 读取保存的点击数量
if (file_exists($file)) {
	$count = intval(file_get_contents($file));
}

// 更新点击数量
$count++;
file_put_contents($file, $count);

// 返回点击数量
echo $count;
?>
