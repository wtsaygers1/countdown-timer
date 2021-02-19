# Pseudo Code for Countdown Timer

Start: A timer that will countdown in a digital clock format (Hour:Minute:Second) counting down to something in the same day and (Day-Month-Year) if applicable. The timer will update every second and stop once it reaches 0. I will use Date object and setInterval/setTimeout to complete project

Functionality: Sets an alarm to notify when a specified time has elapsed 

INIT:
- Timer (Hour:Minute:Second) or (Day-Month-Year)
- Timer will update every 1000 milliseconds: setInterval
- Timer will stop when it reaches zero: setTimeout
- Stretch Goals
    - user input for length of timer
    - audible for last 3 to 5 seconds
    - audible alert when timer zero-- audio (song, rocket launch, etc)

Objects:
- Timer

End: The timer reacher zero

HTML:
- display countdown timer in an element

CSS:
- decorate page

JS:
- Specified point when the countdown is complete
- How often to update countdown
- The current date and time from year to second
- Create a time distance between future date and current date
- Calculations of years, months, days, hours, minutes, seconds, milliseconds until countdown complete
- Output the result in the element in the HTML
- If the Countdown becomes < 0 
    - Then: stop countdown timer
    - create an output in an HTML element to signify countdown complete

Functions: