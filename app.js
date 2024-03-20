const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', { id: 'heading1' }, 'I am the h1 tag'),
        React.createElement('h2', { id: 'heading2' }, 'I am the h2 tag')
      ]
    ),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', { id: 'heading1' }, 'I am the h1 tag'),
        React.createElement('h2', { id: 'heading2' }, 'I am the h2 tag')
      ]
    )
  ]
);

// const heading = React.createElement(
//   'h1',
//   {
//     id: 'heading'
//   },
//   'Hello World from react'
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);