import { PencilIcon, PlusIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteEmpleado } from '@/app/lib/actionsEmpleados';
import { UUID } from 'crypto';
export function CreateEmpleado() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Registrar Empleado</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function EmpleadoDetails({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/empleados/${id}/details`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}
export function UpdateEmpleado({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteEmpleado({ id }: { id: string }) {
  const deleteEmpleadoWithId = deleteEmpleado.bind(null, id);

  return (
    <>
     <form action={deleteEmpleadoWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Eliminar</span>
        <TrashIcon className="w-5" />
      </button>
      </form>
    </>
  );
}

 