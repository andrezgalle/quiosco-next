"use client"

import { ProductSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function AddProductForm({ children }: { children: React.ReactNode }) {

  const handleSumit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
    }
    
    const result = ProductSchema.safeParse(data)

    if (!result.success) {
      return result.error.errors.map(error => toast.error(error.message))
    }
  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <form
            className="space-y-5"
            action={handleSumit}
        >
            {children}
        <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            value={"Agregar Producto"}
        />
        </form>
    </div>
  )
}
