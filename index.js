var fortune = require('fortune')
  , app = fortune({
    adapter: 'nedb'
  })
  .resource('todo', {
    title: String,
    isCompleted: Boolean,
    author: 'author'
  })
  .resource('author', {
    name: String,
    todos: ['todo']
  })
  .listen(1337);
