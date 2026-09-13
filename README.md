# 🚀 Project Name

Dev Stack is a responsive web application that helps developers explore different technologies and create their own development stack. Users can add or remove technologies from their personal stack.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- DaisyUI
- JSON
- HTML5

## Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, styling, language, and DevOps technologies.

### 2. Build Your Own Stack

Users can add technologies to their personal stack and remove them whenever they want.

### 3. Responsive Design

The website is fully responsive and works smoothly on desktop, tablet, and mobile devices.

## 💡 React Concept Q&A

### 1. What is JSX, and why is it used in React?

**JSX** stands for JavaScript XML. It allows you to write HTML-like code directly inside your JavaScript file.This allows Javascript developers uses their natural stack .

### 2. What is the difference between props and state?

- **Props** (properties) are read-only data passed down from a parent component to a child component. The child cannot change them.It likes JS argument i mean an object

- **State** is local, mutable data managed directly within the component itself. When state changes, the component re-renders to reflect the update.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows you to add state variables to a functional component so React can track data changes. In this project, it is used to hold the array of items loaded from the JSON file and to keep track of current user selections.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets you run side effects—like fetching data—after the component renders. It was needed to fetch the external JSON data exactly once when the application first loads into the browser, preventing infinite loops.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the unique `key` prop to identify exactly which items have changed, been added, or been removed. This helps React update only the specific changed element in the UI instead of re-rendering the entire list, ensuring high performance.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing or hiding UI elements based on a specific condition. For example, it is used to display an empty stack message when there are no items left:

```jsx
{
  items.length === 0 ? <p>No items available!</p> : <ItemList />;
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?

- **Parent to Child:** The parent passes data downward using **props** attributes on the child tag.
- **Child to Parent:** The parent passes a **callback function** as a prop to the child. The child then executes that function and passes data back up as an argument.
