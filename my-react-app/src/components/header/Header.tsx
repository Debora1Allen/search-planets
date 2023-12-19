import React from 'react';
import logo from '../../assets/logo.svg';
import circle from '../../assets/cirulo.svg';
import styles from './Header.module.css';
import circleMaior from '../../assets/ciruloM.svg';

function Header() {
    return (
      <div className={styles.container}>
        <header>
          <img className={styles.circleMaior} src={circleMaior} alt="Circle Maior" />
          <img className={styles.circle} src={circle} alt="Circle" />
          <img className={styles.logo} src={logo} alt="Logo" />
        </header>
      </div>
    );
  }
  
  export default Header;