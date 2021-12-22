import { useState } from 'react'
import Header from "./components/Header";
import General from "./components/Inputs/General";
import Educational from "./components/Inputs/Educational";
import PracticalExp from "./components/Inputs/PracticalExp";
import PersonalCV from "./components/PersonalCV";

function App() {
  // Set General Info
  const [infos, setInfos] = useState({
    id: 1,
    firstname: 'Name',
    lastname: '',
    role: 'Role',
    email: 'Email',
    mobile: 'Mobile number',
    description: 'Personal Description Here'
});

  // Set Experience
  const [exps, setExps] = useState([]);

  // Set Education
  const [edus, setEdu] = useState([]);

  // Change Info
  const changeInfos = (info) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    setInfos({id, ...info})
  }


  // Add Exp
  const addExp = (exp) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newExp = {id, ...exp}
    setExps([...exps, newExp])
  }

  // Delete Exps
  const deleteInfo = (id) => {
    setExps(exps.filter((exp)=> exp.id !== id))
    setEdu(edus.filter((edu)=> edu.id !== id))
  }

  // Add Education
  const addEdu = (edu) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newEdu = {id, ...edu}
    setEdu([...edus, newEdu])
  }

  return (
    <div className='container'>
      <Header />
      <div className='flex'>
        <General onAdd={changeInfos}/>
        <Educational onAdd={addEdu}/>
        <PracticalExp onAdd={addExp}/>
        <PersonalCV edus={edus} infos={infos} exps={exps} onDelete={deleteInfo}/>
      </div>
    </div>
  );
}

export default App;
