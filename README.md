### Notes (mostly for myself for now, I'll turn this into documentation later):
    
* Preact CLI's test setup fails out of the box on both their lack of a test command and a badly configured ESlint setup (or code written by them that violates their own rules). 

* Switched out preact setup for my own. (I'll eject and config later.)

* Assumes mocha global install as is.

* Avoid adding additional dependencies. You should be able to do this with vanilla CSS/JS and preact's methods. (We're only requiring CHAI for testing.)

### Specs:

* USE CSS GRID! (This is a perfect use case for CSS grid. And I could use the practice)

* USE FLEXBOX + CSS4 spec color rules (Again, for practice)

* FOLLOW DESIGN RULES (layout first, mobile first, grayscale before color.)

* HANDLE LOGIC IN MAIN APPLICATION STATE (No need for MOBX in this simplified example, have all buttons function as functional/pure components. Receive all functions as props from master component.)

* FRONT END ONLY. (No need for server logic in this example. Save the node event loop, event emitter, and microservice architecture experiments for another time.)

* FULL TEST COVERAGE. (NO untested logic, tests first.)


