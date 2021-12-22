import { useState } from 'react'

const General = ({ onAdd }) => {
        const [firstname, setFirst] = useState('')
        const [lastname, setLast] = useState('')
        const [email, setEmail] = useState('')
        const [mobile, setMobile] = useState('')
        const [role, setRole] = useState('')
        const [description, setDescription] = useState('')
    
        const onSubmit = (e) => {
            e.preventDefault()
    
            onAdd({ firstname, lastname, email, mobile, role, description})
    
            setFirst('')
            setLast('')
            setEmail('')
            setMobile('')
            setRole('')
            setDescription('')
        }
    return (
        <div className='card'>
            <h1>General Information</h1> 
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <input type='text' name='first-name' placeholder='First Name' required
                        value={firstname} onChange={(e)=> setFirst(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <input type='text' name='last-name' placeholder='Last Name' required
                        value={lastname} onChange={(e)=> setLast(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <input type='email' name='email' placeholder='Email' required
                        value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <input type='text' name='mobile' placeholder='Mobile Number' required
                        value={mobile} onChange={(e)=> setMobile(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <input type='text' name='current-role' placeholder='Current Role' required
                        value={role} onChange={(e)=> setRole(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <textarea type='text' name='personal-description' placeholder='Personal Description' required
                        value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <input type='submit' value='Add' className='btn my-1'></input>
                    
                </form>
        </div>
        
    )
}

export default General
