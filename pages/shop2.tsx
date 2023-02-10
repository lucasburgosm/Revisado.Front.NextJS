import { GetServerSideProps } from 'next'
import { useEffect } from 'react';
import Product from '../src/components/Product';
import { Products } from '../Interface/interface';
import { Button } from 'react-bootstrap';
const { shopTitle, productListContainer } = require('../styles/Shop.module.css');



export default function Shop2({ data }: { data: Props }): JSX.Element {

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = process.env.API_URL;
            const res = await fetch(`${apiUrl}/api/products/all`, {
                method: 'GET',
                credentials: "include",
            });

            const data: Props = await res.json()

            return {
                props: {
                    data
                }
            }

        }
        fetchData
    }, [])


    if (!data) { return <p>No se pudo conectar con el servidor, intente mas tarde</p> }

    const { products } = data;
    const productsList: JSX.Element[] = products.map((product): JSX.Element => {
        return (
            <Product key={product._id} props={product}>
                <Button variant="outline-secondary" >Comprar</Button>
            </Product>
        )
    })

    return (
        <>
            <div className={shopTitle} >
                Productos disponibles
            </div>

            <div className={productListContainer}>
                {productsList}
            </div>
        </>
    )
}




type Props =
    {
        products: Products[],
    }



