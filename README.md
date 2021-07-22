# MILESTONE PROJECT TWO
 - - - -

**1. Purpose of the project:**
 - - - -


The purpose of this project is to provide an interactive front end website, which adapts the output based on user input. Specifically, it is intended to provide a guide as to how much of his/her wage a user can expect to keep, i.e. after taxes etc.

The idea came about after I received several job offers (a high quality problem) and was confused as to the financial viability of each, namely how much of the advertised salary would I actually get. 

It got to the point where I was able to roughly calculate the net wage from a job offer, but obviously with a degree of human error.

In addition, my partner also received some job offers, and as she has no student loan, the mental arithmetic became a bit more interesting.

So I ended up working out her net wages using a pen and paper.

And then I realised that programs like Javascript would make all this brainwork trivial, and so the idea of this website took root.

**2. User Goals/stories**
 - - - -


* As a **Potential Employer** for a Coding Role, I want to view Andrew’s website, to see how he performs as a Full stack developer. I want to be able to navigate the website and compare it to others, of similar scope.
* As a **Potential Employer** for a Coding Role, further to the above, I would be particularly interested in the Javascript coding for this website.
* As a **general user** living and earning in the UK, I want to be able to navigate through the page easily, and not get trapped at the bottom of any single page.
* As a **general user** living and earning in the UK,  further to the above I wish to be able to ascertain my tax etc liability and determine my net wages, in a timely fashion, without an excess of clicks.

**3. Stakeholder Goals**
 - - - -


To lead the user to get their net wages and understand their liabilities for tax, national insurance and student loan, in an easy fashion, without information overload.

**4. Typography and colour scheme:**
 - - - -


* Font - Exo and Sans serif. This is because they worked well in the Code Institute models (i.e., easy to read) and worked well in Milestone Project 1.
* Icons - very few icons were used here. there are some included in the Swiper.JS library, for previous and next buttons
* Colours – The primary colours are black (header,footer) red and white (labels, buttons and font therein) with some grey. The colours used throughout are set in the root folder.
* Images – I sourced the images from google images and unsplash. In CSS I used a filter on section 1 to darken the image, so any text displayed stands out better.

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
 
On each tile I have  placed a “HRMC info” which takes the user directly to the HMRC website concerning that subject, e.g. the national insurance HMRC info button takes the user to https://www.gov.uk/national-insurance. 
 
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
are resident in England, have a wage in England, but are receiving rental income from a timeshare in Spain.

**6. Wireframes:**
 - - - -
 The wireframes can be accessed from the "wireframes" folder, and also directly here:

 [Wireframes file](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/assets/wireframes/MS%202%20wireframes.bmpr)

 [Wireframes PDF](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/assets/wireframes/MS2%20wireframes.pdf)

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

**8. Testing.**
- - - - 
Please refer to the separate [TESTING.md](https://github.com/ANDREWAHN-UK/tax-calculator/blob/master/TESTING.md) file.

**9. Deployment.**
The website has been deployed on:
* [Github](https://andrewahn-uk.github.io/tax-calculator/) 
* [Netlify](https://jolly-fermi-1d6055.netlify.app/)

*9.1 Github*
To deploy the website using Github:

