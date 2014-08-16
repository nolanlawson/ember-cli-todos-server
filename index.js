var fortune = require('fortune')
  , app = fortune({
    adapter: 'nedb'
  })
  .resource('todo', {
    title: String,
    isCompleted: Boolean
  })
  .listen(1337);
