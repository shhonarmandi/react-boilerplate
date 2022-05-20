import React from 'react';

import logo from './assets/images/logo.svg';
import styles from './_app.module.scss';

function App() {
	return (
		<div className={styles.container}>
			<header className={styles.container__header}>
				<img src={logo} className={styles.container__logo} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className={styles.container__link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
