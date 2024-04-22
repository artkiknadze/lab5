import moment from "moment";

export const DateColumn = () => (
  <td>
    <th>Date</th>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      return <tr key={'date' + i}>{moment().subtract(i, "days").format("DD.MM.YYYY")}</tr>;
    })}
  </td>
);
