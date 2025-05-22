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
  apiKey: "AIzaSyD_Do4ViCwm09gW12RlPgYRycZXrN0UFWg",
  authDomain: "gerenciador-de-recurso.firebaseapp.com",
  databaseURL: "https://gerenciador-de-recurso-default-rtdb.firebaseio.com",
  projectId: "gerenciador-de-recurso",
  storageBucket: "gerenciador-de-recurso.firebasestorage.app",
  messagingSenderId: "884782094916",
  appId: "1:884782094916:web:86b8315667f84a38443a11",
  measurementId: "G-FMMB4DJHJW"
};

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