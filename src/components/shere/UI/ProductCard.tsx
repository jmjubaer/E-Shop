import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { TProduct } from "@/types";
import Link from "next/link";
type TProps = {
    product: TProduct;
};
const ProductCard = ({ product }: TProps) => {
    return (
        <div
            key={product.id}
            className='rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 relative'>
            <img
                src={product.image}
                alt='Product image ...'
                className='w-full h-48 object-cover'
            />
            <div className='absolute top-3 left-3 bg-white border border-black/20 text-black text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1 shadow capitalize'>
                {product.category}
            </div>
            <div className='p-4 flex flex-col justify-between h-[calc(100%-192px)]'>
                <h2 className=' font-medium line-clamp-1'>{product.title}</h2>
                <div className='flex my-1 gap-1'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        readOnly
                        orientation='horizontal'
                        value={product.rating.rate}
                    />
                    <p>{product.rating.rate}</p>
                    <p>({product.rating.count})</p>
                </div>

                <h3 className='text-2xl font-black my-3'>${product.price}</h3>
                {/* <AddToCartButton product={product} /> */}
                <Link
                    style={{ backgroundColor: "#7c3bed", color: "#fff" }}
                    href={`/product/${product?.id}`}
                    className='px-5 py-2 inline-block text-center font-medium rounded-md'>
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
