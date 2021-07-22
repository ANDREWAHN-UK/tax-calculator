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

  
    ![Image](/workspace/tax-calculator/assets/screenshots/desktop homepage.png)

    ![image](https://i.imgur.com/oEOaC9b.jpg)  


