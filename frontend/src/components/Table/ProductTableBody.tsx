import React from "react";
import { ProductType } from "../../types/types";

interface ProductTableBodyProps {
  data: ProductType[];
}

const ProductTableBody: React.FC<ProductTableBodyProps> = ({ data }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <tbody className="bg-neutral-800 py-5">
      {data.map(
        ({ _id, id, title, description, price, category, sold, image }) => (
          <tr
            key={_id}
            className="grid grid-cols-[1fr,2fr,3fr,1fr,1fr,1fr,1fr] md:grid-cols-[0.5fr,1.5fr,3fr,0.5fr,0.5fr,0.5fr,1fr] hover:bg-neutral-700  border-b border-b-slate-600"
          >
            <td className="py-5 text-center capitalize border-l border-l-slate-600">
              {id}
            </td>
            <td className="pl-2 py-5 capitalize border-l border-l-slate-600 text-start">
              {title}
            </td>
            <td className=" px-4 py-5  capitalize border-l border-l-slate-600 text-start">
              {description}
            </td>
            <td className=" text-center py-5 capitalize border-l border-l-slate-600">
              ${price.toFixed(2)}
            </td>
            <td className=" text-center py-5 capitalize border-l border-l-slate-600">
              {category}
            </td>
            <td className=" text-center py-5 capitalize border-l border-l-slate-600">
              {sold ? "Yes" : "No"}
            </td>
            <td className="min-w-[150px] py-5 flex justify-center items-center border-x border-x-slate-600">
              <img
                src={image}
                alt={title}
                className="w-[100px] h-[100px] rounded-md"
              />
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default ProductTableBody;
