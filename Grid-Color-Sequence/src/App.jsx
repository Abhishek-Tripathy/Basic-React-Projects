import { useState } from "react";
import Cell from "./Cell";

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        className="grid max-w-[300px] w-full p-5 gap-5 border border-black"
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
            />
          ) : (
            <span key={index}></span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
