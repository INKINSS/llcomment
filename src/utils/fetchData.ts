import { ref, child, get } from "firebase/database";
import { database } from "../../firebaseConfig";

export const fetchData = async (path: string) => {
  const dbRef = ref(database);
  try {
    console.log(`Intentando obtener datos de: ${path}`);
    const snapshot = await get(child(dbRef, path));
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(`Datos encontrados en ${path}:`, data);
      
      // Si es un objeto, convertirlo a array
      if (typeof data === 'object' && !Array.isArray(data)) {
        const arrayData = Object.values(data);
        console.log(`Datos convertidos a array:`, arrayData);
        return arrayData;
      }
      
      // Si ya es un array, devolverlo directamente
      if (Array.isArray(data)) {
        return data;
      }
      
      // Si es un valor único, devolverlo en un array
      return [data];
    } else {
      console.warn(`No se encontraron datos en la ruta: ${path}`);
      return [];
    }
  } catch (error) {
    console.error(`Error obteniendo datos de ${path}:`, error);
    throw new Error(`Error obteniendo datos: ${error.message}`);
  }
};
