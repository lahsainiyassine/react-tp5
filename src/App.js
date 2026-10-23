import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import FormulaireInscription from './FormulaireInscription';
import './App.css';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app-container">
        <header className="app-header">
          <h1>TP 5 : Gestion de l'état et structuration des composants React</h1>
          <p className="subtitle">
            Formulaires contrôlés / non-contrôlés, Lifting State Up & React Context
          </p>
        </header>

        <main className="content-grid">
          {/* Étape 2 & 4 */}
          <section className="section-card">
            <h2>Étape 2 & 4 : Formulaire Contrôlé</h2>
            <p className="section-desc">
              Les champs sont reliés directement au state (<code>useState</code>).
            </p>
            <FormulaireControle />
          </section>

          {/* Étape 3 & 4 */}
          <section className="section-card">
            <h2>Étape 3 & 4 : Formulaire Non-Contrôlé</h2>
            <p className="section-desc">
              Les valeurs sont lues dans le DOM lors de la soumission avec une référence (<code>useRef</code>).
            </p>
            <FormulaireNonControle />
          </section>

          {/* Étape 5 & 6 (+ exercice Étape 9 de synchronisation Fahrenheit) */}
          <section className="section-card">
            <h2>Étape 5 & 6 : Lifting State Up (Convertisseur de Température)</h2>
            <p className="section-desc">
              L'état réside dans le parent et est partagé avec les composants enfants synchronisés (°C et °F).
            </p>
            <TemperatureConvertor />
          </section>

          {/* Étape 7 & 8 (+ exercice Étape 9 de reconnexion) */}
          <section className="section-card">
            <h2>Étape 7 & 8 : Contexte Utilisateur (React Context)</h2>
            <p className="section-desc">
              Partage d'un état global (connexion / déconnexion) sans passer par les props.
            </p>
            <Profil />
          </section>

          {/* Étape 9 : Exercice facultatif - Formulaire d'inscription */}
          <section className="section-card">
            <h2>Étape 9 : Exercice Facultatif (Formulaire d'inscription)</h2>
            <p className="section-desc">
              Formulaire contrôlé multi-champs (Nom, Email, Mot de passe).
            </p>
            <FormulaireInscription />
          </section>
        </main>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;
