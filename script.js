let clickCount = 0;
let maxClicks = 5;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");
  const counterText = document.getElementById("counter");

  // Check localStorage for previous submission
  if (localStorage.getItem("submitted") === "true") {
    form.querySelectorAll("input, button").forEach(el => el.disabled = true);
    message.innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
  }

  whatsappBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
      clickCount++;
      counterText.innerText = `Click count: ${clickCount}/${maxClicks}`;

      let url = `https://wa.me/?text=${encodeURIComponent("Hey Buddy, Join Tech For Girls Community")}`;
      window.open(url, "_blank");

      if (clickCount === maxClicks) {
        message.innerText = "Sharing complete. Please continue.";
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (clickCount < maxClicks) {
      alert("Please complete sharing on WhatsApp first!");
      return;
    }

    // Save form data to Google Sheets using Google Apps Script here
    // Replace this comment with your fetch() code to submit form

    // Simulate successful submission
    message.innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
    form.querySelectorAll("input, button").forEach(el => el.disabled = true);
    localStorage.setItem("submitted", "true");
  });
});   