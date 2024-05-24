
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSeguros() {
    noStore();
    try {
       

 const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seguro-medico`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api_key': process.env.NEXT_PUBLIC_DATA_API_KEY || '',
    },
  });
  if (!response.ok) {
    throw new Error('No hay datos para mostrar');
  }
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Hubo un error para cargar los seguros medicos.');
    }
  }