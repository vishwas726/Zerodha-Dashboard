import React, { useEffect, useState } from "react";
// import { positions } from "../data/data";
import axios from "axios";

const Positions = () => {

  const [positions, setPositions] = useState([]);

  useEffect(() => {
     axios
      .get("/positions")
      .then((result) => {
        console.log(result.data);
        setPositions(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>

                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price}</td>
                <td>{currVal}</td>

                <td className="profitClass">{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
