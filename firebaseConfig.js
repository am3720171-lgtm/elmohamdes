import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // هنا تضع البيانات التي حصلت عليها في الخطوة 1
  apiKey: "AIza...",
  authDomain: "maintenance-app.firebaseapp.com",
  projectId: "maintenance-app",
  // ...
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
