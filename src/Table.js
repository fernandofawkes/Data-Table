import axios from "axios";
import { useEffect, useState } from "react";
import nextId from 'react-id-generator';

function Table() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPostFields] = useState({
    userId: 10,
    title: '',
    body : ''
  });
  
  const [editPost, setEditPostFields] = useState({
    userId: 0,
    id: 0,
    title: '',
    body : ''
  });

  const handleFormInput = (field) => (evt) => {
    evt.preventDefault();
    setNewPostFields({...newPost, [field]: evt.target.value});
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const post = {id: nextId(), ...newPost};
    
    setPosts([...posts, post]);
    setNewPostFields({
      userId: 10,
      title: '',
      body : ''
    })
  }

  const handleEditInput = (field) => (evt) => {
    evt.preventDefault();
    setEditPostFields({...editPost, [field]: evt.target.value});
  }

  const handleEditSubmit = (evt) => {
    evt.preventDefault();

    const newPosts = [...posts];
    const formIndex = posts.findIndex((post) => post.id === editPost.id);
    newPosts[formIndex] = editPost;
    setPosts(newPosts);
  }
  
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
          <td>
            <button type="button" className="me-3 btn btn-primary ml-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#editModalForm"
              onClick={(e) => setEditPostFields(post)}
            >
              Edit
            </button>
          </td>
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
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userId"
                    placeholder={newPost.userId}
                    required
                    disabled
                    onChange={handleFormInput('userId')}
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
                    onChange={handleFormInput('title')}
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
                    onChange={handleFormInput('body')}
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
    {/* Edit Modal */}
      <div className="modal fade" id="editModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label className="form-label">User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userId"
                    required
                    value={editPost.userId}
                    disabled
                    onChange={handleEditInput('userId')}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="title"
                    value={editPost.title}
                    required
                    onChange={handleEditInput('title')}
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
                    value={editPost.body}
                    onChange={handleEditInput('body')}
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
