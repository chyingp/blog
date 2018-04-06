const cons = require('consolidate');
const name = 'ejs';

cons[name]('views/page.html', { title: 'consolidate demo'})
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error(error);
  });


// , function(err, html){
//   if (err) throw err;
//   console.log(html);
// });