// // posts will be populated at build time by getStaticProps()
 

// export default function Blog ({ token }:{token:string}) {
//     return (
//       <ul>
//         {/* {token.map((token:string) => (
//           <li>{token.title}</li>
//         ))} */}
//         {'token:' + token}
//       </ul>
//     )
//   }
   
//   // This function gets called at build time on server-side.
//   // It won't be called on client-side, so you can even do
//   // direct database queries.
//   export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const response = await fetch(`http://localhost:3500/hr/login?email=edsonnaza@gmail.com&password=Login1234`);
//         if (response.ok) {
//           const data = await response.json();
//           const token = data.token;
//           localStorage.setItem('token', token);
//           console.log('Token obtenido correctamente:', token);
//           return {
//             props: {
//               token,
//             },
//           }
//          // return token;
//         } else {
//           console.error('Inicio de sesión fallido para obtener el token:', response.statusText);
//           return null; // Devolver null en caso de falla
//         }
//     // const posts = await res.json()
   
//     // // By returning { props: { posts } }, the Blog component
//     // // will receive `posts` as a prop at build time
//     // return {
//     //   props: {
//     //     posts,
//     //   },
//    // }
//   }
import { handleToken } from "@/app/lib/getToken";
async function getToken() {
  const res = await fetch(`http://localhost:3500/hr/login?email=token@gmail.com&password=Token1234`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  const data = await res.json();
  const token = data.token;
  return token
}

async function getEmpleados() {
  const token = await handleToken();
  // const response= await fetch(`http://localhost:3500/hr/empleados`,{
  //     method: 'GET',
  //     headers: {
  //      // 'Content-Type': 'application/json',
  //     // 'Authorization': `Bearer ${token}`
  //     }
  //   });
  //   if(!response.ok){
  //     throw new Error('no fue posible obtner los datos de empleados')
  //   }
    //const data = response.json()
   // const empleados =data;
    return token;
 

  }
 
export default async function Page() {
  const token = await getToken()
  //const empleados = await getEmpleados(token);
 
  return <main>Empleados: 
       {/* { 
          data.empleados?.map((val:any)=>(
            <div key={val.empleados_id}>{val.nombres}</div>
          ))
       } */}
         
     
  <br />token:  {token}
 
  </main>
}