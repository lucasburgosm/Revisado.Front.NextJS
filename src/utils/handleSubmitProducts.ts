import { Products } from "../../Interface/interface";


const handleSubmitProducts = async (event : any, url : string, method : string) => {
    event.preventDefault();
    try {
      const jsonData =  {
        brand: event?.target?.brand?.value,
        price: event?.target?.price?.value,
        modelName: event?.target?.modelName?.value,
        nameToDisplay: event?.target?.nameToDisplay?.value,
        details: event?.target?.detail?.value,
        modelNumber: event?.target?.modelNumber?.value,
        url:url
      }
      const options = (jsonData : Products, method : string) : any => { 
        return { 
          method: method,
          credentials: 'include',
          headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(jsonData),
        }
      }
      const response = await fetch('api/post_fetchProducts', options(jsonData, method))
      const result = await response.json() 
        if( response.status >= 400 && response.status < 600) { 
          throw new Error(result.msg)}
      window.location.replace("/vender")
    } catch(error) { 
      alert(`${error}`)
    } 
  } ;


  export default handleSubmitProducts ;