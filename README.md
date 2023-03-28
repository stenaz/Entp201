##CSE 264 – Web Systems Programming – Spring 2023
##Homework Assignment 5 - Calendar
##Due Thursday, March 23rd, 11:59pm

###Objective
To gain more experience using Node.js and Express, Ajax. 

###Description
You will create a calendar that can display any month in the year.

###Instructions

0. Any instruction that says "use xxx to ......" means you must use technique xxx to accomplish the task.

1. Use npm init to create a package.json file.

2. Use npm to install the express, path, and fs modules. 

3. Go to color.adobe.com and generate an analogous color scheme of cool (not warm) colors. Put the hex numbers of the five colors in a comment at the top of the index.html file. These are the colors you will use in the calendar.

4. Edit the index.html file (in the public folder) and add the following:
  a. Add a container div and center it on the page.
  b. In the container div, put a table that will hold the calendar. The calendar will have the basic structure of the Calendar.png image on Coursesite. Create a THEAD element in the table. Inside the THEAD element:
  - In the top row include the left and right single and double arrows and leave a cell in the center to hold the month and year. Wrap each arrow (either single or double) with either a BUTTON or A element.
  - In the second row, fill in the day of the week headers (SU, MO, etc)
  c. Create a TBODY element but leave it blank.
5. Do a git add, commit, push.
6. In the styles.css file, add styles to do the following:
  a. Pick one of your five analogous colors and apply it to all the arrows in row one.
  b. Pick a different color to use on the day of the week headers.
  c. Pick a different color for styling the month/year.
  d. Create a class style rule for the background color of the calendar cell for the current day.
  e. Collapse the borders of the calendar table so you don't get the double lines shown in Calendar.png.
7. Do a git add, commit, push.
8. In the script.js file add the following code:
  a. On page load, do an Ajax call to the root ("/") path on the server that returns an object with two properties: one with the string containing the current month and year and a second string containing the html for the rows in the calendar (TR and TD tags) for the current.
  b. Insert the month and year into it's spot on the first row. Insert the html rows into the table TBODY.
  c. Attach event handlers to the four arrows in the first row. Each of the arrows should do an Ajax call that returns a calendar for a different month. The single arrows should return a calendar for the previous or next month. The double arrows should return a calendar for the same month in the previous or next year. You decide what paths the Ajax calls should use.
  d. Use the data from the server to replace the month/day and the calendar rows.
9. Do a git add, commit, push.
10. Edit app.js and add the following:
  a. Add a router for the root path that looks up the current month and year and calls a function to create the calendar and return the info to the server. Use parameters to pass the req and res objects and the month and the year. Make sure that if the calendar is for the current month, then use the style rule you created in 6d to set the background color of the current day.
  b. Add whatever other routers and functions are necessary to handle the four other cases: back one month, ahead one month, back one year, ahead one year.
11. Do a git add, commit, push.
12. Add the usual comments to each file, test the app and do the final add, commit, push.
