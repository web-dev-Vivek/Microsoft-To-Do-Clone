const setting = document.getElementById('setting');
const hoverText = document.getElementById('hoverText');
const question = document.getElementById('question');
const hoverText1 = document.getElementById('hoverText1');
const notice = document.getElementById('notice');
const hoverTextNotice = document.getElementById('hoverTextNotice');
const profile = document.getElementById('profile');
const hoverTextProfile = document.getElementById('hoverTextProfile');
let timer;

setting.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
        hoverText.style.display = 'flex';
    }, 450);
});

setting.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    hoverText.style.display = 'none';
});

question.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
        hoverText1.style.display = 'flex';
    }, 450);
});

question.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    hoverText1.style.display = 'none';
});

notice.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
        hoverTextNotice.style.display = 'flex';
    }, 450);
});

notice.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    hoverTextNotice.style.display = 'none';
});

profile.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
        hoverTextProfile.style.display = 'flex';
    }, 450);
});

profile.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    hoverTextProfile.style.display = 'none';
});









// Task addition functionality
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const listContainer = document.getElementById('listContainer');

inputField.addEventListener('input', () => {
    if (inputField.value.trim() !== "") {
        submitButton.classList.add('bright');
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove('bright');
        submitButton.disabled = true;
    }
});






const addItem = () => {
    const inputValue = inputField.value.trim();
    if (inputValue) {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        
        // Create the image element for the circle icon
        const circleIcon = document.createElement('img');
        circleIcon.src = 'https://www.svgrepo.com/show/135058/circle-outline.svg';
        circleIcon.style.cursor = 'pointer';  // Makes the icon clickable
        circleIcon.style.width = '20px';  // Set the width of the image
        circleIcon.style.height = '20px';  // Set the height of the image
        
        // Create the checkmark icon element (initially hidden)
        const checkIcon = document.createElement('i');
        checkIcon.className = 'ri-check-line';
        checkIcon.style.display = 'none';  // Hidden initially
        checkIcon.style.position = 'absolute';  // Position in the middle
        checkIcon.style.left = '50%';
        checkIcon.style.top = '50%';
        checkIcon.style.transform = 'translate(-50%, -50%)';  // Center the checkmark icon
        checkIcon.style.fontSize = '15px';
        
        // Create a container for the icon and text
        const iconContainer = document.createElement('div');
        iconContainer.style.position = 'relative';
        iconContainer.style.width = '30px';  // Increase the container width
        iconContainer.style.height = '30px';  // Increase the container height
        iconContainer.style.display = 'flex';
        iconContainer.style.alignItems = 'center';
        iconContainer.style.justifyContent = 'center';  // Center icons within the container
        
        // Append both icons to the container
        iconContainer.appendChild(circleIcon);
        iconContainer.appendChild(checkIcon);

        // Create a container for the entire item (icon + text)
        const itemContent = document.createElement('div');
        itemContent.style.display = 'flex';
        itemContent.style.alignItems = 'center';
        itemContent.style.gap = '10px';  // Space between icon and text
        
        // Add the icon container and text to the item content container
        itemContent.appendChild(iconContainer);
        itemContent.appendChild(document.createTextNode(inputValue));

        // Add the item content container to the list item
        listItem.appendChild(itemContent);
        
        // Set styles individually
        listItem.style.borderBottom = '2px solid gray';
        listItem.style.padding = '13px 1px 11px 13px';

        listContainer.appendChild(listItem);

        // Clear the input field and reset button state
        inputField.value = '';
        submitButton.classList.remove('bright');
        submitButton.disabled = true;

        // Add click event to toggle icons and color
        circleIcon.addEventListener('click', () => {
            if (checkIcon.style.display === 'none') {
                checkIcon.style.display = 'block';  // Optional: Apply filter to change color
                checkIcon.style.color = 'blue';
            } else {
                checkIcon.style.display = 'none';
                circleIcon.style.filter = '';  // Reset filter
            }
        });
    }
};

submitButton.addEventListener('click', addItem);

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputField.value.trim() !== "") {
        addItem();
    }
});
