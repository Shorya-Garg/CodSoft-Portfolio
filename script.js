// This is a basic JavaScript code example to demonstrate how to interact with the elements on the webpage.

// Get references to the elements on the page
const hireMeButton = document.getElementById("hire-me-button"); // Assuming there's a button with id "hire-me-button"
const letsTalkButton = document.getElementById("lets-talk-button"); // Assuming there's a button with id "lets-talk-button"
const socialMediaLinks = document.querySelectorAll(".social-media-link"); // Assuming there are elements with class "social-media-link"

// Add event listeners to the buttons
hireMeButton.addEventListener("click", () => {
  // Code to be executed when the Hire Me button is clicked
  console.log("Hire Me button clicked!");
  // You can replace this with your desired action, such as opening a new tab, displaying a modal, etc.
});

letsTalkButton.addEventListener("click", () => {
  // Code to be executed when the Lets's Talk button is clicked
  console.log("Lets's Talk button clicked!");
  // You can replace this with your desired action, such as opening a contact form, sending an email, etc.
});

// Add event listeners to the social media links
socialMediaLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Code to be executed when any social media link is clicked
    console.log("Social media link clicked!");
    // You can replace this with your desired action, such as opening a new tab, navigating to the specific social media profile, etc.
  });
});