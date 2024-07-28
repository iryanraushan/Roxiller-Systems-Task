const ProductTableHead: React.FC = () => {
  const tableHeaders = [
    { id: 1, label: "#", className: "" },
    { id: 2, label: "Title", className: "" },
    { id: 3, label: "Description", className: "" },
    { id: 4, label: "Price", className: "" },
    { id: 5, label: "Category", className: "" },
    { id: 6, label: "Sold", className: "" },
    { id: 7, label: "Image", className: "border-r" },
  ];

  return (
    <thead className="sticky top-0 bg-neutral-800 rounded-md">
      <tr className="grid grid-cols-[1fr,2fr,3fr,1fr,1fr,1fr,1fr] md:grid-cols-[0.5fr,1.5fr,3fr,0.5fr,0.5fr,0.5fr,1fr] hover:bg-neutral-900  border-b border-b-slate-600">
        {tableHeaders.map(({ id, label, className }) => (
          <th
            key={id}
            className={`h-full rounded-md  py-4 text-sm text-center border-t border-l  border-slate-600 md:text-base ${className}`}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ProductTableHead;
