'use client';

import { useFormState } from 'react-dom';
import { EmpleadoFields } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  UserIcon,
  TagIcon,
  
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import CategorySelect from '@/app/ui/category/Category'
interface Category {
  catfun_id: string;
  catfun_nombre: string;
}

interface CreateFormEmpleadoProps {
  categories: Category[];
}

export default function CreateFormEmpleado({ categories }: CreateFormEmpleadoProps) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
      
         <div className="mb-4">
          <label htmlFor="nombres" className="mb-2 block text-sm font-medium">
            Nombres
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nombres"
                name="nombres"
                type="text"
               
                placeholder="Nombres del empleado"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Apellidos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="apellidos"
                name="apellidos"
                type="text"
               
                placeholder="Apellidos del empleado"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
      <label htmlFor="customer" className="mb-2 block text-sm font-medium">
        Elegir una categoría
      </label>
      <div className="relative">
        <CategorySelect categories={categories} />
        <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customerId &&
          state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
    <div className="mb-4">
          <label htmlFor="nombres" className="mb-2 block text-sm font-medium">
            Fecha de nacimiento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                
                
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
                />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="nombres" className="mb-2 block text-sm font-medium">
            Fecha de ingreso
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fechaIngreso"
                name="fechaIngreso"
                type="date"
                
                
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
                />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Empleado Salario base */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Salario Base
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="remuneracion"
                name="remuneracion"
                type="number"
                step="0.01"
                placeholder="Ingrese el monto del salario base en GS."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Empleado Gender */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Género del empleado
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="genero"
                  name="genero"
                  type="radio"
                  value="hombre"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="customer-error"
                />
                <label
                  htmlFor="genero"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Hombre <UserCircleIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="genero"
                  name="genero"
                  type="radio"
                  value="mujer"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="mujer"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Mujer <UserCircleIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          
        </fieldset>
       
   

       
    
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
          Cancelar
        </Link>
        <Button type="submit">Registrar Factura</Button>
      </div>
    </form>
  );
}
