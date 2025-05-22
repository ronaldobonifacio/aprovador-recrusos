import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  GithubAuthProvider,
  signOut 
} from "firebase/auth";
import { 
  enableIndexedDbPersistence,
  initializeFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

console.log('Firebase config:', firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Inicializa o Firestore com configurações otimizadas
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

// Habilita persistência offline
enableIndexedDbPersistence(db)
  .then(() => console.log("Persistência offline ativada"))
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log("Persistência já ativada em outra aba");
    } else {
      console.error("Erro na persistência:", err);
    }
  });

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
  redirect_uri: window.location.origin
});

githubProvider.setCustomParameters({
  allow_signup: 'false' // Força login em vez de cadastro
});


export { auth, signInWithPopup, signOut, db,githubProvider,googleProvider };