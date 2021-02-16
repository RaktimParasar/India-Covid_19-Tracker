const Table = ({ tableData, handleMouseEnter }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>state/ut</th>
            <th>confirmed</th>
            <th>active</th>
            <th>recovered</th>
            <th>deceased</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.slice(1).map((item) => (
              <tr
                onMouseEnter={() => handleMouseEnter(item.state)}
                onMouseLeave={() => handleMouseEnter()}
                key={item.statecode}
              >
                <td>{item.state}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
