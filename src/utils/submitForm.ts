import { ref, get, set } from 'firebase/database';
import { collections } from '../content/config';
import { database } from '../../firebaseConfig';
import moment from 'moment';
import 'moment/locale/es';

// Configurar el idioma español en moment
moment.locale('es');
moment.updateLocale('es', {
  months: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ],
});

const formatDate = (date: Date) => {
  return moment(date).format('LL');
};

export const submitForm = async (formData: any) => {
  try {
    const blogSchema = collections.blog?.schema;
    if (!blogSchema) {
      throw new Error('Blog schema is not defined');
    }

    // Agregar datos adicionales al formulario
    formData.publishDate = new Date();
    formData.id = crypto.randomUUID();

    // Validar los datos usando el esquema de zod
    const parsedData = blogSchema.parse(formData);

    // Formatear la fecha para que no contenga caracteres no permitidos
    parsedData.publishDate = formatDate(parsedData.publishDate);

    // Referencia al nodo "posts"
    const postsRef = ref(database, 'posts');

    // Leer los datos actuales de Firebase
    const snapshot = await get(postsRef);
    const currentPosts = snapshot.exists() ? snapshot.val() : [];

    // Asegurarnos de que sea un array
    if (!Array.isArray(currentPosts)) {
      throw new Error('The posts data is not an array!');
    }

    // Agregar el nuevo post al array
    const updatedPosts = [...currentPosts, parsedData];

    // Guardar los datos como un array en Firebase
    await set(postsRef, updatedPosts);

    console.log('Data saved successfully as an array');
    return true;
  } catch (error) {
    console.error('Validation or submission error:', error);
    return false;
  }
};
