This is the testing section of the readme, placed in a separate file:
- - - -
**8. Testing:**
- - - -

*8.1 Code Validation*
- - - - 

1. I used https://validator.w3.org to validate the html. 

The html validator returned the errors:
  * "No p element in scope but a p end tag seen,"  even though both paragraph tags are there, I believe because there are unordered list tags between the paragraphs.
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

- - - -
*8.2 Test cases/ Testing the user goals/stories (section 2):* 
- - - -

    1. Potential Employer Goals:

* Upon entering the site, users are greeted with a visually attractive homepage, and a clearly visible and easy to navigate header and footer.

* The homepage immediately establishes the purpose of the website, and directs users to click the “water my money tree button.”

* The user has one main option, as shown on the home page, with additional options on the navigation bar.

* use of inspection tools shows the JavaScript in action.
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

*	The homepage immediately establishes the purpose of the website, and directs users to click the “water my money tree button.”

*	The user has one main option, as shown on the home page, with additional options on the navigation bar.

*	The modals on page 2 are easy to follow, and give obvious direction to the user as to what to do next.

*	The user cannot proceed without entering a value in the gross input category.

*	The results of the user input are clearly shown, and the modals closed, and an option appears to restart the calculations.

*	The system remembers the last inputs, so it is easy to the user to quickly change just one or two variables, instead of inputting everything (e.g. choosing a different student loan category.)

* The user can navigate to ‘important information’ and ‘homepage’ sections quickly and easily.

*	The user can navigate between the relevant information cards using the carousel.
- - - -
Full screen pages 2
 - - - -
![image](https://i.imgur.com/DJzXRbn.png)

 - - - -
User needs to enter a value.
- - - -
![image](https://i.imgur.com/lf9OyII.png)

- - - -
Proceed to next page.
- - - -
![image](https://i.imgur.com/WJKZ8YW.png)

- - - -
Proceed to last page, and get your results!
- - - -

![image](https://i.imgur.com/tBzSaVE.png)

- - - -
From results page, user can go home. 

- - - -
![image](https://i.imgur.com/0dw5zof.png)

- - - -
From results page, restart the calculator.
- - - -
![image](https://i.imgur.com/9dhm9Wz.png)

- - - -

Full screen page 3, example National Insurance card.
- - - -
![image](https://i.imgur.com/bw7PXQZ.png)

- - - -

Full screen page 3, example National Insurance card with overlay.
- - - -
![image](https://i.imgur.com/AwcJ27y.png)

- - - -
iPhone 8 modals in action.
- - - -
![image](https://i.imgur.com/1UGHlek.png)
- - - -
iphone 8 results page.
- - - -
![image](https://i.imgur.com/h726bvu.png)
- - - -
iPhone 8 scottish residents info card.
- - - -
![image](https://i.imgur.com/4Oz7SMv.png)
- - - -
iPhone 8 scottish residents info card with overlay.
- - - -
![image](https://i.imgur.com/ZBgSthq.png)
- - - -
*8.3 Bugs and Bug Fixing:* 
- - - -
As this was the first time using this much JavaScript, there were unsurprisingly some bugs found.
1.	When entering amounts exactly the same as the tax or National insurance bands (e.g. entering exactly £50,270) the calculator didn’t apply tax or national insurance.
    * **Fix:** use the = operator in addition to the existing > and <, e.g. if (gross >= 50270) {natIns = ((gross - 50270) * 0.02) + (maxNormalNatIns);}.

2.	Results were occasionally displayed to very many decimal places, which was ugly aesthetically and also useless for the user.
    * **Fix:** use .toFixed(2) appended to the last 6 lines of calculateIncome() which is more efficient than attaching it to each method inside calculateIncome().

3.	The carousel provided by swiper.js would not load properly, and I had to use inspect tools to make it load.
    * **Fix:** placed the swiper.js code inside the selectPage() function. I tried using on windows load, on DOM load etc, and this was the only solution that worked.

4.	Images in the carousel would vary in size.
    * **Fix:** use VH and VW to set dimensions, use position: relative, set position left: calc(50% - ½ width of object.) I freely admit I am not 100% sure how this works, but it does work. 

5.	In Javascript, I couldn’t get the span (i.e. the X at the top right of each modal) to work without defining each span element as a child of the close class, i.e. 
let span1 = document.getElementByClassName(“close”)[0].
    * **Fix:** use the selectModal() function without passing in any arguments, as an empty argument instructs the function to close all modals, which is the desired effect.

6.	On smaller viewports, the positioning of the nav buttons (on the nav bar) would all shift to the right when section 3 loaded.
    * **Fix:** In CSS position: Fixed.

7.	It was possible for users to leave the gross income value blank, and setting the attribute: required had no effect.
    * **Fix:** attribute:*Fix*ed would apply just to the element, and not to being able to proceed the modals. therefore, I created a function checkForm() (line 71 of script.js) that checks if the field is blank. If blank, it displays an alert. Note that the value can be any number.

8.	If the variables inside calculateIncome() were made global, the function would not work.
    * **Fix:** therefore I made them all local variables, which did mean however having to create a local variable twice, namely
 let inputGross = document.getElementById("grossIncome").value;
However, calculateIncome() was then put into a separate script file, so this would have had to be declared anyway I believe.

9.	Using (height and width) or (height or width) parameters in @media queries caused many display issues, and landscape mode was not attractive on most devices.
    * **Fix:** removed height parameters entirely, in favout of (min-device-width) and max-device-width) and (orientation: landscape/portrait".)

10. After enacting the previous fix, certain devices higher up the CSS hierarchy (namely the tablets) would assume the values of those lower down, whihc caused some unwanted visual effects.
    * **Fix:** several fixes were tried, in order: 

        * reverse the order of the CSS hierarchy, i.e. place the tablet devices last - didn't work well.

        * enacted bootstrap grids and rows etc - didn't work, as too much to refactor the website into this framework.

        * separated each media query ito it's own style sheet - laborious, and too much room for error, so abandoned, in favour of final solution:

        * put the 3 tablet queries into their own stylesheet.

- - - -
*8.4 Supported screens and browsers:* 
- - - -

There are screenshots, available in the screenshots folder, that show the website working at Fullscreen, and also at example mobile (iPhone 8) viewports.

As there are a total of 17 screenshots, rather than link them individually, I have linked the containing folder:

[Screenshots](https://github.com/ANDREWAHN-UK/tax-calculator/tree/master/assets/screenshots)

Additional testing on the view ports was done using [Screenfly](https://bluetree.ai/screenfly/).

I used Opera, Edge, Firefox and Chrome, and tested these, along with general usability, using the dev tools there.

Dev tools in Chrome are accessed by *right click + inspect + toggle device toolbar + select various devices*.

In Opera *right click + inspect + toggle device toolbar + select various devices.*

In Firefox, *right click + responsive design mode (ctrl+shift+m) + select various devices.* NB that Firefox displays this all at the bottom, not the right side like the others.

In Edge *right click + inspect + toggle device emulation + select various devices.*

The procedure for testing was as follows:

1.	In style.css set up media queries for the viewports, in descending order (i.e. starting with the iPad Pro and ending with the Galaxy Fold)

2.	introduce a new element, or change, e.g. a "scroll to top button."

3.	style it for the desktop, using dev tools and style.css.

4.	when happy with this, use dev tools for the next viewport, in descending order (i.e. starting with the iPad Pro.)

5.	Repeat for each element and page, e.g. styling the padding and size of the social media icons.

6.	Save changes via GitHub commit and push.

7.	Open up website on mobile device. I have an Oppo X2 Lite, my sister has an iPhone 8 and my partner a Galaxy A21.

Further testing was done with friends and family, and by submitting the code for peer review on slack, using fresh eyes to test the UX, most notably ease of navigation between pages, and visibility of text against coloured backgrounds.

Results of this testing led to a **considerable** number of viewport adjustments, notably centring on adjusting the margin and padding of the navbar buttons, section 1 and section 3 logo spans (the white circles that have red text inside them) and font sizes for the modals and section 3. 

