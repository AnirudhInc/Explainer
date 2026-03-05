const userInput = document.getElementById('user-input');
const askButton = document.getElementById('My_Button');
const responseText = document.getElementById('response');
const userHelp = document.getElementById('HELP');
const paragraph = document.getElementById('change-para');
// 2. Trigger
askButton.addEventListener('click',function(){
  let topic = userInput.value.toLowerCase().trim();
  if (topic === "rest"){
    responseText.innerHTML = "In Physics, rest is the state of an object when it does not change its position with respect to its surroundings. Ex. We need a push for making the move of something and if the push is not there the body will not move and is called at rest.";}
    else{
      responseText.innerHTML = "I don't know this topic yet i am learning yet. While i am learning you keep studying yourself."
    }
  });

userHelp.addEventListener('click', function(){
paragraph.innerHTML="Hello, Welcome to Explainer here you will get explainations from first principles just type your queries in the given textarea for the explaination you want.";});
