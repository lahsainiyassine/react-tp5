import { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <label htmlFor="controle-nom">Nom :</label>
        <input
          id="controle-nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="controle-email">Email :</label>
        <input
          id="controle-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <button type="submit" className="btn-primary">Envoyer</button>
      
      {(nom || email) && (
        <div className="preview-box">
          <small>Valeurs en direct dans l'état (useState) :</small>
          <p>
            <strong>Nom :</strong> {nom || '—'} | <strong>Email :</strong> {email || '—'}
          </p>
        </div>
      )}
    </form>
  );
}

export default FormulaireControle;
