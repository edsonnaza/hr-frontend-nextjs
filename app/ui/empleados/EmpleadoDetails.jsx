 
 import Image from "next/image";
 import { PaperClipIcon } from '@heroicons/react/24/outline';
 import { formatDateToLocal, formatCurrencyGs } from "@/app/lib/utils";

const EmpleadoDetails = ({empleado}) => {
//  const router = useRouter();
 

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Infomarción del Empleado</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Datos y documentos del funcionario</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Nombres</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center">
          <div className="mr-2">
            <Image
              src={empleado.imagen_principal}
              className="rounded-full"
              width={28}
              height={28}
              alt={`${empleado.nombres}'s profile picture`}
            />
          </div>
          <div>
            {empleado.nombres + ' ' + empleado.apellidos}
          </div>
        </dd>
      </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Tipo de Empleado</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{empleado['CatFuns'][0]?.catfun_nombre}</dd>
          </div>
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Ingreso</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formatDateToLocal(empleado.fechaIngreso)}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Género</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{empleado.genero}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formatDateToLocal(empleado.fechaNacimiento)}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Remuneración Base</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formatCurrencyGs(parseFloat(empleado['Remuneraciones'][0].importe))}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Horas Cátedras Mensual</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {empleado.HorasCatedrasMensuals && empleado.HorasCatedrasMensuals.length > 0 ? (
              empleado.HorasCatedrasMensuals.map((hora, index) => (
                <div key={index}>
                  <p> <strong>Importe por hora: </strong> {formatCurrencyGs(parseFloat(hora.importe_porhora))}</p>
                  <p><strong>Total horas mensual: </strong> {hora.total_horasmensual}</p>
                  <p><strong>Descripción: </strong> {hora.descripcion}</p>
                  <p><strong>Total a cobrar: </strong> {formatCurrencyGs(parseFloat(hora.total))}</p>
                </div>
              ))
            ) : (
              'Sin Horas Cátedras Mensuales Asignadas'
            )}
          </dd>
        </div>

          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Seguro Médico</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {empleado.SeguroMedicoEmpleados && empleado.SeguroMedicoEmpleados.length > 0 ? (
              <>
                {formatCurrencyGs(parseFloat(empleado.SeguroMedicoEmpleados[0]?.importe_mensual))} - 
                {empleado.SeguroMedicoEmpleados[0]?.SeguroMedico?.seguromedico_nombre || 'Sin Seguro Médico Asignado'}
              </>
            ) : (
              'Sin Seguro Médico Asignado'
            )}
          </dd>
         </div>
         {
          empleado.fechaDesvinculado && (
         <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Desvinculación</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formatDateToLocal(empleado.fechaDesvinculado)}</dd>
          </div>

          )
         }

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Descripción</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
             {empleado.descripcion}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Documentos</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resumen_cv.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">0.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Descargar
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">cedula_de_identidad.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">0.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Descargar
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    
  );
};

export default EmpleadoDetails;
