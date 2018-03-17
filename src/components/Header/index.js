import React from 'react'
import styles from './styles'

const Header = ({title, onClick}) => (
  <header style={styles.header}>
    <h1 style={styles.title}>{title}</h1>
    <button onClick={onClick}>Click me!</button>
  </header>
);

export default Header