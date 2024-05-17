import EmpleadoDetails from '@/app/ui/empleados/EmpleadoDetails';
import Breadcrumbs from '@/app/ui/empleados/breadcrumbs';
import { getEmpleados,fetchEmployById } from '@/app/lib/dataEmpleados';
import { handleToken } from '@/app/lib/getToken';
import { notFound } from 'next/navigation';
const URL = process.env.NEXT_PUBLIC_BASE_URL;
//const token = process.env.NEXT_PUBLIC_TOKEN;

 

 
export default async function EmpleadoPage ({ params }: { params: { id: string } })  {
   
const empleado_id = params.id;
 
  const empleado = await  fetchEmployById(empleado_id)
  if (!empleado) {
    //console.log('empleado_id',empleado_id);
   // throw new Error('No se encuentra el empleado.');
    notFound();
  }
   
    
   

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Empleados', href: '/dashboard/empleados' },
          {
            label: 'Detalles del Empleado',
            href: `/dashboard/empleados/${empleado_id}/details`,
            active: true,
          },
        ]}
      />
      <EmpleadoDetails empleado={empleado} />
    </main>
  );
};

 
