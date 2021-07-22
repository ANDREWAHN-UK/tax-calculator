This is the testing section of the readme, palced in a separate file:
- - - -
**8. Testing:**
- - - -

*8.1 Code Validation*
- - - - 

1. I used https://validator.w3.org to validate the html. 

The html validator returned the errors:
  * <mark>No p element in scope but a p end tag seen</mark>,  even though both paragraph tags are there, I believe because there are unordered list tags between the paragraphs.
  * numerous errors regarding the labelling convention for divs in the modal, relating to them being hidden when the page starts.
  *	some errors regarding heading for the sections. However, adding labels to pass this part of the validator led to some strange behaviour regarding the rest of the website.

2. I used https://jigsaw.w3.org/css-validator/ to validate the CSS.

The CSS returned some errors:
  * to do with bootstrap.min.css and swiper-bundle.css.
  *	 It also showed that one some occasions I typed in 4 rem instead of 4rem (i.e. no space between the number and the unit,) and it did not like negative rem values. 
  * It also showed that each value I put in the root directory (e.g. --grey-colour) is "an unknown vendor extension."

3. On the recommendation of my tutor, I used https://jshint.com/ to validate the JavaScript.

With jshint, it informed me of the following:
  * >'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  * >'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
  * >'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

which as far as I am aware, are not actually errors.

It also informed me of several missing semicolons, which I rectified.

*8.2 Test cases/ Testing the user goals/stories (section 2):* 

    1. Potential Employer Goals:

* Upon entering the site, users are greeted with a visually attractive homepage, and a clearly visible and easy to navigate header and footer.

* The homepage immediately establishes the purpose of the website, and directs users to click the “water my money tree button”

* The user has one main option, as shown on the home page, with additional options on the navigation bar

* use of inspection tools shows the JavaScript in action
- - - -
  Full screen (1920*1080) homepage
  - - - -
![image](https://i.imgur.com/CU120RI.png)

- - - -
 Homepage with an iPhone 8:
 - - - -
![image](https://i.imgur.com/br6RvRv.png)
- - - -

    2. General user:
*	Upon entering the site, users are greeted with a visually attractive homepage, and a clearly visible and easy to navigate header and footer.

*	The homepage immediately establishes the purpose of the website, and directs users to click the “water my money tree button”

*	The user has one main option, as shown on the home page, with additional options on the navigation bar

*	The modals on page 2 are easy to follow, and give obvious direction to the user as to what to do next.

*	The user cannot proceed without entering a value in the gross input category

*	The results of the user input are clearly shown, and the modals closed, and an option appears to restart the calculations

*	The system remembers the last inputs, so it is easy to the user to quickly change just one or two variables, instead of inputting everything (e.g. choosing a different student loan category)

* The user can navigate to ‘important information’ and ‘homepage’ sections quickly and easily

*	The user can navigate between the relevant information cards using the carousel
- - - -
Full screen pages 2
 - - - -
![image](https://i.imgur.com/DJzXRbn.png)

 - - - -
user needs to enter a value
- - - -
![image](https://i.imgur.com/lf9OyII.png)

- - - -
proceed to next page
- - - -
![image](https://i.imgur.com/WJKZ8YW.png)

- - - -
proceed to last page
- - - -

![image](https://i.imgur.com/tBzSaVE.png)

- - - -
From results page, user can go home 

- - - -
![image](https://i.imgur.com/0dw5zof.png)

- - - -
From results page, restart the calculator
- - - -
![image](https://i.imgur.com/9dhm9Wz.png)

- - - -

Full screen page 3, example national insurance card
- - - -
![image](https://i.imgur.com/bw7PXQZ.png)

- - - -

Full screen page 3, example national insurance card with overlay
- - - -
![image](https://i.imgur.com/AwcJ27y.png)

- - - -
iPhone 8 modals in action
- - - -
![image](https://i.imgur.com/1UGHlek.png)
- - - -
iphone 8 results page
- - - -
![image](https://i.imgur.com/h726bvu.png)
- - - -
iPhone 8 scottish residents info card
- - - -
![image](https://i.imgur.com/4Oz7SMv.png)
- - - -
iPhone 8 scottish residents info car with overlay
- - - -
![image](https://i.imgur.com/ZBgSthq.png)
- -  -
