import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";


const AddUser = () => {
  const [formDate, setFormData] = useState({});
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formDate, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    setLoading(true);
    const res = await fetch("/api/admin/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDate),
      });
  
      const data = await res.json();
      setLoading(false)
      setError(false);
      if(data.success===false){
        setError(true);
        return
      }
      navigate('/admin-dashboard')
     
  } catch (error) {
    setLoading(false)
    setError(true)
  }
  };

  return (
    <>

    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Add user</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ?'Loading...':'Add-user'}
        </button>
  
      </form>
      <div className="flex gap-2 mt-5">
       
      </div>
      <p className="text-red-700 mt-5">{error && 'Something went wrong'}</p>
    </div>
    </>
  );
};

export default  AddUser;
