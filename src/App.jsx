import { useState } from 'react'

import styles from './App.module.scss';

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? styles.theme__dark : styles.theme__light}>
      <div className={styles.bg}>
        <h1>Theme Switcher React</h1>
        <h2>Simple theme switcher using react and scss</h2>


        <h4>Click me!</h4>
        <button className={styles.btn} onClick={() => setIsDark(!isDark)}>{isDark ? '☀️' : '🌑'}</button>
      </div>
    </div>
  )
}

export default App
