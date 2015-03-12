# iojs-hapi-react-boilerplate
Boilerplate for initial development with 
- React
- Hapi.JS
- Isomorphic React
- Babel

## Code Organization 
```
 + IOReactBoilerplate
 + - reactboilerplate.web
 + - serverholder
```

Hapi is used with plugins concept, serverholder is jsut to spring up the hapi server 
while reactboilerplate.web will handle all the react request 

in reactboilerplate.web 
```
  + reactboilerplate.web 
  + - src  // all the main react code  
  + - lib  // hapi js plugin module 
  + + - statics // compiled code to be used in client ( css & js ) 
```

## How to play
go to each childfolder and do npm install 
```
  git clone  https://github.com/alphand/ioreactboilerplate
  cd ioreactboilerplate/serverholder && npm install && gulp
  cd ioreactboilerplate/reactboilerplate.web && npm install && node index.js
```

Please fork and do pull request as necessary 

### Todo 
[ ] Isomorphic react with HTML5 support 
[ ] Transform to ES6 code 
[ ] Integration with ionic 
[ ] Integration with material design 
 