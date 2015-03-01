remove-orphan-vertices
======================
### Removes orphan vertices in a simplicial complex

Completely reindexes positions and removes ununsed vertices along the way.

Install
-------

```bash
$ npm install remove-orphan-vertices
```

Usage
-----

```javascript
var removeOrphanVertices = require('remove-orphan-vertices');

var mesh = { 
  cells: [
    [0, 2, 3]
  ],
  positions: [ 
    [0, 0, 0],
    [1, 0, 0], // <- unused
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]  // <- unused
  ] 
}

mesh = removeOrphanVertices(mesh.cells, mesh.positions);

console.log(mesh);
/*
{ 
  cells: [
    [0, 1, 2]
  ],
  positions: [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0]
  ] 
}
*/
```
