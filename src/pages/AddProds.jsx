import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
const supabase = createClient(
  "https://cfwtenenwqvbhblumcpk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0"
);

function AddProds() {
  const [fimg, setFimg] = useState({});
  async function getImage(e) {
    const file = e.target.files[0];
    setFimg(file);
    console.log(fimg);
    console.log(fimg.name);
    if (fimg.name==undefined) {
      document.getElementById('imageIndicator').innerHTML="Rasm Topilmadi! Qayta Urinib Koring !"
    }else{
      document.getElementById('imageIndicator').innerHTML=""

    }
  }

  async function AddProduct(e) {
    e.preventDefault();

    // pc
    var pc_name = document.getElementById("pcName").value;
    var pc_typee = document.getElementById("pcType").value;

    console.log(pc_name);
    console.log(pc_typee);
    // cpu
    var cpu_namee = document.getElementById("cpuName").value;
    var cpu_coree = document.getElementById("cpuCore").value;

    console.log(cpu_namee);
    console.log(cpu_coree);
    // gpu
    var gpu_namee = document.getElementById("gpuName").value;
    var gpu_sizee = document.getElementById("gpuSize").value;

    console.log(gpu_namee);
    console.log(gpu_sizee);
    // display
    var displayy = document.getElementById("displaySize").value;
    var display_frr = document.getElementById("displayFr").value;

    console.log(displayy);
    console.log(display_frr);
    //storage
    var storagee_type = document.getElementById("storageType").value;
    var storagee_size = document.getElementById("storageSize").value;

    console.log(storagee_type);
    console.log(storagee_size);

    var pcPrice = document.getElementById("pcPrice").value;
    console.log(pcPrice);
    
    const { error } = await supabase
    .from("computers")
    .insert({
      name: pc_name,
      pc_type: pc_typee,
      cpu_name: cpu_namee,
      cpu_core: cpu_coree,
      gpu_name:gpu_namee,
      gpu_size:gpu_sizee,
      display_size: displayy,
      display_fr:display_frr,
      storage_size:storagee_size,
      storage_type:storagee_type,
      image:fimg.name,
      price:pcPrice
    });

  const { data } = await supabase.storage
    .from("computers")
    .upload(pc_typee + "/" + fimg.name, fimg, {
      cacheControl: "3600",
      upsert: false,
    });


    
  }

  return (
    <div className="bg-no-repeat bg-fixed bg-center	bg-cover	 bg-[url('https://itengineering.com.au/wp-content/uploads/2021/12/ite-comp-repair.jpg')]">
        
      <Link to={'/addpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasaddpcaddpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdd'}>
        <button
            type="submit"
            className="text-white w-72 lg:ml-72 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ortga Qaytish
        </button>
        </Link>
      <h1 className="text-center w-full text-4xl  text-white pt-12 pb-16">
        Yangi Kompyuter Qo'shish
      </h1>
      <div className="  lg:pl-72 lg:w-9/12 pt-10 pb-10">
        <form
          onSubmit={(event) => {
            AddProduct(event);
          }}
        >
          {/* pc name */}
          <div className="mb-6">
            <label
              htmlFor="pcName"
              className="block mb-2 text-sm font-medium text-gray-100  dark:text-white"
            >
              Nomi
            </label>
            <input
              type="text"
              id="pcName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Macbook Air"
              required
            />
          </div>
          {/* pc type */}
          <div className="mb-6">
            <label
              htmlFor="pcType"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Kompyuter Brand
            </label>
            <select
              id="pcType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Select Computer Type
              </option>
              <option>acer</option>
              <option>samsung</option>
              <option>apple</option>
              <option>asus</option>
              <option>dell</option>
              <option>hp</option>
              <option>lenovo</option>
              <option>huawei</option>
              <option>msi</option>
              <option>other</option>
            </select>
          </div>
          {/* Cpu */}
          <div className="mb-6">
            <label
              htmlFor="cpuName"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Protsessor Nomi
            </label>
            <input
              type="text"
              id="cpuName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          {/* CPU Core */}
          <div className="mb-6">
            <label
              htmlFor="cpuCore"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Protsessorlar Soni
            </label>
            <select
              id="cpuCore"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                CPU Core
              </option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>12</option>
              <option>16</option>
              <option>32</option>
            </select>
          </div>

          {/* GPU */}
          <div className="mb-6">
            <label
              htmlFor="gpuName"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Videokarta{" "}
            </label>
            <input
              type="text"
              id="gpuName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Nvidia GeForce 4080 "
              required
            />
          </div>
          {/* GPU Size */}

          <div className="mb-6">
            <label
              htmlFor="gpuSize"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Videokarta Hajmi
            </label>
            <select
              id="gpuSize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                GPU SIZE
              </option>
              <option>1 GB</option>
              <option>2 GB</option>
              <option>4 GB</option>
              <option>6 GB</option>
              <option>8 GB</option>
              <option>12 GB</option>
              <option>16 GB</option>
              <option>32 GB</option>
            </select>
          </div>
          {/* Display size */}
          <div className="mb-6">
            <label
              htmlFor="displaySize"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Display O'lchami
            </label>
            <select
              id="displaySize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Display Size
              </option>
              <option>1280x1024</option>
              <option>1366x768</option>
              <option>1600x900</option>
              <option>1920x1080</option>
              <option>1920x1200</option>
              <option>2560x1440</option>
              <option>3440x1440</option>
              <option>3840x2160</option>
              <option>None</option>
            </select>
          </div>

          {/* display fresh rate */}

          <div className="mb-6">
            <label
              htmlFor="displayFr"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Display Chastoasi
            </label>
            <select
              id="displayFr"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Display Fresh Rate
              </option>
              <option>30Hz</option>
              <option>40Hz</option>
              <option>60Hz</option>
              <option>90Hz</option>
              <option>120Hz</option>
              <option>144Hz</option>
              <option>240Hz</option>
              <option>244Hz</option>
              <option>320Hz</option>
              <option>None</option>
            </select>
          </div>
          {/* storage type */}
          <div className="mb-6">
            <label
              htmlFor="storageType"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Xotira Turi
            </label>
            <select
              id="storageType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Storage Type
              </option>
              <option>SSD</option>
              <option>HDD</option>
              <option>None</option>
            </select>
          </div>

          {/* storage size */}

          <div className="mb-6">
            <label
              htmlFor="storageSize"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Xotira Hajmi
            </label>
            <select
              id="storageSize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Storage Size
              </option>
              <option>128GB</option>
              <option>256GB</option>
              <option>312GB</option>
              <option>512GB</option>
              <option>1TB</option>
              <option>1.5TB</option>
              <option>2TB</option>
            </select>
          </div>
            {/* price */}
              <div className="mb-6">
              <label
                htmlFor="pcPrice"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                Narxi
              </label>
              <input
                type="text"
                id="pcPrice"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Narxni belgisi bilan kiriting:  3000000 so'm toki 300$"
                required
              />
            </div>

          {/* image */}
          <label
            className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            htmlFor="user_avatar"
          >
            Kompyuter Rasmi
          </label>
          <input
            onChange={(e) => getImage(e)}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <h3 id="imageIndicator" className="text-center text-red-700"></h3>

          <button
            type="submit"
            className="text-white w-full mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Qo'shish
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProds;
