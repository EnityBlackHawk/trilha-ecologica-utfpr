import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/storage";
import {
  initializeFirestore,
  persistentLocalCache,
  collection,
  getDocs
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAll1nkkrzwZF5zbiRdjSd5S98Ei25EzLc",
  authDomain: "trilha-ecologia-utfpr.firebaseapp.com",
  projectId: "trilha-ecologia-utfpr",
  storageBucket: "trilha-ecologia-utfpr.appspot.com",
  messagingSenderId: "870164170047",
  appId: "1:870164170047:web:59e9913e85ef4346027f8a",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Export the Firestore and Auth modules
export const db = initializeFirestore(app, {
  localCache : persistentLocalCache()
} );
// export const storage = firebase.storage(app);

export async function getData() {
  const col = collection(db, "flora");
  const result = await getDocs(col);
  const data = result.docs.map((e) => {
    return { ...e.data(), id: e.id };
  });
  return data;
}

export async function getDataFauna() {
  const col = collection(db, "fauna");
  const result = await getDocs(col);
  const data = result.docs.map((e) => {
    return { ...e.data(), id: e.id };
  });
  return data;
}
