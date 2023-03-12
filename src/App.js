import Main from './main/Main';
import styles from './App.module.css';
import Footer from './footer/Footer';


function App() {

  return (
    <div className={`${styles.wrap}`}>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
