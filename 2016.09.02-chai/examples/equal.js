var expect = require('chai').expect;

var list = [0, 1, 2];

expect( list.length ).to.equal( 3 );  // 通过
expect( list.length ).to.equal( 2 );  // 不通过

var person = {
	name: 'chyingp',
	school: 'sysu'
};

expect( person ).to.have.property( 'name' );  // 通过
expect( person ).to.have.property( 'age' );  // 不通过