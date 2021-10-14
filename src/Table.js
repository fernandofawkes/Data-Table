import axios from "axios";
import { useEffect, useState } from "react";

function Table() {
  const [posts, setPosts] = useState([]);

  const fetchUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl);
      setPosts(data.data);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
    
    <div className="d-flex flex-row">
      <button type="button" className="me-3 btn btn-primary ml-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#addModalForm">
        Add Data +
      </button>
    </div>
    
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
        {posts.map(post =>
          <tr key={post.id}>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>Edit</td>
        </tr>
      )}
        
      </tbody>
    </table>
    {/*Add Modal */}
      <div className="modal fade" id="addModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userId"
                    required
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Body</label>
                  <textarea
                    rows="4"
                    cols="50"
                    className="form-control"
                    name="body"
                    placeholder="body"
                    required
                  ></textarea>
                </div>
                <div className="modal-footer d-block">
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-warning float-end">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Table;
