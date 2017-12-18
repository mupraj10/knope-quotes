# Leslie Knope Quotes API

Simple API that serves up random quotes from Leslie Knope.

https://leslie-knope-quotes.herokuapp.com/quotes

![waffle leslie](./waffles.gif)


## API 

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

### `GET /quotes`

returns an array with one quote:

```javascript
["Winning is every girl's dream."];
```

### `GET /quotes/<count>`

returns an array with `<count>` quotes back

e.g `/quotes/3`

```javascript
[
  "Winning is every girl's dream.",
  "Math is worthless in real life.",
  "I am super chill all the time."
];
```
## Future 

* Create a Tom Haverford Quotes API

## Contributing 

Fork it and get it started with `npm start`


Please feel free at [add](/quote_repo.js) in any quotes of Leslie Knope I have missed  or contribute to making this better! Thanks!

### Inspired by

https://github.com/jamesseanwright/ron-swanson-quotes
