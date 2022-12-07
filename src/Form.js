import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createMMG } from './graphql/mutations'
import { listMMG } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const Form = () => {
  const [formState, setFormState] = useState(initialState)
  const [mmgs, setMMG] = useState([])

  useEffect(() => {
    fetchMMG()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchMMG() {
    try {
      const mmgData = await API.graphql(graphqlOperation(listMMG))
      const mmgs = mmgData.data.listMMG.items
      setMMG(mmgs)
    } catch (err) { console.log('error fetching mmgs') }
  }

  async function addMMG() {
    try {
      if (!formState.name || !formState.description) return
      const mmg = { ...formState }
      setMMG([...mmgs, mmg])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createMMG, {input: mmg}))
    } catch (err) {
      console.log('error creating mmg:', err)
    }
  }

  return (
    <div style={styles.container}>


      <h4>Message Profile Identifier</h4>
        <input
          onChange={event => setInput('messageProfileIdentifier', event.target.value)}
          style={styles.input}
          value={formState.messageProfileIdentifier}
          placeholder="Message profile identifier"
        />

      <h4>Maternal Information Section</h4>
        <input
              onChange={event => setInput('motherslocalrecordid', event.target.value)}
              style={styles.input}
              value={formState.motherslocalrecordid}
              placeholder="Mother's local record id"
            />
        <input
            onChange={event => setInput('mothernationalreportingjurisdiction', event.target.value)}
            style={styles.input}
            value={formState.mothernationalreportingjurisdiction}
            placeholder="Mother's national reporting jurisdiction"
          />
        <input
            onChange={event => setInput('mothersstateofresidence', event.target.value)}
            style={styles.input}
            value={formState.mothersstateofresidence}
            placeholder="Mother's state of residence"
          />
        <input
            onChange={event => setInput('motherscountyofresidence', event.target.value)}
            style={styles.input}
            value={formState.motherscountyofresidence}
            placeholder="Mother's county of residence"
          />
        <input
            onChange={event => setInput('motherszipcodeofresidence', event.target.value)}
            style={styles.input}
            value={formState.motherszipcodeofresidence}
            placeholder="Mother's zip code of residence"
          />
        <input
            onChange={event => setInput('mothersbirthdate', event.target.value)}
            style={styles.input}
            value={formState.mothersbirthdate}
            placeholder="Mother's birthdate"
          />
        <input
            onChange={event => setInput('numberofpregnancies', event.target.value)}
            style={styles.input}
            value={formState.numberofpregnancies}
            placeholder="Number of pregnancies"
          />
        <input
            onChange={event => setInput('numberoftotallivebirths', event.target.value)}
            style={styles.input}
            value={formState.numberoftotallivebirths}
            placeholder="Number of total live births"
          />
        <input
            onChange={event => setInput('lastmenstrualperiod', event.target.value)}
            style={styles.input}
            value={formState.lastmenstrualperiod}
            placeholder="Last menstrual period"
          />
        <input
            onChange={event => setInput('dateoffirstprenatalvisit', event.target.value)}
            style={styles.input}
            value={formState.dateoffirstprenatalvisit}
            placeholder="Date of first pernatal visit"
          />
        <input
            onChange={event => setInput('prenatalvisitindicator', event.target.value)}
            style={styles.input}
            value={formState.prenatalvisitindicator}
            placeholder="Prenatal visit indicator"
          />
        <input
            onChange={event => setInput('trimesteroffirstprenatalvisit', event.target.value)}
            style={styles.input}
            value={formState.trimesteroffirstprenatalvisit}
            placeholder="Trimester of first prenatal visit"
          />
        <input
            onChange={event => setInput('mothersethnicity', event.target.value)}
            style={styles.input}
            value={formState.mothersethnicity}
            placeholder="Mother's ethnicity"
          />
        <input
            onChange={event => setInput('mothersrace', event.target.value)}
            style={styles.input}
            value={formState.mothersrace}
            placeholder="Mother's race"
          />
        <input
            onChange={event => setInput('mothersmaritalstatus', event.target.value)}
            style={styles.input}
            value={formState.mothersmaritalstatus}
            placeholder="Mother's marital status"
          />
        <input
            onChange={event => setInput('mothershivstatusduringpregnancy', event.target.value)}
            style={styles.input}
            value={formState.mothershivstatusduringpregnancy}
            placeholder="Mother's HIV Status During Pregnancy"
          />
        <input
            onChange={event => setInput('mothersclinicalstageofsyphilis', event.target.value)}
            style={styles.input}
            value={formState.mothersclinicalstageofsyphilis}
            placeholder="Mother's Clinical Stage of Syphilis During Pregnancy"
          />
        <input
            onChange={event => setInput('motherssurveillancestageofsyphilis', event.target.value)}
            style={styles.input}
            value={formState.motherssurveillancestageofsyphilis}
            placeholder="Mother's Surveillance Stage of Syphilis During Pregnancy"
          />
        <input
            onChange={event => setInput('datewhenmotherreceivedfirstdoseofpencillin', event.target.value)}
            style={styles.input}
            value={formState.datewhenmotherreceivedfirstdoseofpencillin}
            placeholder="Date When Mother Received Her First Dose of Penicillin"
          />
        <input
            onChange={event => setInput('trimesteroffirstpenicillin', event.target.value)}
            style={styles.input}
            value={formState.trimesteroffirstpenicillin}
            placeholder="Trimester in Which Mother Received Her First Dose of Penicillin"
          />
        <input
            onChange={event => setInput('motherstreatment', event.target.value)}
            style={styles.input}
            value={formState.motherstreatment}
            placeholder="Mother's Treatment"
          />
        <input
            onChange={event => setInput('appropriateserologicresponse', event.target.value)}
            style={styles.input}
            value={formState.appropriateserologicresponse}
            placeholder="Appropriate Serologic Response"
          />

      <h4>Maternal Laboratory Interpretive Information</h4>
        <input
              onChange={event => setInput('nontreponemaltestatfirstvisit', event.target.value)}
              style={styles.input}
              value={formState.nontreponemaltestatfirstvisit}
              placeholder="Non-treponemal Test or Treponemal Test at First Prenatal Visit"
            />
            <input
              onChange={event => setInput('nontreponemaltestat28weeks', event.target.value)}
              style={styles.input}
              value={formState.nontreponemaltestat28weeks}
              placeholder="Non-treponemal Test or Treponemal Test at 28-32 Weeks Gestation"
            />
            <input
              onChange={event => setInput('nontreponemaltestatdelivery', event.target.value)}
              style={styles.input}
              value={formState.nontreponemaltestatdelivery}
              placeholder="Non-treponemal Test or Treponemal Test at Delivery"
            />

      <h4>Clinical Signs</h4>
          <input
              onChange={event => setInput('clinicalsignsofcongenitalsyphilis', event.target.value)}
              style={styles.input}
              value={formState.clinicalsignsofcongenitalsyphilis}
              placeholder="Clinical Signs of Congenital Syphilis"
            />
            <input
              onChange={event => setInput('clinicalsignsindicator', event.target.value)}
              style={styles.input}
              value={formState.clinicalsignsindicator}
              placeholder="Clinical Signs Indicator"
            />

      <h4>Epidemiologic Lab Interpretative questions repeating group -Mother and Infant</h4>
      <input
              onChange={event => setInput('subjectoflabtestperformed', event.target.value)}
              style={styles.input}
              value={formState.subjectoflabtestperformed}
              placeholder="Subject of Lab Test Performed"
            />
            <input
              onChange={event => setInput('testtype', event.target.value)}
              style={styles.input}
              value={formState.testtype}
              placeholder="Test Type"
            />
            <input
              onChange={event => setInput('testresult', event.target.value)}
              style={styles.input}
              value={formState.testresult}
              placeholder="Test Result"
            />
            <input
              onChange={event => setInput('nontreponemalserologictestresult', event.target.value)}
              style={styles.input}
              value={formState.nontreponemalserologictestresult}
              placeholder="Nontreponemal Serologic Syphilis Test Result"
            />
            <input
              onChange={event => setInput('dateoflabresult', event.target.value)}
              style={styles.input}
              value={formState.dateoflabresult}
              placeholder="Date of Lab Result"
            />
            <input
              onChange={event => setInput('testresultquant', event.target.value)}
              style={styles.input}
              value={formState.testresultquant}
              placeholder="Test Result Quantitative"
            />
            <input
              onChange={event => setInput('resultunits', event.target.value)}
              style={styles.input}
              value={formState.resultunits}
              placeholder="Result Units"
            />
            <input
              onChange={event => setInput('specimencollectiondate', event.target.value)}
              style={styles.input}
              value={formState.specimencollectiondate}
              placeholder="Specimen Collection Date"
            />


      <h4>Infant Information</h4>
      <input
              onChange={event => setInput('vitalstatus', event.target.value)}
              style={styles.input}
              value={formState.vitalstatus}
              placeholder="Vital Status"
            />
            <input
              onChange={event => setInput('birthweight', event.target.value)}
              style={styles.input}
              value={formState.birthweight}
              placeholder="Birth Weight"
            />
            <input
              onChange={event => setInput('gestationalage', event.target.value)}
              style={styles.input}
              value={formState.gestationalage}
              placeholder="Gestational Age"
            />

      <h4>Other Infant Laboratory Interpretive Information</h4>
      <input
              onChange={event => setInput('longbonexrays', event.target.value)}
              style={styles.input}
              value={formState.longbonexrays}
              placeholder="Long Bone X-rays for Infant"
            />
            <input
              onChange={event => setInput('darkfieldexam', event.target.value)}
              style={styles.input}
              value={formState.darkfieldexam}
              placeholder="Darkfield Exam, DFA, or Special Stain Test Findings"
            />
            <input
              onChange={event => setInput('csfwbccount', event.target.value)}
              style={styles.input}
              value={formState.csfwbccount}
              placeholder="CSF WBC Count"
            />
            <input
              onChange={event => setInput('csfproteinlevel', event.target.value)}
              style={styles.input}
              value={formState.csfproteinlevel}
              placeholder="CSF Protein Level"
            />
            <input
              onChange={event => setInput('csfvdrltestfinding', event.target.value)}
              style={styles.input}
              value={formState.csfvdrltestfinding}
              placeholder="CSF VDRL Test Finding"
            />
            <input
              onChange={event => setInput('infanttreated', event.target.value)}
              style={styles.input}
              value={formState.infanttreated}
              placeholder="Infant Treated"
            />
            <input
              onChange={event => setInput('stillbirthindicator', event.target.value)}
              style={styles.input}
              value={formState.stillbirthindicator}
              placeholder="Stillbirth Indicator"
            />

            <button style={styles.button} onClick={addMMG}>Submit</button>


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
  container: { width: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mmg: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  mmgName: { fontSize: 20, fontWeight: 'bold' },
  mmgDescription: { marginBottom: 0 },
  button: { backgroundColor: 'orange', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Form