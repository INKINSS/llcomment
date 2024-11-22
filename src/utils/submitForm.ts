import { ref, set } from 'firebase/database';
import { collections } from '../content/config';
import { database } from '../../firebaseConfig';
import moment from 'moment'
import 'moment/locale/es';

moment.locale('es');
moment.updateLocale('es', {
    months : ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    
})

const formatDate = (date: Date) => {
  return moment(date).format('LL');
};

const slugTitle = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-');
}

export const submitForm = async (formData) => {
  try {
    const blogSchema = collections.blog?.schema;
    if (!blogSchema) {
      throw new Error('Blog schema is not defined');
    }

    formData.publishDate = new Date();
    formData.id = crypto.randomUUID();

    // Validar los datos usando el esquema de zod
    const parsedData = blogSchema.parse(formData);

    // Formatear la fecha para que no contenga caracteres no permitidos
    parsedData.publishDate = formatDate(parsedData.publishDate);
    // Guardar los datos en Firebase
    const formRef = ref(database, 'posts/' + slugTitle(parsedData.title));
    await set(formRef, parsedData);
    console.log('Data saved successfully');
    return true;
  } catch (error) {
    console.error('Validation or submission error:', error);
    return false;
  }
};