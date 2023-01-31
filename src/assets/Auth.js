import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAIfcjpTdnQecSDVoUjrZqPHgm6ZYA2S_s",
  authDomain: "fullture-images-app.firebaseapp.com",
  projectId: "fullture-images-app",
  storageBucket: "fullture-images-app.appspot.com",
  messagingSenderId: "885380184085",
  appId: "1:885380184085:web:a67097116dfa22e3d8b61c"
};

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)