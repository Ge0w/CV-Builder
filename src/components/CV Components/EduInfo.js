import { FaTimes } from 'react-icons/fa'

const EduInfo = ({ edu, onDelete }) => {
    return (
        <div>
            <h3>{edu.school} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => onDelete(edu.id)}/></h3>
            <h3>{edu.level} in {edu.courseSubject}</h3>
            <h4>{edu.dateFrom} to {edu.dateTo}</h4>
        </div>
    )
}

export default EduInfo
