import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://cfwtenenwqvbhblumcpk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0");

function AddEQI() {

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

    // name
    var namee = document.getElementById("name").value;
    // type
    var typee = document.getElementById("type").value;

    console.log(namee);
    console.log(typee);
    // price
    var pricee = document.getElementById("price").value;
    var infoo = document.getElementById("info").value;

    console.log(pricee);
    console.log(infoo);

    const { error } = await supabase
    .from("ehtiyotqismlar")
    .insert({
      name: namee,
      type: typee,
      price: pricee,
      info: infoo,
      image:fimg.name,
    });

  const { data } = await supabase.storage
    .from("ehtiyotqismlar")
    .upload(typee + "/" + fimg.name, fimg, {
      cacheControl: "3600",
      upsert: false,
    });

    window.location.reload();
  }
  return (
    <div>

<div className="bg-no-repeat bg-fixed bg-center	bg-cover	 bg-[url('https://itengineering.com.au/wp-content/uploads/2021/12/ite-comp-repair.jpg')]">
        
      <Link to={'/aasdjkdghjsdfhjsdfgjkjkhgdasdjbnnjakshdgk731y9asddfv1u23127889172738ysdtfagjsydt7i23t835gsdhgfi276t4918y29y129yhgsdfat823'}>
        <button
            type="submit"
            className="text-white w-72 lg:ml-72 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ortga Qaytish
        </button>
        </Link>
      <h1 className="text-center w-full text-4xl  text-white pt-12 pb-16">
        Yangi Ehtiyot Qism Qo'shish
      </h1>
      <div className="  lg:pl-72 lg:w-9/12 pt-10 pb-10">
        <form
          onSubmit={(event) => {
            AddProduct(event);
          }}
        >
          {/* name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-100  dark:text-white"
            >
              Nomi
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ram"
              required
            />
          </div>
          {/*  type */}
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
            Qaysi Turga Kiradi
            </label>
            <select
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Turini Tanlang
              </option>
              <option>battary</option>
              <option>charger</option>
              <option>coller</option>
              <option>cpu</option>
              <option>felshdisk</option>
              <option>motherboard</option>
              <option>gpu</option>
              <option>headphone</option>
              <option>keyboardandmouse</option>
              <option>korpus</option>
              <option>ram</option>
              <option>storage</option>
              <option>other</option>
            </select>
          </div>
          
            {/* price */}
              <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                Narxi
              </label>
              <input
                type="text"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Narxni belgisi bilan kiriting:  3000000 so'm toki 300$"
                required
              />
            </div>
        {/* info */}
        <div className="mb-6">
            <label
              htmlFor="info"
              className="block mb-2 text-sm font-medium text-gray-100  dark:text-white"
            >
              Malumot
            </label>
            <textarea
              type="text"
              id="info"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ehtiyot Qism Haqidagi Barcha Malumotlarni Yozing !"
              required
            />
          </div>

          {/* image */}
          <label
            className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            htmlFor="user_avatar"
          >
            Rasmi
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
            {/*  */}
            
            
            {/*  */}



        </form>
      </div>
    </div>


    </div>
  )
}

export default AddEQI