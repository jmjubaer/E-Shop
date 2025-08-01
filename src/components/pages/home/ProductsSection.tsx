"use client";
import ProductCard from "@/components/shere/UI/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Spin } from "antd";
import { LiaFilterSolid } from "react-icons/lia";

const ProductsSection = () => {
    const { data: products, isLoading } = useGetAllProductsQuery(undefined);
    return (
        <div className='my-10 container'>
            <div className='flex items-center justify-between sm:flex-row flex-col gap-5'>
                <div className='flex items-center gap-2 font-medium'>
                    <LiaFilterSolid className=' text-xl' /> <p>Filter & Sort</p>
                </div>
                <div className='sm:flex items-center gap-5'>
                    <select
                        // onChange={handleFilter}
                        className='outline-0 w-full p-2 pl-4 pr-6 bg-white border border-gray-200 rounded-md shadow'>
                        <option value=''>All categories</option>
                        {/* {category?.map((category) => (
                            <option
                                key={category.category}
                                value={category.category}>
                                {category.category} ({category.count})
                            </option>
                        ))} */}
                    </select>
                    {/* Sort option */}
                    <select
                        // onChange={handleSort}
                        name=''
                        id=''
                        className='outline-0 w-full p-2 pl-4 pr-6 bg-white border border-gray-200 rounded-md shadow mt-5 sm:mt-0'>
                        <option value='a-z'>Name A-Z</option>
                        <option value='z-a'>Name Z-A</option>
                        <option value='low-to-high'>Price Low to High</option>
                        <option value='high-to-low'>Price High to Low</option>
                    </select>
                </div>
            </div>
            <Spin spinning={isLoading} tip='Loading' size='large'>
                {products?.length > 0 ? (
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
                        {products?.map((product: TProduct) => (
                            <ProductCard key={product?.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-28'>
                        <p className='text-gray-400 text-xl'>
                            No products found matching your criteria.
                        </p>
                        <button
                            // onClick={handleClearFilter}
                            className='px-5 py-2 border mt-5 bg-white border-gray-300 rounded-md cursor-pointer'>
                            Clear Filter
                        </button>
                    </div>
                )}
            </Spin>
        </div>
    );
};

export default ProductsSection;
