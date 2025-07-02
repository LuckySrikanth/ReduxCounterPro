## 🚀  ReduxCounterPro

**ReduxCounterPro** is a simple React + Redux-based counter app.
It demonstrates core Redux concepts such as store, reducer, actions, and connecting React components using  `react-redux`.

---

### 📌 Features

✅ Increment the counter
✅ Decrement the counter
✅ Reset counter to zero
✅ Toggle visibility of control buttons
✅ Centralized state management with Redux

---

### 🛠 Tech Stack

* React
* Redux
* React-Redux

---

### 💻 How to Run

1️⃣ **Clone this repo**

```bash
git clone https://github.com/LuckySrikanth/ReduxCounterPro.git
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Start the app**

```bash
npm run dev
```

---

### 🗂 Project Structure

```
src/
 ├── App.js        # Main React component
 ├── store.js      # Redux store + reducer
 └── index.js      # Entry point
```

---

### ⚙️ Example Code

#### `store.js`

```javascript
import { createStore } from 'redux';

const initialState = { timer: 0, hide: true };

const basic = (state = initialState, action) => {
  switch(action.type) {
    case "increment": return { ...state, timer: state.timer + 1 };
    case "DECREMENT": return { ...state, timer: state.timer - 1 };
    case "toggle": return { ...state, hide: !state.hide };
    case "zero": return { ...state, timer: 0 };
    default: return state;
  }
};

const store = createStore(basic);

export default store;
```

#### `App.js`

```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { timer, hide } = useSelector(state => state);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <h3>{timer}</h3>
      {hide && (
        <>
          <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
          <button onClick={() => dispatch({ type: "zero" })}>Make To 0</button>
        </>
      )}
      <div>
        <button onClick={() => dispatch({ type: "toggle" })}>Toggle Button</button>
      </div>
    </div>
  );
};

export default App;
```

---

### 🙌 Credits

Made with ❤️ using **React** + **Redux**

---
