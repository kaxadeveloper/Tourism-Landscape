const allLinks = document.querySelectorAll('a');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupInput = document.getElementById('popup-input');
const popupSubmit = document.getElementById('popup-submit');
const closePopup = document.getElementById('close-popup');

// Show popup with specific title and placeholder
function openPopup(title, placeholder) {
  popupTitle.textContent = title;
  popupInput.placeholder = placeholder;
  popupInput.value = '';
  popup.classList.remove('hidden');
}

// Attach event listener to each <a>
allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const text = link.textContent.trim();
    openPopup(`"${text}" Selected`, `Enter your input for "${text}"`);
  });
});

// Handle form submission
popupSubmit.addEventListener('click', () => {
  const value = popupInput.value.trim();
  if (value) {
    alert(`You entered: ${value}`);
    popup.classList.add('hidden');
  } else {
    alert("Please enter something.");
  }
});

// Handle close button
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});
