/*
	TO-DO: Get the element for the search bar.
	       Get the element for the feedback message.
           
               Create a function that makes the feedback message visible and displays a tip message (Search for any recipe listed on this page!).
                  Hint: Use DOM display property and innerHTML property. 

               Create a function that hides the feedback message and clears all HTML content.
                  Hint: Use DOM display property and innerHTML property.

               Use traditional DOM event handlers to call the appropriate function when the search bar gains focus and loses focus.

               Add an event listener to the search bar when value in input has changed.
                  - Get the search bar value and convert it to lowercase. 
                  - Create a flag variable to track if any matching recipe is found.
                  - Loop through all the recipe cards.
                     - Get the recipe name and convert it to lowercase. (Hint: Get the text of the h3 element in the card).
                     - Check if the recipe name includes the search bar value.
                        - If it does, show the card, clear the feedback message and update the flag variable.
                        - If it doesn't, hide the card.
                     - If no matching recipe is found, make the feedback message visible and display a 'No matches found!'.
*/
var cards = document.querySelectorAll(".card")
var search_bar = document.getElementById("searchBar");
var feedback = document.getElementById("feedback");

function show_feedback(){
   feedback.style.display = "block";
   feedback.innerHTML = "Search for any recipe listed on this page!";
}

function hide_feedback(){
   feedback.style.display = "none";
   feedback.style.display = "";
}

search_bar.onfocus = show_feedback;
search_bar.onblur = hide_feedback;

search_bar.addEventListener("input", function(){
   var search_value = search_bar.value.toLowerCase();
   var check_recipe = false;
   
   for(var i = 0; i < cards.length; i++){
      var recipe_title = card[i].querySelector("h3").textContent.toLowerCase();
      if(search_value.includes(recipe_title)){
         cards[i].style.display = "block";
         hide_feedback();
         check_recipe = true;

      }else{
         cards[i].style.display = "none";
      }
      if(!check_recipe){
         feedback.style.display = "block";
         feedback.innerHTML = "No matches found!";
      }
   }
});