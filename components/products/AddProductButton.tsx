'use client'
import { useStore } from "@/src/store";

import { Product } from "@prisma/client";

type AddProductButtonProps = {
    product: Product;
}

export default function AddProductButton({product} : AddProductButtonProps) {
    const addToOrder = useStore(state => state.addToOrder);
  return (
    <button
    type="button"
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full mt-5 uppercase cursor-pointer"
    onClick={()=> addToOrder(product)}
    >
        Agregar
    </button>
  )
}
