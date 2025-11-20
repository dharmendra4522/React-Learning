import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CrudApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [isSaving, setIsSaving] = useState(false);

  const API = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setPosts(res.data.slice(0, 10));
      } catch (error) {
        toast.error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // post
  const handleAdd = async () => {
    if (title.trim() === "" || body.trim() === "") {
      toast.error("Please fill all fields");
      return;
    }

    const newPost = {
      title,
      body,
    };
    try {
      const res = await axios.post(API, newPost);
      setPosts([res.data, ...posts]);
      toast.success("Post added!");
      setTitle("");
      setBody("");
    } catch (error) {
      toast.error("Error Adding post ");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      // remove from UI
      setPosts(posts.filter((p) => p.id !== id));
      toast.success("Post Deleted");
    } catch (error) {
      toast.error("Error deleting post");
    }
  };

  // START EDIT: populate inputs and set editingId
  const startEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setBody(post.body);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // /Cancle Edit
  const cancleEdit = () => {
    setEditingId(null);
    setTitle("");
    setBody("");
  };

  // save update (PUT)
  const handleUpdate = async () => {
    if (title.trim() === "" || body.trim() === "") {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const updated = { id: editingId, title, body };
      const res = await axios.put(`${API}/${editingId}`, updated);

      // refelect in UI
      setPosts(posts.map((p) => (p.id === editingId ? res.data : p)));
      toast.success("Post Updated");

      // cleanup
      setEditingId(null);
      setTitle("");
      setBody("");
    } catch (error) {
      toast.error("Error updating post");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return <h2 className="text-center mt-10">Loading........</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">CRUD App</h1>
      <div className="bg-grey-700 p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-black rounded-xl p-3 mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          className="w-full border border-black rounded-xl p-3 mb-2 h-20"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {editingId ? (
          <div>
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 disabled:bg-gray-500"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
            &nbsp; &nbsp;
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800"
              onClick={cancleEdit}
            >
              Cancle
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800"
            onClick={handleAdd}
          >
            Add Post
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-grey-700">{post.body}</p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => startEdit(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudApp;
