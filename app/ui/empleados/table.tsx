import Image from 'next/image';
import { UpdateEmpleado, DeleteEmpleado, EmpleadoDetails } from '@/app/ui/empleados/buttons';
import EmpleadoStatus from '@/app/ui/empleados/status';
import { formatDateToLocal, formatCurrencyGs } from '@/app/lib/utils';
import { fetchFilteredEmpleados, getEmpleados } from '@/app/lib/dataEmpleados';
//import { handleToken } from '@/app/lib/getToken';
 
 
 //const URL = process.env.NEXT_PUBLIC_LOCAL_URL;
// //const token = process.env.NEXT_PUBLIC_TOKEN;
 

export default async function EmpleadoTable({
  query,
  currentPage,
  empleados,
}: {
  query: string;
  currentPage: number;
  empleados:any[];
}) {
 
// const empleados = await getEmpleados();
  
  return (
    
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {empleados?.map((empleado:any) => (
              <div
                key={empleado.empleado_id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={empleado.imagen_principal}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${empleado.nombres}'s profile picture`}
                      />
                      <p>{empleado.nombres}</p>
                    </div>
                    <p className="text-sm text-gray-500">{empleado.nombres +' ' +empleado.apellidos}</p>
                  </div>
                  <EmpleadoStatus activo={empleado.activo} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {
                      formatCurrencyGs(parseFloat(empleado['Remuneraciones']['0'].importe.toString()))}
                    </p>
                    <p>{empleado.fechaIngreso                    
                      }</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateEmpleado id={empleado.empleado_id} />
                    <DeleteEmpleado id={empleado.empleado_id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Empleado
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha Ingreso
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Remuneración Base
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Categoria
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {empleados?.map((empleado:any) => (
                <tr
                  key={empleado.empleado_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={empleado.imagen_principal}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${empleado.nombres}'s profile picture`}
                      />
                      <p>{empleado.nombres +' '+ empleado.apellidos}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(empleado.fechaIngreso)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    { 
                      empleado.Remuneraciones?.map((value:any)=>(

                        formatCurrencyGs(parseFloat(value.importe.toString()))
                      ))}
                   
                      
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                  {empleado.CatFuns?.map((catfun:any) => (
                    catfun.catfun_nombre
                  ))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <EmpleadoStatus activo={empleado.activo} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <EmpleadoDetails id={empleado.empleado_id} />
                      <UpdateEmpleado id={empleado.empleado_id} />
                      <DeleteEmpleado id={empleado.empleado_id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
