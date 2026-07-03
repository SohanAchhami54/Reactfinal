# middleware
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) => { ... }   // ← This is a function
})
You are not passing middleware directly.
You are passing a function that will receive the default middleware and let you customize it.
This is the recommended pattern by Redux Toolkit.

# React.memo, useCallback and useMemo 
React.memo = Prevents re-rendering of child component
useCallback = Prevents new function creation
useMemo = Prevents re-computation of expensive values (like mapped list).


# Todolist 
Every time Todolist re-renders, React executes the .map() and creates brand new objects for the props.