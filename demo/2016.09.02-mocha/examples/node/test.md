# TOC
   - [Array](#array)
     - [#indexOf()](#array-indexof)
<a name=""></a>
 
<a name="array"></a>
# Array
<a name="array-indexof"></a>
## #indexOf()
should return -1 when the value is not present.

```js
expect( [1,2,3].indexOf(4) ).to.equal( -1 );
```

should return 0 when the value is the first one.

```js
expect( [1,2,3].indexOf(1) ).to.equal( 0 );
```

