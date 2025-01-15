// Example script
const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  console.error("BREVO_API_KEY is not set!");
  process.exit(1);
}

console.log(`Using Brevo API Key: ${apiKey}`);
// Add your deployment logic here
