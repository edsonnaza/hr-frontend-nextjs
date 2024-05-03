import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Empleadoactivo({ activo }: { activo: boolean }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': activo === false,
          'bg-green-500 text-white': activo === true,
        },
      )}
    >
      {activo === false ? (
        <>
          Inactivo
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {activo === true ? (
        <>
          Activo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
