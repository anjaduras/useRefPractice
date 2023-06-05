# React useRef Hook Example

This is a simple React application that demonstrates the usage of the `useRef` hook in React.

## Description

The application consists of an input field where you can enter your name. As you type, the entered name is displayed below the input field. The main purpose of this example is to showcase the usage of the `useRef` hook to count the number of times the component renders.

## Usage

1. Open your web browser and go to `http://localhost:3000` to view the application.
2. Enter your name in the input field and observe how it is displayed below.
3. The number of times the component renders will be displayed as well.

## Technologies Used

- React
- JavaScript
- CSS

# React useState Infinite Loop Example

This repository contains an example of an infinite loop that can occur when using the `useState` hook in React incorrectly. The code demonstrates the issue and provides an explanation of how to avoid it.

## Problem Description

The code snippet in this repository showcases the problem of an infinite loop that can occur when updating the state inside the `useEffect` hook. Specifically, it demonstrates the incorrect usage of the `useState` hook in the following manner:

```jsx
const [renderCount, setRenderCount] = useState(0);

useEffect(() => {
  setRenderCount(renderCount => renderCount + 1);
}, []);
