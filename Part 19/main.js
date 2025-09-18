$(document).ready(function () {

  // Array of sample learning topics
  const topics = [
    "JavaScript Basics",
    "jQuery Tricks",
    "DOM Manipulation",
    "AJAX Requests",
    "ES6 Features",
    "Event Handling",
    "CSS Animations",
    "Responsive Design"
  ];

  // Function to create a new card
  function createCard(topic) {
    const card = $('<div class="card"></div>');
    card.text(topic);

    // Card click effect
    card.click(function () {
      $(this).fadeOut(300, function () {
        $(this).remove();
      });
    });

    return card;
  }

  // Add initial 3 cards
  for (let i = 0; i < 3; i++) {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    $(".card-container").append(createCard(randomTopic));
  }

  // Button to add a random card
  $("#add-card").click(function () {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const newCard = createCard(randomTopic);
    $(".card-container").append(newCard.hide().fadeIn(500));
  });

});
