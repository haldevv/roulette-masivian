# API ENDPOINTS

## /roulette/create
METHOD

    Post

## /roulette/open
BODY

    id -> roulette ID **string**

METHOD

    Post

## /roulette/bet
BODY

    rouletteId -> roulette ID **string**
    color -> color (red or black) **string**
    number -> number **number**
    money -> money to bet **number**

HEADERS

    customer -> customer ID **string**

METHOD

    post

## /roulette/close
BODY

    id -> roulette ID **string**

METHOD

    Post

## /roulette/all
METHOD
    
    Get