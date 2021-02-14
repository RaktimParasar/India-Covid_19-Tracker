const Table = ({ tableData }) => {
  // const data = tableData && tableData.slice(1).map((el) => el);
  // console.log(data);
  return (
    <div>
      {tableData &&
        tableData.slice(1).map((el) => <p key={el.statecode}>{el.state}</p>)}
    </div>
  );
};

export default Table;
