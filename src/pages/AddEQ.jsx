import React from 'react'
import { useEffect,useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from 'react-router-dom';
import {BiEdit} from "react-icons/bi"


const supabase = createClient("https://cfwtenenwqvbhblumcpk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0");

function AddEQ() {
    const [prods, setProds] = useState([]);

    async function AddProduct(id) { 
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
      .update({
        name: namee,
        type: typee,
        price: pricee,
        info: infoo,
      })
      .eq('id', id);
    }


    //get category items
    const [battary,setBattary] = useState([]);
    const [charger,setCharger] = useState([]);
    const [coller,setColler] = useState([]);
    const [cpu,setCPU] = useState([]);
    const [fleshDisk,setFleshDisk] = useState([]);
    const [gpu,setGPU] = useState([]);
    const [headphones,setHeadphones] = useState([]);
    const [kbandms,setKbandMs] = useState([]);
    const [korpus,setKorpus] = useState([]);
    const [ram,setRam] = useState([]);
    const [storage,setStorage] = useState([]);
    const [other,setOther] = useState([]);
    const [allcount,setAll] = useState(0);
    const [motherboard,setMotherboard] = useState([]);
    

    useEffect(() => {
      getProds();
    },[] );

  async function getProds() {
        const { data } = await supabase.from("ehtiyotqismlar").select();
        setProds(data);
        getMotherboard();
        getBattary();
        getCharger();
        getColler();
        getCPU();
        getFleshDisk();
        getGPU();
        getHeadphones();
        getKbandMs();
        getKorpus();
        getRam();
        getStorage();
        getOther();
        
  }
    function all() {
    const allCount=motherboard.length+battary.length+charger.length+coller.length+cpu.length+fleshDisk.length+gpu.length+headphones.length+kbandms.length+korpus.length+ram.length+storage.length+other.length;  
    setAll(allCount)
  }


  async function getMotherboard() {
    const { data,error } = await supabase
      .from('ehtiyotqismlar')
      .select()
      .ilike('type', 'motherboard')
      setMotherboard(data);
  
  }

    async function getBattary() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'battary')
        setBattary(data);
    
    }
    async function getCharger() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'charger')
        setCharger(data);
    
    }
    async function getColler() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'coller')
        setColler(data);
    
    }
    async function getCPU() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'cpu')
        setCPU(data);
    
    }
    async function getFleshDisk() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'fleshdisk')
        setFleshDisk(data);
    
    }

    async function getGPU() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'gpu')
        setGPU(data);
    
    }
    async function getHeadphones() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'headphone')
        setHeadphones(data);
    
    }
    async function getKbandMs() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'keyboardandmouse')
        setKbandMs(data);
    
    }
    async function getKorpus() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'korpus')
        setKorpus(data);
    
    }

    async function getRam() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'ram')
        setRam(data);
    
    }

    async function getStorage() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'storage')
        setStorage(data);
    
    }


    async function getOther() {
      const { data,error } = await supabase
        .from('ehtiyotqismlar')
        .select()
        .ilike('type', 'storage')
        setOther(data);
    
    }







async function Search(){
    const { data, error } = await supabase
    .from('ehtiyotqismlar')
    .select()
    .ilike('name', '%'+document.getElementById('default-search').value+'%')
    setProds(data);
        console.log(prods);
      }


   const  Delete = (i)=>async ()=>{
      console.log(i);
      await supabase
        .from('ehtiyotqismlar')
        .delete()
        .match({ 'id': i });
        console.log(i);
        window.location.reload(true);
  }


  return (
    <div>
      <Link to={'/adminPanel'}>
        <button
            type="submit"
            className="text-white w-72 ml-5 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ortga Qaytish
        </button>
        </Link>
        <div className="flex mt-10 ml-5 mr-5 mb-5  rounded">
          
                <input
                id="default-search"
                    type="text"
                    className=" block w-full px-4 py-2 text-white bg-gray-800 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button onClick={Search} className="px-4 text-white bg-primary ml-2 rounded ">
                    Qidirish
                </button>
            </div>
            <Link to="/qwertyuiop123456asdfghjkl67890zxcvbnmasdsd8fsa7d8f8avb7afd9a76sdfvsa98d98svkjzhkgjfuyasd56f7s58s7da8f87ashvyd56as976d498236gh1gj82639">
            <button className="w-11/12 h-12  mb-10 text-white bg-primary ml-5 mr-5 rounded ">
                    Yangi Mahsulot Qo'shish
                
            </button>
            </Link>
<div className="relative overflow-x-auto  mb-24">
    <div className="relative overflow-x-auto  mb-24">
      <div className='ml-5 lg:text-3xl text-center'>
        Kategoriya Bo'yicha Ehtiyot Qismlar
      </div>
    <ul className='lg:flex lg:space-x-12 ml-5 mt-5 mr-5  list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside '>
        <li className='mt-5'>Battary : {battary.length}</li>
        <li className='mt-5'>Charger : {charger.length}</li>
        <li className='mt-5'>Coller : {coller.length}</li>
        <li className='mt-5'>CPU : {cpu.length}</li>
        <li className='mt-5'>Flesh Disk : {fleshDisk.length}</li>
        <li className='mt-5'>GPU : {gpu.length}</li>
        <li className='mt-5'>Headphones : {headphones.length}</li>
        <li className='mt-5'>Keyboard and Mouse : {kbandms.length}</li>
        <li className='mt-5'>Motherboard : {motherboard.length}</li>
        <li className='mt-5'>Korpus : {korpus.length}</li>
        <li className='mt-5'>RAM : {ram.length}</li>
        <li className='mt-5'>Storage : {storage.length}</li>
        <li className='mt-5'>Other : {other.length}</li>
        <li className='mt-5 mb-5'>All : {allcount}</li>

    </ul>
  </div>
    <table className="w-full text-sm  text-left text-gray-100 dark:text-gray-400">
        <thead className="text-xs text-gray-100 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
        
        <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3" id='namewidth'>Name</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">Info</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Edit</th>
            
        </tr>
    </thead>
    <tbody>
     {prods.map((item)=>{
        return(
        <tr key={item.id} className='bg-black-900 border-b dark:bg-gray-800 dark:border-gray-700'>
            <td scope="row" className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white">{item.id}</td>
            <td className="px-6 py-4"> <img
                  src={supabase.storage.from('ehtiyotqismlar/'+item.type).getPublicUrl(item.image).data.publicUrl} 
                  alt={item.image}
                  className="w-16"
                /></td>
                <td className="px-6 py-4" >{item.name}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.info}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td>
                <button onClick={Delete(item.id)}  className="px-4 text-white mt-2 mb-2 bg-primary h-10 ml-2 rounded ">
                
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 2C10.4477 2 10 2.44772 10 3V4H14V3C14 2.44772 13.5523 2 13 2H11ZM16 4V3C16 1.34315 14.6569 0 13 0H11C9.34315 0 8 1.34315 8 3V4H3C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H3.10496L4.80843 21.3313C4.97725 22.8506 6.26144 24 7.79009 24H16.2099C17.7386 24 19.0228 22.8506 19.1916 21.3313L20.895 6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H16ZM18.8827 6H5.11726L6.7962 21.1104C6.85247 21.6169 7.28054 22 7.79009 22H16.2099C16.7195 22 17.1475 21.6169 17.2038 21.1104L18.8827 6ZM10 9C10.5523 9 11 9.44771 11 10V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V10C9 9.44771 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44771 15 10V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V10C13 9.44771 13.4477 9 14 9Z" fill="#fff" id="id_101"/>
                    </svg>
                
                </button>
                
              {/*  */}
              <label
                htmlFor="my-modal"
                className="btn btn-primary mt-2 mb-2 ml-2 rounded"
              >
                <BiEdit size={25} />
              </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <form
          onSubmit={() => {
            AddProduct(item.id);
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
              defaultValue={item.name}
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
              defaultValue={item.type}
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
                defaultValue={item.price}
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
              defaultValue={item.info}
              className="shadow-sm bg-gray-50 border h-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ehtiyot Qism Haqidagi Barcha Malumotlarni Yozing !"
              required
            />
          </div>

          
          <h3 id="imageIndicator" className="text-center text-red-700"></h3>

          <button
            type="submit"
            className="text-white w-full mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saqlash
          </button>
            {/*  */}
            
            
            {/*  */}



        </form>


              </div>
            </div>
              
              {/*  */}

                </td>
        </tr>)
     })}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AddEQ