var React = require('react');
var Todos = require('./todos');
var props = {
  items: [
    'Item 0',
    'Item 1',
    'Item </script>',
    'Item <!--inject!-->',
  ]
};

React.renderComponent(
  React.createElement(Todos, {items: props.items}),
  document.getElementById('container')
  );