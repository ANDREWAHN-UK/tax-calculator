# MILESTONE PROJECT TWO
![image](https://i.imgur.com/mtOHiAt.png)
 - - - -

**1. Purpose of the project:**
 - - - -


The purpose of this project is to provide an interactive front end website, which adapts the output based on user input. Specifically, it is intended to provide a guide as to how much of his/her wage a user can expect to keep, i.e. after taxes etc.

The idea came about after I received several job offers (a high quality problem) and was confused as to the financial viability of each, namely how much of the advertised salary would I actually get. 

It got to the point where I was able to roughly calculate the net wage from a job offer, but obviously with a degree of human error.

In addition, my partner also received some job offers, and as she has no student loan, the mental arithmetic became a bit more interesting.

So I ended up working out her net wages using a pen and paper.

And then I realised that programs like Javascript would make all this brainwork trivial, and so the idea of this website took root.

- - - - 
**2. User Goals/stories**
 - - - -


* As a **Potential Employer** for a Coding Role, I want to view Andrew’s website, to see how he performs as a Full stack developer. I want to be able to navigate the website and compare it to others, of similar scope.
* As a **Potential Employer** for a Coding Role, further to the above, I would be particularly interested in the Javascript coding for this website.
* As a **general user** living and earning in the UK, I want to be able to navigate through the page easily, and not get trapped at the bottom of any single page.
* As a **general user** living and earning in the UK,  further to the above I wish to be able to ascertain my tax etc liability and determine my net wages, in a timely fashion, without an excess of clicks.

 - - - - 
**3. Stakeholder Goals**
 - - - -


To lead the user to get their net wages and understand their liabilities for tax, national insurance and student loan, in an easy fashion, without information overload.

 - - - - 
**4. Typography and colour scheme:**
 - - - -


* Font - Exo and Sans serif. This is because they worked well in the Code Institute models (i.e., easy to read) and worked well in Milestone Project 1.
* Icons - very few icons were used here. there are some included in the Swiper.JS library, for previous and next buttons
* Colours – The primary colours are black (header,footer) red and white (labels, buttons and font therein) with some grey. The colours used throughout are set in the root folder.
* Images – I sourced the images from google images and unsplash. In CSS I used a filter on section 1 to darken the image, so any text displayed stands out better.

 - - - - 
**5. Features:**
 - - - -


* Header - to consist of the website name, along with links to section 2 (Wage Calculator,)  Section 3(Important information) These are what I deemed to be essential, when planning the project. In the future, this may be expanded to include a link to a contact button.
* Footer - a very simple footer that just repeats the name of the website, with a copyright logo and “all rights reserved” text.
* Homepage (Money Tree):
Here I wanted the page to be visually clean, with an image supporting and showing the purpose of the website.

In this case a potted plant with coins seemingly in lieu of soil, and therefore a money plant, or “money tree.” 

Communicating the purpose of the website is further supported by some text that explains what it is (“a website to work out your taxes and net wage”) and a quote to set the scene (I chose the very famous and often misquoted “death and taxes,” which, as it turns out, does not originate from Benjamin Franklin) and finally a visible call to action, in the form of a clickable button labelled “water my money tree.”

* Section 2 (Wage calculator):
 This consists of a series of modals designed to get the following relevant information,in this order, from the user:
    * residency - because the rules are different in Scotland
    * gross wage - either weekly, fortnightly, monthly or annually, which is then processed and turned into an annual amount.
    * student loan type - as there are different student loans in the UK, with varying criteria for repayment
    
There are buttons on the modal that clearly label going to the previous modal, or going forward, culminating with a very visible “calculate income” button, the pressing of which calculates the results and displays them in a container, and hides the modals. 

An alert is shown if the user does not enter a value into the gross income field.

In the container there is a button to restart the modals, should the user so wish.
 
* Section 3 (Important Information):

 This contains the somewhat dry, but very important information regarding how taxes etc are calculated. I believe this to be necessary information, however there is a considerable amount, which is why I have put it in its own section, for the user to peruse at their own discretion.
 
 I have summarised what I feel to be the relevant information.
 
The summary takes 2 forms, an initial, very condensed summary on a tile, with a button in the top right to click that brings up an expanded summary.
 
On each tile I have  placed a “HRMC info” button, which takes the user directly to the HMRC website concerning that subject, e.g. the national insurance HMRC info button takes the user to https://www.gov.uk/national-insurance. 
 
I initially had all the tiles in a simple line, like so:

[info tile] [info tile] [info tile] [info tile] [info tile]
 
but this was cluttered, especially on smaller viewports, so I placed the entire section inside a carousel, using swiper.js, so a single tile is displayed prominently, and the user can swipe left and right at their discretion.
 
It is worth stressing that this information informs the algorithms used, but it is absolutely *not* necessary for the user to understand any of this, for the website to work. 
 
Other tax calculation websites (see section 9)  that I looked at tend to place everything, including the input and display and introduction, all on one page, which I think creates a cluttered feel.
 
* The minimal viable product for this website is
    * header
    * footer
    * homepage (Money tree)
    * Section 2 (wage calculator)
  * Section 3 (Important information)
  
* Ideas for expanding the website:
    * creating a contact page
    * expanding the utility of the website, by creating a function whereby a user can enter multiple streams of income. For example, they can select “income type: wage/rent/royalties/savings interest” and have a separate wage calculator for each type, and then save that, and allow the user to add another, and then have a function that   checks if the new, combined income now hits certain thresholds, and modifies the net received accordingly. 
    
So a user could enter “wage 1” with a net income of x, then “wage 2” with a net income of y, and then “rental 1” with a net income of z, and the function would return net income 
a which combines net income x,y and z, runs it against tax etc thresholds and comes up with what is hopefully a nice, accurate and easy to understand summation of multiple streams of income.

Moving even further afield, the website can be broadened to account for multiple countries, and perhaps even for users with income streams from multiple countries, e.g. if you 
are resident in England, have a wage in England, but are receiving rental income from a holiday home abroad.
 - - - - 
**6. Wireframes:**
 - - - -
 The wireframes can be accessed from the "wireframes" folder, and also directly here:

 [Wireframes file](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/assets/wireframes/MS%202%20wireframes.bmpr)

 [Wireframes PDF](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/assets/wireframes/MS2%20wireframes.pdf)

 - - - - 
 **7. Technology.**
 - - - -
 The website was created using Bootstrap, HTML5, CSS3, vanilla JavaScript and Swiper.js.  

I chose Bootstrap to get a nice, functional header, as it worked for the last project. 

In creating the website itself, I decided against using the inbuilt columns and rows, as the positioning of various elements doesn’t quite fit inside the bootstrap framework.

However, this led to considerable effort with making it responsive, and if I were to rebuild the website, I would seriously consider just putting everything inside Bootstrap. 

When I started the website, GitHub and Gitpod were updated to use Visual Studio code as the base, which I am more familiar and comfortable with.

Resources:
* GitHub - used to host the pages.
* GitPod - usually accessed by using GitHub, used to edit the pages.
* Bootstrap CDN - used to structure the navbar.
* Swiper.js - used for the carousel in section 3.
- - - - 
**8. Testing.**
- - - - 
Please refer to the separate [TESTING.md](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/TESTING.md) file.

 - - - - 
**9. Deployment.**
 - - - - 

The website has been deployed on:
* [Github](https://andrewahn-uk.github.io/tax-calculator/) 
* [Netlify](https://jolly-fermi-1d6055.netlify.app/file)

*9.1 Github*

**To deploy the website using Github:**
  1. 	go to github.com and log in
  2.	locate the list of repositories, top left of screen
  3.	click on the required repository, in this case   https://github.com/ANDREWAHN-UK/tax-calculator 
  4.	on the top, locate the setting button, click on this
  5.	scroll down until you see the heading "GitHub pages," click on the link
  6.	the URL in your browser should read:
https://github.com/ANDREWAHN-UK/tax-calculator/settings/pages 
  7.	under "source" there should be a message like this: “Source GitHub Pages is currently disabled. Select a source below to enable GitHub Pages for this repository.”
  8.	select the appropriate source (choose branch: master) and click save.
  9.	there will now be a message that reads:" Your site is ready to be published at" followed by a link, in this case: https://andrewahn-uk.github.io/tax-calculator/
  10.	click on it to make sure it works.

NB, at step 7, if your page has been published before, the message will read: "Your site is published at  https://andrewahn-uk.github.io/tax-calculator/ ” 

GitHub is the preferred website for the Coding institute.

**To create a fork/backup:**

GitHub does not currently allow you to directly fork your own repo, but there is a workaround:

  1.	make a note of the URL of your repo, e.g., "https://github.com/ANDREWAHN-UK/tax-calculator "
  2.	at the very top right of the page, next to your login image and the bell icon, there is a + button, click this.
  3.	click "import repository”.
  4.	Where it says, "Your old repository’s clone URL," put in the URL of your repository, e.g., "https://github.com/ANDREWAHN-UK/tax-calculator "
  5.	In the "repository name field" choose an appropriate name for your new repository
  6.	Click "begin import"
  7.	You now have a copy of your original repository, with all commit history and branches!

However, be aware that this is not a real fork, and so you cannot do pull requests back and forth.

Because this effectively clones the repo, I decided against using the actual clone feature, but information on that can be found here:
https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository



*9.2 Netlify*

I chose Netlify because it connects very easily to GitHub and is thus a very suitable backup.

**For Netlify:**

  1.	got to https://app.netlify.com/
  2.	log in using one of the available options (I used GitHub)
  3.	Once logged in, click the button that says, "new site from git."
  4.	Choose the appropriate git source, in this case GitHub.
  5.	A selection of the relevant repositories will show up, click the desired one, in this case "ANDREWAHN-UK/tax-calculator.
  6.	On the next page, when you are happy with the options, click "deploy site”.
  7.	Once the website has been deployed, on the next page, near the top, your website name and URL will be available, in this case: https://jolly-fermi-1d6055.netlify.app/
  8.	Click on it to make sure it works.

 - - - - 
  **10. Credits**
 - - - - 

**Code:** 
Done by myself, with:
 * some work done by Bootstrap, most notably the navigation bar.
 * code from swiper.js https://swiperjs.com/get-started 

**Content:**

All done by me, with ideas and inspiration for input fields and layout from the following websites:
 *	[Money Saving expert tax calculator](https://www.moneysavingexpert.com/tax-calculator/) 
 *	[Listen to taxman salary calculator](https://listentotaxman.com/uk-tax-calculator/) 
 *	[The Salary Calculator](https://www.thesalarycalculator.co.uk/)
 *	[Chip Theory Games](https://chiptheorygames.com/landing)		- notably for their landing page modal

**Media:**

 * [Unsplash](https://unsplash.com/) for most of the images used.

 * [Google](https://www.google.com/)  for other images

**Acknowledgements:**
* Code Institute slack community
* Code Institute tutor support 
* Code Institute mentor (Rohit Sharma)
* [CodeCademy](https://www.codecademy.com/) - for their free JavaScript course



