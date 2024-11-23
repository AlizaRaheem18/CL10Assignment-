import React from 'react'
import Image from 'next/image'

const Product = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-20">
            <div className="md:w-10/12  w-full border border-white bg-white mb-20 ">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-01.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12  w-full border border-white bg-white mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-02.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12  w-full border border-white bg-white mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-03.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md ">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12  w-full border border-white bg-white mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-04.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-10/12  w-full border border-white bg-white mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-05.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12  w-full border border-white bg-white mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-06.webp"
                        alt="Makeup products"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 852</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Product








