import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserTable = () => {
    const { users, deleteUser } = useContext(UserContext);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredUsers = users.filter(user => user.university.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <h2>User Management</h2>
            <Link to="/create-user">
                <button>Create User</button>
            </Link>
            <input
                type="text"
                placeholder="Filter by University"
                value={filter}
                onChange={handleFilterChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>University</th>
                        <th>Subjects</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.university}</td>
                            <td>{user.subjects.join(', ')}</td>
                            <td>
                                <Link to={`/edit-user/${user.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
