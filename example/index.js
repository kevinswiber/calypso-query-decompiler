var Query = require('calypso').Query;
var decompiler = require('../decompiler');

var q = Query.of('companies')
  .ql('where name=@name and founded_year >= @year')
  .params({ name: 'Twitter', year: 1999 });

var decompiled = decompiler(q);

console.log(decompiled);
