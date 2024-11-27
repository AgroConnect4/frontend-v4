import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');

    const fetchNotifications = async () => {
      try {
        if (!storedToken) {
          navigate('/login');
          return;
        }

        const response = await fetch('https://localhost:7297/api/Notification${useId}', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            sessionStorage.removeItem('token');
            navigate('/login');
            return;
          }
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error ${response.status}`);
        }

        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [navigate]); // navigate is in the dependency array for correct redirect

  if (loading) {
    return <div>Carregando notificações...</div>;
  }

  if (error) {
    return <div>Erro ao carregar notificações: {error}</div>;
  }

  return (
    <div>
      <h2>Notificações</h2>
      {notifications.length === 0 ? (
        <p>Sem notificações.</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id || notification.message}> {/*Use a unique key - consider adding a timestamp to the notification object if id is not available */}
              {notification.message} {/* Add sender, timestamp, etc. as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;