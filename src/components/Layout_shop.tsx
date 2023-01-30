
import ProductTemplate from './ProductTemplate';
const {  productListContainer } = require('../../styles/Shop.module.css');


export const LayoutShop = () => {

    return (
        <>
            <div className={productListContainer}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <ProductTemplate key={index} />
                ))}
            </div>
        </>
    )
}


export default LayoutShop;