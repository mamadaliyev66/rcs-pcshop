import React from "react";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const supabase = createClient(
  "https://cfwtenenwqvbhblumcpk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0"
);
import { Link } from "react-router-dom";

function AdminPanel() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const { data } = await supabase.from("auth").select();
    setUser(data);
  }

  function checkUser() {
    var ilog = document.getElementById("username").value;
    var ipass = document.getElementById("password").value;
    if (ilog == user[0].login) {
      if (ipass == user[0].password) {
        sessionStorage.setItem("login", true);
        document.getElementById("alert").innerHTML = "Success!";
        window.location.reload();
      } else {
        document.getElementById("alert").innerHTML =
          "Login or Password is Invalid!";
      }
    } else {
      document.getElementById("alert").innerHTML =
        "Login or Password is Invalid!";
    }
  }
  function LogOut() {
    sessionStorage.clear();
    window.location.reload();
  }

  if (sessionStorage.getItem("login") == "true") {
    return (
      <div className="text-center bg-no-repeat bg-fixed bg-center	bg-cover bg-[url('https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg')]">
    <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-md">
       
        <button
          onClick={LogOut}
          type="submit"
          className="text-white md:w-96 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Chiqish
        </button>
        <div className="lg:flex lg:space-x-40">
          <div className="card sm:w-24 lg:ml-52 card-compact mt-10 mb-10 lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://media.4rgos.it/i/Argos/1121-m0014-m007-m050-m008-gaming-pcs-and-laptops-guide-as274382882?maxW=1200&qlt=75&fmt.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kompyuterlar</h2>

              <div className="card-actions justify-end">
                <Link
                  to={
                    "/addpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasaddpcaddpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdd"
                  }
                >
                  {" "}
                  <button className="btn btn-outline btn-info">Ko'rish </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card  mt-10 mb-10  card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://media.pangoly.com/img/8/5/d/a/85da98e5-3550-40a7-beaa-102a6b63adec.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ehtiyot Qismlar</h2>

              <div className="card-actions justify-end">
                <Link
                  to={
                    "/aasdjkdghjsdfhjsdfgjkjkhgdasdjbnnjakshdgk731y9asddfv1u23127889172738ysdtfagjsydt7i23t835gsdhgfi276t4918y29y129yhgsdfat823"
                  }
                >
                  <button className="btn btn-outline btn-info">Ko'rish</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="flex h-96 flex-col items-center justify-center min-h-screen bg-no-repeat bg-fixed bg-center  	bg-cover bg-[url('https://teachonline.ca/sites/default/files/tools-trends/banner/1140x400-educatorsguide.jpg')] text-white">
          <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
            <div class="bg-blue-800 w-full sm:w-6/12  max-w-lg p-12 pb-6 shadow-2xl rounded">
              <div class="text-white pb-4 text-3xl font-semibold text-center">
                Login Admin Panel
              </div>
              <input
                class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
                id="username"
                type="text"
                placeholder="Login"
              />
              <input
                class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
                id="password"
                type="password"
                placeholder="password"
              />
              <button
                onClick={checkUser}
                class="inline-block mt-2  btn btn-outline btn-info lg:ml-36  px-6 py-2 rounded  shadow-lg"
              >
                Login
              </button>
              <h1
                id="alert"
                className="text-white  text-center mt-5 pb-4 text-xl font-semibold"
              ></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
