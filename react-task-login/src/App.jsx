import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import UserTable from './components/UserTable';
import CreateUserForm from './components/CreateUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<UserTable />} />
                    <Route path="/create-user" element={<CreateUserForm />} />
                    <Route path="/edit-user/:id" element={<EditUserForm />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
