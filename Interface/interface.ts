export interface Users { 
    id: number  
    name: string
    lastName?: string
    email : string
    phone?: number } 


export interface Products  {
    _id?: string,
    idProduct?: number,
    brand?: string,
    modelName?:string,
    modelNumber?:string,
    caracts?:string,
    nameToDisplay?:string,
    price?: number,
    color?:string,
    details?:string,
    publishBy?:string,
    createdAt?:string,
    updatedAt?:string,
    __v?: number,
}
    
export interface UserLoggin { 
    id?: number | null  
    token : string | null   
    name: string  | null 
    lastName?: string
    email? : string
    phone?: number 

} 