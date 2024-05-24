import CreateFormEmpleado from '@/app/ui/empleados/create-form';
import Breadcrumbs from '@/app/ui/empleados/breadcrumbs';
import { fetchCategories } from '@/app/lib/dataCategory';
import { fetchSeguros } from '@/app/lib/dataSeguros';
 
interface Category {
  catfun_id: string;
  catfun_nombre: string;
}

interface Seguros {
  seguromedico_id: string;
  seguromedico_nombre: string;
}
export default async function Page()  {
  
  const categories   = await fetchCategories(); 
  const seguros = await fetchSeguros();  
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Empleado', href: '/dashboard/empleados' },
          {
            label: 'Registrar Empleado',
            href: '/dashboard/empleados/create',
            active: true,
          },
        ]}
      />
      < CreateFormEmpleado categories={categories} seguros={seguros}  />
    </main>
  );
}