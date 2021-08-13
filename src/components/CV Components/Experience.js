import { FaTimes } from 'react-icons/fa'

const Experience = ({ exp, onDelete }) => {
    return (
        <div>
            <h3>{exp.company} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => onDelete(exp.id)} /></h3>
            <h3>{exp.role}</h3>
            <h4>{exp.dateFrom} - {exp.dateChecked ? 'Present' : exp.dateTo}</h4>
            <p>{exp.description}</p>
        </div>
    )
}

export default Experience
