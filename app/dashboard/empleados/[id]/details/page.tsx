import EmpleadoDetails from '@/app/ui/empleados/EmpleadoDetails';
import Breadcrumbs from '@/app/ui/empleados/breadcrumbs';
 
import { notFound } from 'next/navigation';
const URL = process.env.NEXT_PUBLIC_DEPLOY_URL;

 

 
export default async function EmpleadoPage ({ params }: { params: { id: string } })  {
   
  const empleado_id = params.id;

 
  const response = await fetch(`${URL}/empleados/detalle/${empleado_id}`);
  if (!response.ok) {
    console.log('empleado_id',empleado_id);
   // throw new Error('No se encuentra el empleado.');
    notFound();
  }
  const empleado = await response.json();
    
   

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

 
