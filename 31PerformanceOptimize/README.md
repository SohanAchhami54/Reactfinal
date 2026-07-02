# middleware
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) => { ... }   // ← This is a function
})
You are not passing middleware directly.
You are passing a function that will receive the default middleware and let you customize it.
This is the recommended pattern by Redux Toolkit.