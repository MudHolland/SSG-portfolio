 // Initialize all carousels on the page
 document.querySelectorAll('.carousel').forEach(carousel => {
	const track = carousel.querySelector('.carousel-track');
	const items = Array.from(track.children);
	const prevBtn = carousel.querySelector('.carousel-prev');
	const nextBtn = carousel.querySelector('.carousel-next');
	const indicatorsContainer = carousel.querySelector('.carousel-indicators');
	
	let currentPage = 0;
	let itemsPerPage = parseInt(getComputedStyle(carousel).getPropertyValue('--items-per-page'));
	let totalPages = Math.ceil(items.length / itemsPerPage);
	let autoSlideInterval;

	function createIndicators() {
		indicatorsContainer.innerHTML = '';
		for (let i = 0; i < totalPages; i++) {
			const indicator = document.createElement('button');
			indicator.classList.add('indicator');
			if (i === currentPage) indicator.classList.add('active');
			indicator.addEventListener('click', () => goToPage(i));
			indicatorsContainer.appendChild(indicator);
		}
	}

	function updateIndicators() {
		const indicators = Array.from(indicatorsContainer.children);
		indicators.forEach((indicator, index) => {
			indicator.classList.toggle('active', index === currentPage);
		});
	}

	function goToPage(pageIndex) {
		if (pageIndex < 0 || pageIndex >= totalPages) return;
		currentPage = pageIndex;
		const itemWidth = items[0].offsetWidth;
		track.style.transform = `translateX(-${currentPage * itemsPerPage * itemWidth}px)`;
		updateIndicators();
	}

	function nextPage() {
		currentPage = (currentPage + 1) % totalPages;
		goToPage(currentPage);
	}

	function prevPage() {
		currentPage = (currentPage - 1 + totalPages) % totalPages;
		goToPage(currentPage);
	}

	function handleResize() {
		itemsPerPage = parseInt(getComputedStyle(carousel).getPropertyValue('--items-per-page'));
		totalPages = Math.ceil(items.length / itemsPerPage);
		createIndicators();
		goToPage(currentPage % totalPages);
	}

	prevBtn.addEventListener('click', prevPage);
	nextBtn.addEventListener('click', nextPage);

	window.addEventListener('resize', () => {
		clearInterval(autoSlideInterval);
		handleResize();
		startAutoSlide();
	});

	function startAutoSlide() {
		autoSlideInterval = setInterval(() => {
			nextPage();
		}, 10000);
	}

	createIndicators();
	startAutoSlide();
});