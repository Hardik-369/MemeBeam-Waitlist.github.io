const scriptURL = 'https://script.google.com/macros/s/AKfycby0sWKg37qR5_dmW7cmaZf9PSEaTtOWjo1heqR_O7f5YVjWDUyw6n9BJjwXeHS4NOyggg/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      showThankYouPage();
      alert("Thank you! your form is submitted successfully.");
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message));
});

function showThankYouPage() {
  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('thankYouPage').classList.remove('hidden');
}

function goBack() {
  document.getElementById('thankYouPage').classList.add('hidden');
  document.getElementById('landingPage').classList.remove('hidden');
}
