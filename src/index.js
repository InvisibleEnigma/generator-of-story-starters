function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4408ef6c23fad2o2b567b019337f885t";
  let prompt = `Write the first three sentences of a mystery story using the word '${instructionsInput.value}' as a key element. Ensure these sentences are captivating, setting up a sense of intrigue and suspense for the reader. The response should be concise, with correct punctuation, grammar, and spelling, strictly within the limit of three sentences. The response should end with a ... and allow the user to continue the story. `;
  let context =
    "You are an award-winning nevelist known for creating gripping mystery novels. You create mystery story beginings that are intriguing and captivates the readers interest within the first three sentences.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="blink"> 😄 Generating a mystery story starter invloving ${instructionsInput.value}.</div>`;

  axios.get(apiURL).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator");
storyFormElement.addEventListener("submit", generateStory);
