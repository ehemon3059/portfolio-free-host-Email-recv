
  document.getElementById('contact_form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check for empty fields
    if (!name || !email || !phone || !message) {
      document.querySelector('.response-message').innerText = 'Please fill out all fields.';
      return;
    }

    // Prepare data for Brevo
    const data = {
      sender: { name: name, email: email },
      to: [{ email: 'no.one3059@gmail.com', name: 'Recipient Name' }], // Replace with your recipient email
      subject: 'New Contact Form Submission',
      htmlContent: `<h1>Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>`
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'api-key': '' // Replace with your actual Brevo API key
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        document.querySelector('.response-message').innerText = 'Your message has been sent successfully!';
        document.getElementById('contact_form').reset(); // Clear the form fields
      } else {
        throw new Error('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      document.querySelector('.response-message').innerText = `Error: ${error.message}`;
    }
  });

