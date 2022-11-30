let nav = `
    <nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul class="navbar-nav mx-auto mb-2 mb-lg-0 p-2 fs-3 fw-bold">
				<li class="nav-item mx-3">
				  <a href="index.html" class="nav-link px-3" style="color: black;">Home</a>
				</li>
				<li class="nav-item mx-3">
				  <a href="target.html" class="nav-link px-3" style="color: black;">Our Target</a>
				</li>
				<li class="nav-item mx-3">
				  <a href="product.html" class="nav-link px-3" style="color: black;">Products and Services</a>
				</li>
				<li class="nav-item mx-3">
				  <a href="donate.html" class="nav-link px-3" style="color: black;">How To Help Us</a>
				</li>
			  </ul>
			</div>
		</div>
    </nav>
`;
document.getElementById("nav").innerHTML = nav;