<?php require_once "header.php";?>
<body>
	<div id="content-all" class="container">
		<?php require_once "left-sidebar.php";?>
		<?php require_once "menu-social.php";?>
		<div class="col-md-10" id="geral">
			<?php if (!isset($_GET['page'])) {
				require_once ('home.php');
			} else {
				require_once ($_GET['page'].".php");
			}
			?>
		</div>
	</div>
<?php require_once "footer.php";?>
