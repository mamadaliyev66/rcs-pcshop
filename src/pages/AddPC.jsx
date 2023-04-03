import React from 'react'
// import React from 'react'
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import {BiEdit} from "react-icons/bi"
const supabase = createClient("https://cfwtenenwqvbhblumcpk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0");

function AddPC() {
    const [prods, setProds] = useState([]);
    const [apple,setApple] = useState([]);
    const [acer,setAcer] = useState([]);
    const [samsung,setSamsung] = useState([]);
    const [asus,setAsus] = useState([]);
    const [dell,setDell] = useState([]);
    const [hp,setHP] = useState([]);
    const [lenovo,setLenovo] = useState([]);
    const [huawei,setHuawei] = useState([]);
    const [msi,setMSI] = useState([]);
    const [others,setOthers] = useState([]);


    useEffect(() => {
        getProds();
      },[] );
async function getProds() {
        const { data } = await supabase.from("computers").select();
        setProds(data);

        // get categories 
        getApple();
        
        
}

// get all categories

async function getApple() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'apple')
    setApple(data);

}

async function getAcer() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'acer')
    setAcer(data);

}


async function getSamsung() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'samsung')
    setSamsung(data);

}



async function getAsus() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'asus')
    setAsus(data);

}


async function getDell() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'dell')
    setDell(data);

}


async function getLenovo() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'lenovo')
    setLenovo(data);
}




async function getHuawei() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'huawei')
    setHuawei(data);
}


async function getMSI() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'msi')
    setMSI(data);
}



async function getHP() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'hp')
    setHP(data);
}



async function getOthers() {
  const { data,error } = await supabase
    .from('computers')
    .select()
    .ilike('pc_type', 'other')
    setOthers(data);
}






async function Search(){
    const { data, error } = await supabase
    .from('computers')
    .select()
    .ilike('name', '%'+document.getElementById('default-search').value+'%')
    setProds(data);
        
      }



   const  Delete = (i)=>async ()=>{
     
      await supabase
        .from('computers')
        .delete()
        .match({ 'id': i });
      
        window.location.reload(true);
  }



  async function AddProduct(e,id) {
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
  .from('computers')
  .update({ 
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
      price:pcPrice
  })
  .eq('id', id)
  window.location.reload();
    // const { error } = await supabase
    // .from("computers")
    // .insert({
      // name: pc_name,
      // pc_type: pc_typee,
      // cpu_name: cpu_namee,
      // cpu_core: cpu_coree,
      // gpu_name:gpu_namee,
      // gpu_size:gpu_sizee,
      // display_size: displayy,
      // display_fr:display_frr,
      // storage_size:storagee_size,
      // storage_type:storagee_type,
      // image:fimg.name,
      // price:pcPrice
    // });
    
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
            <Link to="/asdasdahdbaasdhkjbasdjhfaskdjhfkasdhdfsadfbbbvxcnmvxmcnvbasdmcnvbxcnvbhasdasdxcvasdasdasdasasasd">
            <button className="w-11/12 h-12  mb-10 text-white bg-primary ml-5 mr-5 rounded ">
                    Yangi Mahsulot Qo'shish
                
            </button>
            </Link>
<div className="relative overflow-x-auto  mb-24">
  <div className='ml-5 lg:text-3xl text-center'>
    Kategoriya Bo'yicha Mahsulotlar
  </div>
<ul className='lg:flex lg:space-x-12 ml-5  list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside '>
    <li className='mt-5'>Acer - {acer.length}</li>
    <li className='mt-5'>Samsung - {samsung.length}</li>
    <li className='mt-5'>Apple - {apple.length}</li>
    <li className='mt-5'>Asus - {asus.length}</li>
    <li className='mt-5'>Dell - {dell.length}</li>
    <li className='mt-5'>HP - {hp.length}</li>
    <li className='mt-5'>Lenovo - {lenovo.length}</li>
    <li className='mt-5'>Huawei - {huawei.length}</li>
    <li className='mt-5'>MSI - {msi.length}</li>
    <li className='mt-5'>Other - {others.length}</li>
    <li className='mt-5 mb-5'>Hammasi - {others.length+acer.length+samsung.length+apple.length+asus.length+dell.length+hp.length+lenovo.length+huawei.length+msi.length+others.length}</li>

</ul>
    <table className="w-full text-sm text-left text-gray-100 dark:text-gray-400">
        <thead className="text-xs text-gray-100 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
        
        <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3" id='namewidth'>Name</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">CPU Name</th>
            <th scope="col" className="px-6 py-3">CPU Core</th>
            <th scope="col" className="px-6 py-3">GPU</th>
            <th scope="col" className="px-6 py-3">GPU Size</th>
            <th scope="col" className="px-6 py-3">Display</th>
            <th scope="col" className="px-6 py-3">Display Fresh Rate</th>
            <th scope="col" className="px-6 py-3">Storage</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Edit</th>
            
        </tr>
    </thead>
    <tbody>
     {prods.map((item)=>{
        return (
          <tr
            key={item.id}
            className="bg-black-900 border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white"
            >
              {item.id}
            </td>
            <td className="px-6 py-4">
              {" "}
              <img
                src={
                  supabase.storage
                    .from("computers/" + item.pc_type)
                    .getPublicUrl(item.image).data.publicUrl
                }
                alt={item.image}
                className="w-16"
              />
            </td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.pc_type}</td>
            <td className="px-6 py-4">{item.cpu_name}</td>
            <td className="px-6 py-4">{item.cpu_core}</td>
            <td className="px-6 py-4">{item.gpu_name}</td>
            <td className="px-6 py-4">{item.gpu_size}</td>
            <td className="px-6 py-4">{item.display_size}</td>
            <td className="px-6 py-4">{item.display_fr}</td>
            <td className="px-6 py-4">
              {item.storage_size} {item.storage_type}
            </td>
            <td className="px-6 py-4">{item.price}</td>
            <td>
              <button
                onClick={Delete(item.id)}
                className="px-4 text-white mt-2 mb-2 bg-primary h-10 ml-2 rounded "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 2C10.4477 2 10 2.44772 10 3V4H14V3C14 2.44772 13.5523 2 13 2H11ZM16 4V3C16 1.34315 14.6569 0 13 0H11C9.34315 0 8 1.34315 8 3V4H3C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H3.10496L4.80843 21.3313C4.97725 22.8506 6.26144 24 7.79009 24H16.2099C17.7386 24 19.0228 22.8506 19.1916 21.3313L20.895 6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H16ZM18.8827 6H5.11726L6.7962 21.1104C6.85247 21.6169 7.28054 22 7.79009 22H16.2099C16.7195 22 17.1475 21.6169 17.2038 21.1104L18.8827 6ZM10 9C10.5523 9 11 9.44771 11 10V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V10C9 9.44771 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44771 15 10V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V10C13 9.44771 13.4477 9 14 9Z"
                    fill="#fff"
                    id="id_101"
                  />
                </svg>
              </button>

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
                    onSubmit={(event) => {
                      AddProduct(event,item.id);
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
                        defaultValue={item.name}
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
                        defaultValue={item.pc_type}
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
                        defaultValue={item.cpu_name}
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
                        defaultValue={item.cpu_core}
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
                        defaultValue={item.gpu_name}
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
                        defaultValue={item.gpu_size}
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
                        defaultValue={item.display_size}
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
                        defaultValue={item.display_fr}
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
                        defaultValue={item.storage_type}
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
                        defaultValue={item.storage_size}
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
                        defaultValue={item.price}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Narxni belgisi bilan kiriting:  3000000 so'm toki 300$"
                        required
                      />
                    </div>

                    {/* image */}
                    
                    <div className="modal-action">
                      <button
                        type="submit"
                        className="text-white w-full mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Saqlash
                      </button>
                    
                    </div>
                  </form>
                </div>
              </div>
            </td>
          </tr>
        );
     })}
     
    </tbody>
  </table>
  
</div>

    </div>
  )
}

export default AddPC