 
  
export default function  Category({categories}) {
 
    return (
      <>  
      <select
      id="customer"
      name="customerId"
      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      defaultValue=""
      aria-describedby="customer-error"
      >
          <option value="" disabled>
            Seleccionar una categoría
          </option>
          {categories.map((category) => (
            <option key={category.catfun_id} value={category.catfun_id}>
              {category.catfun_nombre}
            </option>
          ))}
        </select>
        
   
    </>
  )
  
}
