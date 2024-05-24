'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const EmpleadoSchema = z.object({
  empleado_id: z.string().uuid().optional(),
  nombres: z.string().nonempty({ message: 'El nombre es requerido.' }),
  apellidos: z.string().nonempty({ message: 'El apellido es requerido.' }),
  descripcion: z.string().optional(),
  email: z.string().email({ message: 'El email no es válido.' }),
  phone: z.string().optional(),
  imagen_principal: z.string().optional(),
  fechaIngreso: z.string({ required_error: 'La fecha de ingreso es requerida.' }),
  fechaNacimiento: z.string({ required_error: 'La fecha de nacimiento es requerida.' }),
  genero: z.enum(['Hombre', 'Mujer'], { message: 'Seleccione un género válido.' }),
  activo: z.boolean(),
  fechaDesvinculado: z.string().optional(),
});

const CreateEmpleadoSchema = EmpleadoSchema.omit({ empleado_id: true });

export type State = {
  errors?: {
    nombres?: string[];
    apellidos?: string[];
    email?: string[];
    fechaIngreso?: string[];
    fechaNacimiento?: string[];
    genero?: string[];
    activo?: string[];
  };
  message?: string | null;
};

export async function createEmpleado(prevState: State, formData: FormData) {
  // Convertir las fechas a strings
  const fechaIngreso = formData.get('fechaIngreso') as string;
  const fechaNacimiento = formData.get('fechaNacimiento') as string;
  const fechaDesvinculado = formData.get('fechaDesvinculado') as string | undefined;

  // Validar los campos usando Zod
  const validatedFields = CreateEmpleadoSchema.safeParse({
    nombres: formData.get('nombres'),
    apellidos: formData.get('apellidos'),
    descripcion: formData.get('descripcion'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    imagen_principal: formData.get('imagen_principal'),
    fechaIngreso,
    fechaNacimiento,
    genero: formData.get('genero'),
    activo: formData.get('activo') === 'true', // Convertir el valor de string a booleano
    fechaDesvinculado,
  });

  // Si la validación falla, devolver errores
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan campos. Fallo al crear empleado.',
    };
  }

  const { nombres, apellidos, descripcion, email, phone, imagen_principal, genero, activo } = validatedFields.data;

  try {
    await sql`
      INSERT INTO empleados (nombres, apellidos, descripcion, email, phone, imagen_principal, fecha_ingreso, fecha_nacimiento, genero, activo, fecha_desvinculado)
      VALUES (${nombres}, ${apellidos}, ${descripcion}, ${email}, ${phone}, ${imagen_principal}, ${fechaIngreso}, ${fechaNacimiento}, ${genero}, ${activo}, ${fechaDesvinculado})
    `;
  } catch (error) {
    return {
      message: 'Error de base de datos: Fallo al crear empleado.',
    };
  }

  revalidatePath('/dashboard/empleados');
  redirect('/dashboard/empleados');
}

const UpdateEmpleadoSchema = EmpleadoSchema.omit({ empleado_id: true });

export async function updateEmpleado(id: string, prevState: State, formData: FormData) {
  // Convertir las fechas a strings
  const fechaIngreso = formData.get('fechaIngreso') as string;
  const fechaNacimiento = formData.get('fechaNacimiento') as string;
  const fechaDesvinculado = formData.get('fechaDesvinculado') as string | undefined;

  const validatedFields = UpdateEmpleadoSchema.safeParse({
    nombres: formData.get('nombres'),
    apellidos: formData.get('apellidos'),
    descripcion: formData.get('descripcion'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    imagen_principal: formData.get('imagen_principal'),
    fechaIngreso,
    fechaNacimiento,
    genero: formData.get('genero'),
    activo: formData.get('activo') === 'true', // Convertir el valor de string a booleano
    fechaDesvinculado,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan campos. Fallo al actualizar empleado.',
    };
  }

  const { nombres, apellidos, descripcion, email, phone, imagen_principal, genero, activo } = validatedFields.data;

  try {
    await sql`
      UPDATE empleados
      SET nombres = ${nombres}, apellidos = ${apellidos}, descripcion = ${descripcion}, email = ${email}, phone = ${phone}, imagen_principal = ${imagen_principal}, fecha_ingreso = ${fechaIngreso}, fecha_nacimiento = ${fechaNacimiento}, genero = ${genero}, activo = ${activo}, fecha_desvinculado = ${fechaDesvinculado}
      WHERE empleado_id = ${id}
    `;
  } catch (error) {
    return { message: 'Error de base de datos: Fallo al actualizar empleado.' };
  }

  revalidatePath('/dashboard/empleados');
  redirect('/dashboard/empleados');
}

export async function deleteEmpleado(id: string) {
  try {
    await sql`DELETE FROM empleados WHERE empleado_id = ${id}`;
    revalidatePath('/dashboard/empleados');
    return { message: 'Empleado eliminado exitosamente.' };
  } catch (error) {
    return { message: 'Error de base de datos: Error al eliminar el empleado.' };
  }
}
