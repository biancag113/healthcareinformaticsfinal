// import './App.css';

// function Form() {
//   return (
//     <div className="FormStructure">
//       <header className="Form-header">
//       </header>
//       <div>
//         <p>Message Profile Identifier</p>
//         <p>Maternal Information Section</p>
//         <p>Maternal Laboratory Interpretive Information</p>
//         <p>Clinical Signs</p>
//         <p>Epidemiologic Lab Interpretative questions repeating group -Mother and Infant</p>
//         <p>Infant Information</p>
//         <p>Other Infant Laboratory Interpretive Information</p>
//       </div>
//     </div>
//   );
// }

// export default Form;

/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createMMG } from './graphql/mutations'
import { listMMGs } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const Form = () => {
  const [formState, setFormState] = useState(initialState)
  const [mmgs, setMMGs] = useState([])

  useEffect(() => {
    fetchMMGs()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchMMGs() {
    try {
      const mmgData = await API.graphql(graphqlOperation(listMMGs))
      const mmgs = mmgData.data.listMMGs.items
      setMMGs(mmgs)
    } catch (err) { console.log('error fetching mmgs') }
  }

  async function addMMG() {
    try {
      if (!formState.name || !formState.description) return
      const mmg = { ...formState }
      setMMGs([...mmgs, mmg])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createMMG, {input: mmg}))
    } catch (err) {
      console.log('error creating mmg:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>MMGs</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addMMG}>Create MMG</button>
      {
        mmgs.map((mmg, index) => (
          <div key={mmg.id ? mmg.id : index} style={styles.mmg}>
            <p style={styles.mmgName}>{mmg.name}</p>
            <p style={styles.mmgDescription}>{mmg.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mmg: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  mmgName: { fontSize: 20, fontWeight: 'bold' },
  mmgDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Form