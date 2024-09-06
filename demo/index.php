<?php
$manifest = filter_input(INPUT_GET, 'manifest', FILTER_SANITIZE_URL);

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <script src="../dist/main.min.js"></script>
</head>
<body>
<div id="mirador" data-manifestId="<?php echo $manifest; ?>"
     style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></div>
</body>
</html>

