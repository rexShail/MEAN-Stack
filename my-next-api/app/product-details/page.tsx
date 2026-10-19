import ProductList from "../ProductList";
import { products } from "../product-data";

export default function ProductDetailPage() {
    return (
        <>
            <h1>Product Details Page</h1>
            <ProductList products={products} />
        </>
    );

} 