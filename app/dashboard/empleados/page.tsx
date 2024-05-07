 
import Pagination from '@/app/ui/empleados/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/empleados/table';
import { CreateEmpleado } from '@/app/ui/empleados/buttons';
import { lusitana } from '@/app/ui/fonts';
import { EmpleadosTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchEmpleadosPages, getEmpleados } from '@/app/lib/dataEmpleados';
import { handleToken } from '@/app/lib/getToken';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Empleados',
};



 

interface PageEmpleados {
  empleados: any[]; // Reemplaza 'any[]' con el tipo más específico si es posible
}

 
export default async function PageEmpleados({
  searchParams,
  
}: {
  searchParams?: {
    query?: string;
    page?: string;
    
  },
  
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchEmpleadosPages(query);
  const token = await handleToken();
  const empleados = await getEmpleados(token);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Empleados</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar empleado..." />
        <CreateEmpleado />
      </div>
      <Suspense key={query + currentPage} fallback={<EmpleadosTableSkeleton />}>
        <Table query={query} empleados={empleados} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
 

 