var fortune = require('fortune')
  , app = fortune({
    adapter: 'sqlite'
  })
  .resource('todo', {
    title: String,
    isCompleted: Boolean
  })
  .listen(1337);
