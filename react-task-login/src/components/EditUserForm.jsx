import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const EditUserForm = () => {
    const { users, updateUser } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const user = users.find((user) => user.id === parseInt(id));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [university, setUniversity] = useState(user.university);
    const [subjects, setSubjects] = useState(user.subjects);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user.id, { name, email, university, subjects });
        navigate('/');
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
                <input type="text" value={subjects.join(', ')} onChange={(e) => setSubjects(e.target.value.split(','))} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditUserForm;
