# information.js

Supported information retreival values:
- true positive
- false positive
- true negative
- false negative
- precision
- recall
- true negative rate
- accurancy

# Usage

```js
var array = ['a', 'b', 'd', 'e', 'x'];
var reference = ['a', 'b', 'c', 'd', 'e'];

var information = require('./lib/information.js').getInformation(array, reference);

//information
{ 
  tp: 4,
  fp: 1,
  fn: 1,
  tn: 1,
  precision: 0.8,
  recall: 0.8,
  tnrate: 0.5,
  accurancy: 0.7142857142857143 
}
```

# License

The MIT License

Copyright (c) 2013 Jan Antala, http://janantala.com
