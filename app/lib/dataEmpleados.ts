import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
 
 
import { handleToken } from './getToken';
//const URL = process.env.NEXT_PUBLIC_LOCAL_URL;

const URL = process.env.NEXT_PUBLIC_BASE_URL;
const DATA_API_KEY = process.env.NEXT_PUBLIC_DATA_API_KEY;
const apiKey = process.env.NEXT_PUBLIC_DATA_API_KEY;

if (!apiKey) {
  throw new Error('La API key no está definida en las variables de entorno.');
}
 
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredEmpleados(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
          const token = await handleToken();

          console.log('token', token)
          const response = await fetch(`${URL}/empleados`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Sin datos empleados');
          }
          const data = await response.json();
          return (data);
        } catch (error) {
          if (error instanceof Error) {
            throw  (error.message);
          } else {
            console.error('Error desconocido', error);
          }
        } finally {
          //setLoading(false);
        }
 
}

export async function fetchEmpleadosPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchEmployById(empleado_id: string) {
  try {
    const response= await fetch(`${URL}/empleados/detalle/${empleado_id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api_key': apiKey || '',
      },
    });

    if (!response.ok) {
      throw new Error('No hay datos para mostrar con el id proveido');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}


export async function getEmpleados() {
  try {
   
    
 const response= await fetch(`${URL}/empleados`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api_key': apiKey || '',
      },
    });
    if (!response.ok) {
      throw new Error('No hay datos para mostrar');
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    const errorMessage = `No fue posible acceder a los datos: ${error.message}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}
