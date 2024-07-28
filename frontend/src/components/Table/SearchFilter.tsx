import React from "react";
import { useMonth } from "../../contexts/MonthContext";

const SearchFilter: React.FC = () => {
  const { selectedMonth, setMonth, months } = useMonth();

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <select
        className="p-2 -mr-4  px-10 bg-neutral-700  border rounded-md duration-300 hover:bg-neutral-800"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {months.map(({ id, label, value }) => (
          <option
            key={id}
            value={value}
            className="text-neutral-300 bg-neutral-700 rounded-md "
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
