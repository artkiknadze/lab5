import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

interface CurrencyColumnProps {
  valcode: string;
}

export const CurrencyColumn: React.FC<CurrencyColumnProps> = (
  props: CurrencyColumnProps
) => {
  const [exchangeRates, setExchangeRates] = useState<any[]>([]);

  useEffect(() => {
    async function requestToBank() {
      const data: any[] = [];
      for await (const i of [0, 1, 2, 3, 4, 5, 6]) {
        const date = moment().subtract(i, "days").format("YYYYMMDD");
        const result = await axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${props.valcode}&date=${date}&json`
        );
        data.push(result.data[0]);
      }
      return data;
    }

    requestToBank().then((res: any) => {
      setExchangeRates(res);
    });
  }, []);

  return (
    <td>
      <th>{props.valcode}</th>
      {exchangeRates.map((e, index) => {
        return <tr key={props.valcode + index}>{e.rate}</tr>;
      })}
    </td>
  );
};
