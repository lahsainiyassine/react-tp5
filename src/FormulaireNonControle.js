import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <label htmlFor="non-controle-nom">Nom :</label>
        <input
          id="non-controle-nom"
          type="text"
          ref={nomRef}
          placeholder="Nom"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="non-controle-email">Email :</label>
        <input
          id="non-controle-email"
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
      </div>
      <button type="submit" className="btn-primary">Envoyer</button>
      <div className="preview-box">
        <small>Les valeurs sont lues via <code>useRef()</code> lors de la soumission.</small>
      </div>
    </form>
  );
}

export default FormulaireNonControle;
