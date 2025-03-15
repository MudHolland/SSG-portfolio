// Tab mapping
const tabMapping = {
	'esc': 'menu',
	'menu': 'menu',
	's': 'system',
	'system': 'system',
	'm': 'map',
	'map': 'map',
	'n': 'notifications',
	'notifications': 'notifications',
	'c': 'crew',
	'crew': 'crew',
	'j': 'journal',
	'journal': 'journal'
  };
  
  // Handle tab clicks
  const tabs = document.querySelectorAll('#top-bar span');
  tabs.forEach(tab => {
	tab.addEventListener('click', () => {
	  if (!loggedIn && tab.textContent !== '[esc] menu') {
		mainContent.innerHTML = '<p>Please log in first.</p>';
		return;
	  }
	  currentTab = tab.textContent.match(/\[.\] (.+)/)[1];
	  updateDisplay();
	  commandInput.focus();
	});
  });
  
  // Handle keyboard input
  const commandInput = document.getElementById('command-input');
  commandInput.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
	  currentTab = 'menu';
	  commandInput.value = '';
	  updateDisplay();
	} else if (e.key === 'Enter' && !gameWon && !gameLost) {
	  const command = commandInput.value.trim().toLowerCase();
	  if (command.startsWith('/')) {
		const tabCommand = command.substring(1);
		if (tabMapping[tabCommand]) {
		  currentTab = tabMapping[tabCommand];
		  updateDisplay();
		} else {
		  mainContent.innerHTML += '\n<p>Invalid tab command.</p>';
		}
	  } else {
		processCommand(command);
		updateGameState();
		updateDisplay();
	  }
	  commandInput.value = '';
	}
  });