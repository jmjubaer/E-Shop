"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

const ProductsSection = () => {
    const { data } = useGetAllProductsQuery();
    console.log(data);
    return <div className='container'>This is product section</div>;
};

export default ProductsSection;
