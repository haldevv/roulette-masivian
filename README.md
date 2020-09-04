# API ENDPOINTS

## /roulette/create

## /roulette/open
    BODY
id -> roulette ID **string**

## /roulette/bet
    BODY
rouletteId -> roulette ID **string**
---
color -> color (red or black) **string**
---
number -> number **number**
---
money -> money to bet **number**

    HEADERS
customer -> customer ID **string**

