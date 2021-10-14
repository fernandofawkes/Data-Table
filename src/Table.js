
function Table() {
  return (
    <table className="table table-responsive border-primary table-bordered">
      <thead>
        <tr>
          <th scope="col">User Id</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>First Post</td>
          <td>This is just an example and will be overwritten later</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
