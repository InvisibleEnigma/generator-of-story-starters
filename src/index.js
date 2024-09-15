function generateStory(event) {
  event.preventDefault();


    new Typewriter("#story", {
      strings: ["There once was a frog, who sat upon a log"],
        autoStart: true,
        delay: 1,
      cursor: "",
    });
 
}

let storyFormElement = document.querySelector("#story-generator");
storyFormElement.addEventListener("submit", generateStory);
