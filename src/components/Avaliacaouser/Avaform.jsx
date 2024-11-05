import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botaogeral from '../../pages/Botaogeral.module.css'
const Avaform = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback({ name, rating, comment });
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 my-4">
      <h2 className="mb-3">Deixe sua Avaliação</h2>
      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Avaliação:</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'text-warning' : 'text-muted'}`}
              onClick={() => handleRatingChange(star)}
              style={{ cursor: 'pointer', fontSize: '1.5em' }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Comentário:</label>
        <textarea
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={Botaogeral['btn-primary']}>Enviar Avaliação</button>
    </form>
  );
};

export default Avaform;
