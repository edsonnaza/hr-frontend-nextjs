//const URL_LOGIN = process.env.NEXT_PUBLIC_LOCAL_URL;
const URL_LOGIN = process.env.NEXT_PUBLIC_DEPLOY_URL;



export async function handleToken() {
    try {
      // Verificar si hay un token válido en el localStorage
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        // Devolver el token almacenado si existe
        console.log('Token recuperado del localStorage:', storedToken);
        return storedToken;
      } else {
        // Si no hay un token almacenado, realizar el inicio de sesión para obtener uno nuevo
        console.log('No se encontró un token en el localStorage. Iniciando sesión...');
        //const response = await fetch(`http://localhost:3500/hr/login?email=token@gmail.com&password=Token1234`);
        const response = await fetch(`${URL_LOGIN}/login?email=token@gmail.com&password=Token1234`)
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token);
          console.log('Token obtenido correctamente:', token);
          return token;
        } else {
          console.error('Inicio de sesión fallido para obtener el token:', response.statusText);
          return null; // Devolver null en caso de falla
        }
      }
    } catch (error) {
      console.error('Error al iniciar sesión para obtener el token:', error);
      return null; // Devolver null en caso de error
    }
  }
  