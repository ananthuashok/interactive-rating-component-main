// Rating Click Event 
const rating = document.querySelectorAll('.rating');
    // Converting nodelist to array to do the for loop
    const ratingArr = Array.from(rating);
    // Condition to check if we have selected a rating
    let selected = false ;
    // To store the value of the rating
    let selectedRating ;
        for(i=0;i<ratingArr.length;i++){
            ratingArr[i].addEventListener('click',(e)=>{
                // This will remove the selected class if a rating was already selected
                selected = false ;
                ratingArr[0].classList.remove('selected');
                ratingArr[1].classList.remove('selected');
                ratingArr[2].classList.remove('selected');
                ratingArr[3].classList.remove('selected');
                ratingArr[4].classList.remove('selected');
                // Will ad selected class which will change background color
                e.target.classList.add('selected')
                // Update the selected condition since we have selected a rating
                selected = true ;
                // To update the selected rating
                selectedRating = e.target.innerHTML;
            })
        }
// Submit Event
const submitBtn = document.querySelector('#btn');
const ratingCard = document.querySelector('.rating-card');
const thankyouCard = document.querySelector('.thank-you-card');
const message = document.querySelector('#message');
// let rating = 
        submitBtn.addEventListener('click',()=>{
            // Is selected condition is true then the card will disappear
            if(selected==true){
                // First the opacity of the rating card will decrease gradually , then it's display is none
                ratingCard.style.opacity = "0"
                setTimeout(()=>{ ratingCard.style.display = 'none' }, "500")
                // Then the thankyou card's display is set to block , and the opacity is 1 
                setTimeout(()=>{ thankyouCard.style.display = 'block' }, "500")
                setTimeout(()=>{ thankyouCard.style.opacity = '1' }, "550")
                // The message will show the selected rating
                message.innerHTML=`You selected ${selectedRating} out of 5`;
            }
        })
    



