import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore'; // Certifique-se de importar o Firestore se não estiver usando o SDK modular

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await firebase.firestore().collection('users').get();
        setUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const updateUserRole = (userId, role) => {
    firebase.firestore().collection('users').doc(userId).update({ role })
      .then(() => {
        console.log('User role updated');
        // Atualize o estado dos usuários após a atualização do papel, se necessário
      })
      .catch(error => {
        console.error('Error updating user role:', error);
      });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => updateUserRole(user.id, 'admin')}>Make Admin</button>
                <button onClick={() => updateUserRole(user.id, 'user')}>Revoke Admin</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
