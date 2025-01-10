import { ref, child, get } from "firebase/database";
import { database } from "../../firebaseConfig";

export const fetchData = async (path: string) => {
  const dbRef = ref(database);
  try {
    console.log(`Fetching data from path: ${path}`);
    const snapshot = await get(child(dbRef, path));
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(`Data found for path ${path}:`, data);
      // Si data es null o undefined, retorna un array vacío
      return Array.isArray(data) ? data : Object.values(data);
    } else {
      console.warn(`No data available for path: ${path}`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching data from path ${path}:`, error);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};
