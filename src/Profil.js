import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  const connexion = () => {
    setUtilisateur({ nom: 'Alice', connecte: true });
  };

  return (
    <div className="profile-card">
      {utilisateur.connecte ? (
        <div className="logged-in-box">
          <p className="welcome-msg">
            Bienvenue, <strong>{utilisateur.nom}</strong> !
          </p>
          <button className="btn-danger" onClick={deconnexion}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="logged-out-box">
          <p className="info-msg">Veuillez vous connecter.</p>
          <button className="btn-success" onClick={connexion}>
            Se reconnecter (Alice)
          </button>
        </div>
      )}
    </div>
  );
}

export default Profil;
