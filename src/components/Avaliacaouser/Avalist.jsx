import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Avalist = ({ feedbacks }) => {
  return (
    <div className="my-4">
      <h2 className="mb-3">Avaliações dos Usuários</h2>
      {feedbacks.length === 0 ? (
        <p className="text-muted">Nenhuma avaliação disponível.</p>
      ) : (
        feedbacks.map((feedback, index) => (
          <div key={index} className="card p-3 mb-3">
            <h5>{feedback.name}</h5>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= feedback.rating ? 'text-warning' : 'text-muted'}`}
                  style={{ fontSize: '1.2em' }}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p className="mt-2">{feedback.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Avalist;
