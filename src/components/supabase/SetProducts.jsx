import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://cfwtenenwqvbhblumcpk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0"
);

function SetProducts() {
  const [fimg, setFimg] = useState({});
  async function getImage(e) {
    const file = e.target.files[0];
    setFimg(file);
  }

  async function Submited(e) {
    e.preventDefault();

    // pc
    var pc_name = document.getElementById("pc_name").value;
    var pc_typee = document.getElementById("pc_type").value;

    console.log(pc_name);
    console.log(pc_typee);
    // cpu
    var cpu_namee = document.getElementById("cpu_name").value;
    var cpu_coree = document.getElementById("cpu_core").value;

    console.log(cpu_namee);
    console.log(cpu_coree);
    // gpu
    var gpu_namee = document.getElementById("gpu_name").value;
    var gpu_sizee = document.getElementById("gpu_size").value;

    console.log(gpu_namee);
    console.log(gpu_sizee);
    // display
    var displayy = document.getElementById("display_size").value;
    var display_frr = document.getElementById("display_fr").value;

    console.log(displayy);
    console.log(display_frr);
    //storage
    var storagee_type = document.getElementById("storage_type").value;
    var storagee_size = document.getElementById("storage_size").value;

    console.log(storagee_type);
    console.log(storagee_size);
    //image

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
        image:fimg.name
      });

    const { data } = await supabase.storage
      .from("computers")
      .upload(pc_typee + "/" + fimg.name, fimg, {
        cacheControl: "3600",
        upsert: false,
      });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          Submited(event);
        }}
      >
        {/* Computer Name Input */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Computer Name</span>
          </label>
          <input
            id="pc_name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Computer Type Input */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Computer Type</span>
          </label>
          <select
            id="pc_type"
            className="select  select-secondary w-full max-w-xs"
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
        {/* CPU Name */}
        <div className="mt-5 form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">CPU Name</span>
          </label>
          <input
            id="cpu_name"
            type="text"
            placeholder="Intel core i7"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* CPU Core */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">CPU Core</span>
          </label>
          <select
            id="cpu_core"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select CPU Core Count
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
        {/* GPU Name */}
        <div className="mt-5 form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">GPU Name</span>
          </label>
          <input
            id="gpu_name"
            type="text"
            placeholder="NVIDIA GEForce RTX 4090"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* GPU SIZE */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">CPU Core</span>
          </label>
          <select
            id="gpu_size"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select GPU Size{" "}
            </option>
            <option>2 GB</option>
            <option>4 GB</option>
            <option>6 GB</option>
            <option>8 GB</option>
            <option>12 GB</option>
            <option>16 GB</option>
            <option>32 GB</option>
          </select>
        </div>
        {/* Display Size */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Display Size</span>
          </label>
          <select
            id="display_size"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select Display Size{" "}
            </option>
            <option>1280x1024</option>
            <option>1366x768</option>
            <option>1600x900</option>
            <option>1920x1080</option>
            <option>1920x1200</option>
            <option>2560x1440</option>
            <option>3440x1440</option>
            <option>3840x2160</option>
          </select>
        </div>
        {/* Display Frame Rate */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Display Frame Rate</span>
          </label>
          <select
            id="display_fr"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select Display Frame Rate (FPS){" "}
            </option>
            <option>40Hz</option>
            <option>60Hz</option>
            <option>90Hz</option>
            <option>120Hz</option>
            <option>144Hz</option>
            <option>240Hz</option>
          </select>
        </div>
        {/* Storge Type */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Storage Type</span>
          </label>
          <select
            id="storage_type"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select Storge Type{" "}
            </option>
            <option>HDD</option>
            <option>SDD</option>
          </select>
        </div>
        {/* Storage Size */}
        <div className="mt-5">
          <label className="label">
            <span className="label-text">Storage Size</span>
          </label>
          <select
            id="storage_size"
            className="select  select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Select Storge Size{" "}
            </option>
            <option>128GB</option>
            <option>256GB</option>
            <option>312GB</option>
            <option>512GB</option>
            <option>1TB</option>
            <option>2TB</option>
          </select>
        </div>
        {/* Image Input */}
        <label className="label mt-5">
          <span className="label-text">Computer Image</span>
        </label>
        <input
          onChange={(e) => getImage(e)}
          id="pc_image"
          type="file"
          className=" mb-5 file-input file-input-bordered file-input-secondary w-full max-w-xs"
        />
        <div>
          <button className="btn btn-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SetProducts;
