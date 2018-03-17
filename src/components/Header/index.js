import React from 'react'
import styles from './styles'

const Header = ({title}) => (
  <header style={styles.header}>
    <h1 style={styles.title}>{title}</h1>
  </header>
);

export default Header