import React, { useEffect } from 'react';
import Link from 'next/link';

const GridComponent = ({ items }) => {
  const [numRows, setNumRows] = React.useState(12); // Initial value, adjust as needed
  const [numCols, setNumCols] = React.useState(4); // Initial value, adjust as needed

  useEffect(() => {
    handleResize(); // Initial resize on component mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const container = document.getElementById('gridContainer');
    if (container) {
      const containerHeight = container.clientHeight;
      const containerWidth = container.clientWidth;
      const numRows = Math.floor(containerHeight / 40);
      let numCols = Math.floor(containerWidth / 200);

      if (numCols < 1) {
        numCols = 1; // Ensure at least one column
      } else if (numCols > 4) {
        numCols = 4; // Limit maximum columns to 4
      }

      setNumCols(numCols);
      setNumRows(numRows);
    }
  };

  const columns = Array.from({ length: numCols }, () => []);

  let currentRow = 0;
  let currentColumn = 0;
  items?.forEach((item) => {
    columns[currentColumn].push(item);
    currentRow++;
    if (currentRow >= numRows) {
      currentRow = 0;
      currentColumn = (currentColumn + 1) % numCols;
    }
  });

  return (
    <div className="flex border items-start px-4 py-2" id="gridContainer">
      <div
        className={`grid grid-cols-${numCols} gap-4 w-full h-full min-h-[calc(100vh-11.5rem)] lg:min-h-[calc(100vh-8rem)]`}>
        {columns?.map((column, index) => (
          <div key={index} className="flex gap-2 flex-col">
            {column?.map((item, itemIndex) => (
              <Link href={`/user/companies/${item.id}`} key={itemIndex}>
                <div
                  key={itemIndex}
                  className="p-1 text-link truncate text-ellipsis">
                  {item.companyName}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
