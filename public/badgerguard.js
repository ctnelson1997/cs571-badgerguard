const createCS571 = () => {
	if (!localStorage.getItem("badgerid")) {
		const bid = prompt("Please enter your Badger ID to continue...").trim();
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
						alert("You did not specify a valid Badger ID, please refresh the page and try again!")
					}
				})
			}
		})
	}

	// GPT-4o
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
