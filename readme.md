# 0 - First react project to play around

# 1 - Parcel
- Dev build
- Host Local server
- HMR = Hot Module Replacement
- Uses file watching algorithm written in C++
- Faster builds because of caching
- Image optimization
- Minification
- Bundling
- Compression
- Consistent hashing
- Code splitting
- Differential bundling - to support old browsers
- Error handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles


# 2 - Two types of export/imports

- default export/import:
export default Test
export Test from 'PATH'

- named export/import:
export const Test1
export const Test2

import { Test1, Test2 } from 'PATH'

# 3 - Hooks
A js function given by react with multiple utilities to it.
 - useState() - used for creating local state variables in you functional component
 Whenever a state variable changes, react re-renders the component
 Always use at the top of your component body
 Never create stete variables outside your component body -> hooks can only be called inside the body of a component
 Never create state variables inside any conditional statements, loops, or functions

 - Reconciliation Algorighm (React Fiber)

 - Virtual DOM is a representation of actual DOM. It is a js object of our components (JSX)

 - Diff Algo:
 Finds the difference between the virtual doms (old and new), and then updates the actual dom with the difference

 - useEffect()
 takes a callback function and a state [dependency].
 Once the component is rendered, then the callback function inside useEffect will be called
 If, no dependency array (state), useEffect is called on every render of component
 If dependency array is empty, useEffect is called only during initial render (once only)
 If dependency array is not empty, useEffect is called everytime the dependency array is updated


# 4 - React Router Dom
- Link tag - uses <a> (anchor) tag underneath. It is a wrapper over the anchor tag


# 5 - Class based components
- Starts with the class keyword and extends React.Component to make it a react component
- Class has a render method which returns JSX
- Has a constructor, which will get props from other components
- To accept props, we have to use the super(props) method, otherwise props won't be accessible
- Q1 > Why super(props)??
- To access props, we use this keyword like this.props.propName
- this.state is an object inside the constructor which has all the state variables of that class. They can be updated using this.setState() method
- When react class loads/instantiated, the constructor is called and then render is called
- In case of parent child components, the order is:
    1. parent constructor
    2. parent render
    3. child a constructor
    4. child a render
    3. child b constructor
    4. child b render
    5. child a componentDidMount
    5. child b componentDidMount
    6. parent componentDidMount

- componentDidMount() - a lifecycle method, generally used to make API calls, because react renders the component first so it doesn't have to wait for the api to return data.
- refer react lifecycle diagram
  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/