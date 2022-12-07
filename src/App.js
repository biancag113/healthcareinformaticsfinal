import logo from './logo.svg';
import './App.css';
import Form1 from './Form1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={styles.mmgName}>
          CDC - Congenital Syphillis Reporting
        </p>
        <Form1>
        </ Form1>
        
      </header>
    </div>
  );
}

const styles = {
  container: { width: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 50 },
  mmg: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  mmgName: { color: 'orange', fontSize: 60, fontWeight: 'bold' },
  mmgDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;
