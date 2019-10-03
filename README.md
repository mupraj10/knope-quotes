# Leslie Knope Quotes API

Simple API that serves up random quotes from Leslie Knope.

Opening up this project for Hacktoberfest 2019!!!

![waffle leslie](./waffles.gif)


## API 
https://leslie-knope-quotes.herokuapp.com/quotes

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

### `GET /quotes/<count>/<keyword>`

returns an array with `count` quotes matching `keyword`

e.g. `/quotes/3/cat`

```javascript
[
  "My cat is my best friend.",
  "A dog is better than a cat.",
  "The cat is so lazy."
];
```

The search matches the full keyword exactly (case-insensitive), so the following quotes would not be returned in the above example.
```javascript
[
  "Cats can be real a-holes.",
  "I love cats."
];
```

## Future 

* Add more endpoints to the API 
* Add testing 


## Contributing 

Fork it and get it started with `npm start` 


Please feel free at [add](/quote_repo.js) in any quotes of Leslie Knope I have missed  or contribute to making this better! Thanks!

### Inspired by

https://github.com/jamesseanwright/ron-swanson-quotes
