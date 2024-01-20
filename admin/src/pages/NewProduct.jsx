import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const [cat, setCat] = useState([]);
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="flex-[4]">
      <h1 className="addProductTitle">New Product</h1>
      <form className="mt-2.5">
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Image</label>
          <input
            name="image"
            className="p-2.5"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Title</label>
          <input
            name="title"
            className="p-2.5 border-b-2 border-gray-500"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Description</label>
          <input
            name="desc"
            className="p-2.5 border-b-2 border-gray-500"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Price</label>
          <input
            name="price"
            className="p-2.5  border-b-2 border-gray-500"
            type="number"
            placeholder="100$"
            onChange={handleChange}
          />
        </div>

        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Categories</label>
          <input
            name="cat"
            className="p-2.5  border-b-2 border-gray-500"
            type="text"
            placeholder="Jeans,Jaket"
            onChange={handleCat}
          />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-[gray] font-[600] mb-2.5">Stock</label>
          <select name="inStock" className="p-2.5" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button
          onClick={handleClick}
          className="mt-2.5 py-[7px] px-[10px] border-none rounded-[10px] bg-[#00008b] text-white font-[600] cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
}
