import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const CreateUserForm = () => {
    const { addUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [subjects, setSubjects] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ name, email, university, subjects });
        navigate('/');
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="University" value={university} onChange={(e) => setUniversity(e.target.value)} />
                <input type="text" placeholder="Subjects (comma separated)" onChange={(e) => setSubjects(e.target.value.split(','))} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CreateUserForm;
