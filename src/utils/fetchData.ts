import { ref, child, get } from "firebase/database";
import { database } from '../../firebaseConfig';

export const fetchData = async (path: string) => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Asegurarse de que siempre devolvemos un array de posts
      return Array.isArray(data) ? data : Object.values(data);
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};