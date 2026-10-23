import { useState } from 'react';

function FormulaireInscription() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    alert(`Inscription réussie !\nNom : ${formData.nom}\nEmail : ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <label htmlFor="inscr-nom">Nom :</label>
        <input
          id="inscr-nom"
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inscr-email">Email :</label>
        <input
          id="inscr-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inscr-pwd">Mot de passe :</label>
        <input
          id="inscr-pwd"
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
      </div>
      <button type="submit" className="btn-primary">S'inscrire</button>

      {submittedData && (
        <div className="success-banner">
          Dernière inscription confirmée pour <strong>{submittedData.nom}</strong> ({submittedData.email}).
        </div>
      )}
    </form>
  );
}

export default FormulaireInscription;
