const createCS571 = () => {
	if (!localStorage.getItem("badgerid")) {
		document.getElementsByTagName("html")[0].innerHTML += `
			<div id="cs571-popup" class="cs571-container">
				<div class="cs571-card">
					<h1>Welcome to CS571!</h1>
					<p style="margin-bottom: 1rem">Please enter your Badger ID to continue.</p>
					<form id="cs571-bid-form" class="cs571-form">
						<label for="cs571-bid" class="sr-only">Badger ID</label>
						<div class="cs571-input-wrapper">
							<input id="cs571-bid" aria-label="Please enter your Badger ID" placeholder="bid_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="cs571-input" type="password" />
							<button type="button" class="cs571-eye-button" id="cs571-eye-button" aria-label="Hold to show Badger ID">
							<svg id="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								stroke-width="1.5" stroke="currentColor" class="eye-open">
								<path stroke-linecap="round" stroke-linejoin="round"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
								<path stroke-linecap="round" stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							</button>
						</div>
						<button type="submit" class="cs571-button">Submit</button>
						<button id="cs571-dismiss" class="cs571-button-secondary">Dismiss</button>
					</form>
					<br/>
					<div>
							<h2>Don't have a Badger ID?</h2>
							<p style="margin-top: -0.25rem">You can dismiss this notification, but things won't work right...</p>
							<ul>
								<li>UW-Madison students can get a Badger ID at <a target="_blank" href="https://cs571api.cs.wisc.edu/">cs571api.cs.wisc.edu</a>.</li>
								<li>Not from UW-Madison? You can get a Badger ID at <a target="_blank" href="https://cs571.org/">cs571.org</a>.</li>
							</ul>
						</div>
				</div>
			</div>
	
			<style>
			.cs571-container {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				background: rgba(0, 0, 0, 0.4); /* semi-transparent dark overlay */
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				z-index: 9999; /* ensure it's above all other content */
			}

			.cs571-card {
				text-align: center;
				background: white;
				padding: 2rem 4rem 3rem 4rem;
				border-radius: 1rem;
				box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
				width: min(90%, 500px);
				max-height: 90vh;
				overflow-y: auto; /* scroll if content is tall */
			}
	
			.cs571-card h1 {
				font-size: 2.5rem;
				margin-bottom: 0.5rem;
				color:rgb(39, 20, 17);
			}
	
			.cs571-card h2 {
				font-size: 1.5rem;
				margin-bottom: 0.5rem;
				color:rgb(36, 34, 34);
			}
	
			.cs571-card p {
				font-size: 1rem;
				color: rgb(81, 86, 95);
			}
	
			.cs571-form {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				margin-top: 1rem;
			}
	
			.cs571-input-wrapper {
				position: relative;
			}
	
			.cs571-input {
				width: 100%;
				padding: 0.75rem 3rem 0.75rem 1rem;
				border: 1px solid #d1d5db;
				border-radius: 0.5rem;
				font-size: 1rem;
				box-sizing: border-box;
			}
	
			.cs571-eye-button {
				position: absolute;
				top: 50%;
				right: 0.75rem;
				transform: translateY(-50%);
				background: none;
				border: none;
				cursor: pointer;
				padding: 0;
				color: #6b7280;
			}
	
			.cs571-eye-button svg {
				width: 1.25rem;
				height: 1.25rem;
			}
	
			.cs571-button {
				padding: 0.75rem 1.5rem;
				background-color: #C5050C;
				color: white;
				border: none;
				border-radius: 0.5rem;
				font-size: 1rem;
				cursor: pointer;
				transition: background-color 0.2s ease;
			}
	
			.cs571-button:hover {
				background-color: rgb(160, 5, 11);
			}

			.cs571-button-secondary {
				padding: 0.75rem 1.5rem;
				background-color:rgb(63, 62, 62);
				color: white;
				border: none;
				border-radius: 0.5rem;
				font-size: 1rem;
				cursor: pointer;
				transition: background-color 0.2s ease;
			}
	
			.cs571-button-secondary:hover {
				background-color: rgb(46, 45, 45);
			}
	
			.sr-only {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				white-space: nowrap;
				border: 0;
			}
	
			.cs571-card ul {
				list-style-type: disc;
				padding-left: 1.25rem;
				margin-top: 0.5rem;
				margin-bottom: 0;
				text-align: left;
				color: rgb(81, 86, 95);
				font-size: 0.95rem;
			}
	
			.cs571-card li {
				margin-bottom: 0.5rem;
				line-height: 1.5;
			}
	
			.cs571-card a {
				color: #C5050C;
				text-decoration: none;
				transition: color 0.2s ease, text-decoration 0.2s ease;
			}
	
			.cs571-card a:hover {
				color: rgb(160, 5, 11);
				text-decoration: underline;
			}

			@keyframes fadeOut {
				from { opacity: 1; }
				to { opacity: 0; }
			}

			.fade-out {
				animation: fadeOut 0.5s forwards;
			}

			@keyframes fadeIn {
				from { opacity: 0; }
				to { opacity: 1; }
			}

			.fade-in {
				animation: fadeIn 0.5s forwards;
			}
				
			</style>
			`;
			const input = document.getElementById("cs571-bid");
			const eyeButton = document.getElementById("cs571-eye-button");
			const icon = document.getElementById("eye-icon");

			const card = document.getElementById("cs571-popup");
			card.classList.add("fade-in");
			card.addEventListener("animationend", () => {
				card.classList.remove("fade-in");
			}, { once: true });
	
			const EYE_OPEN = `
					<path stroke-linecap="round" stroke-linejoin="round"
					  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					<path stroke-linecap="round" stroke-linejoin="round"
					  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			`
	
			const EYE_CLOSE = `
				<path stroke-linecap="round" stroke-linejoin="round"
					  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.042 10.042 0 012.944-4.568M6.6 6.6A9.974 9.974 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.048 10.048 0 01-4.255 5.137M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.254.998M12 9a2.99 2.99 0 012.254 4.002M3 3l18 18" />
			`;
	
			eyeButton.addEventListener("mousedown", () => {
				input.type = "text";
				icon.innerHTML = EYE_CLOSE;
			});
			
			eyeButton.addEventListener("mouseup", () => {
				input.type = "password";
				icon.innerHTML = EYE_OPEN;
			});
		
			eyeButton.addEventListener("mouseleave", () => {
				input.type = "password";
				icon.innerHTML = EYE_OPEN;
			});
	
			eyeButton.addEventListener("keydown", (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault(); 
					input.type = "text";
					icon.innerHTML = EYE_CLOSE;
				}
			});
	
			eyeButton.addEventListener("keyup", (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					input.type = "password";
					icon.innerHTML = EYE_OPEN;
				}
			});
	
			document.getElementById("cs571-bid-form").addEventListener("submit", (e) => {
				e.preventDefault();
				const bid = document.getElementById("cs571-bid").value?.trim() ?? "";
				fetch("https://cs571api.cs.wisc.edu/rest/auth/verify-bid", {
					headers: {
						"X-CS571-ID": bid
					}
				}).then(res => {
					if (res.ok) {
						alert("Badger ID successfully saved for cs571api.cs.wisc.edu!")
						localStorage.setItem("badgerid", bid);
						window.location.reload();
					} else {
						fetch("https://cs571.org/api/auth/verify-bid", {
							headers: {
								"X-CS571-ID": bid
							}
						}).then(r => {
							if (r.ok) {
								alert("Badger ID successfully saved for cs571.org!")
								localStorage.setItem("badgerid", bid)
								window.location.reload();
							} else {
								alert("You did not specify a valid Badger ID, please try again!")
							}
						}).catch((err) => {
							alert("An error occured while trying to confirm your Badger ID; this is likely due to CORS. Setting Badger ID anyways, if it is truly incorrect please clear your localStorage.")
							localStorage.setItem("badgerid", bid);
							window.location.reload();
						})
					}
				}).catch((err) => {
					alert("An error occured while trying to confirm your Badger ID; this is likely due to CORS. Setting Badger ID anyways, if it is truly incorrect please clear your localStorage.")
					localStorage.setItem("badgerid", bid);
					window.location.reload();
				})
			})


			document.getElementById("cs571-dismiss").addEventListener("click", (e) => {
				e.preventDefault();
				card.classList.add("fade-out");
				card.addEventListener("animationend", () => {
					card.remove();
				}, { once: true });
			});
	}

	const sequence = [
		'Enter',
		'Enter',
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown'
	];
	let currentIndex = 0;
	document.addEventListener('keydown', (event) => {
		if (event.key === sequence[currentIndex]) {
			currentIndex++;
			if (currentIndex === sequence.length) {
				const conf = confirm("Are you sure you want to clear your Badger ID?")
				if (conf) {
					localStorage.removeItem("badgerid");
					alert("Badger ID cleared!")
					window.location.reload();
				} else {
					alert("Sequence canceled. Did not remove Badger ID.")
				}
				currentIndex = 0;
			}
		} else {
			currentIndex = 0;
		}
	});

	return {
		getBadgerId: () => localStorage.getItem("badgerid"),
		setBadgerId: (id) => localStorage.setItem("badgerid", id)
	}
}

const CS571 = createCS571();
