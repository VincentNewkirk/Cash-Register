# Cash Register

An exercise related to [closures](https://slides.com/theremix/closures) and [js-calculator](https://github.com/devleague/js-calculator)

## Goal

Create an html5 single page app that looks like a cash register with these buttons. The cash register starts with `$0.00` funds

```
[________________] <-----( display )

[7] [8]  [9]   [÷]  [clear]
[4] [5]  [6]   [×]  [get balance]
[1] [2]  [3]   [-]  [deposit cash]
[0] [00] [.]   [+]  [withdraw cash]
               [=]

```

`( display )` is the primary ui that prints all results  
`[clear]` will clear the display  
`[get balance]` will display the current balance  
`[deposit cash]` will add the amount currently in the `( display )` to the cash register, then clears the display  
`[withdraw cash]` will remove the amount currently in the `( display )` to the cash register, then clears the display  

## calculator.js

Write all calculator logic in `calculator.js` using the [revealing module pattern](http://slides.com/jasonsewell/object-literals-and-ze-module-pattern)  
The module should be named `Calculator` and should only be concerned with performing mathematical computation.  

## cash_register.js

Write the rest of the logic to perform the necessary functions to achieve the goal.  
You may create modules within `cash_register.js` in order to separate concerns.  
For example, the function of updating the `( display )` should be handled in one place, or one module, instead of interweaved throughout the spaghetti.  

## index.html

Write all html5 markup in `index.html`  
You should import `./js/calculator.js` and `./js/cash_register.js` at the bottom of your `<body>` tag.

## Running the app

you must have `http-server` installed, if not then install it `npm i -g http-server`

from your project directory run

```
http-server
```
