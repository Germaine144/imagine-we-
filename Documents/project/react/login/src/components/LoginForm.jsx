import React,{useState,useEffect} from "react";

function LoginForms (){
    
    return (
   <div>
    <h1 className="text-3xl font-bold mb-6">REGISTRATION FORM</h1>
    <div>
        <div className="pt-10 flex justify-center items-center">
        <form className="pt-8 w-[800px] max-w-[850px] border border-black flex flex-col gap-7 py-4 px-8">
            <label   className="text-left font-semibold" for="firstname">Firstname:</label>
            <input className="p-4 border border-b-slate-900 rounded-xl shadow-xl" type="text" id="firstname" name="username" placeholder="Pls Enter Your First Name" />
            <label  className="text-left font-semibold" for="lastname">Lastname:</label>
            <input  className="p-4 border border-b-slate-900 rounded-xl shadow-xl" type="text" id="firstname" name="username" placeholder="Pls Enter Your last Name"/>
            <label  className="text-left font-semibold" for = "gender">Gender</label>
            <select  className="p-4 border border-b-slate-900 rounded-xl shadow-xl">
                <option value= "">Select Your Gender </option>
                <option value= "male">Male</option>
                <option value= "Female">Female</option>
            </select>
            <label  className="text-left font-semibold" for = "address"> Address :</label>
            <input  className="p-4 border border-b-slate-900 rounded-xl shadow-xl" type="text" id="address" name="address" placeholder="Pls Enter Your Address" />
            <label  className="text-left font-semibold" for = "number"> Phone Number :</label>
            <input  className="p-4 border border-b-slate-900 rounded-xl shadow-xl" type="number" id="phone" name="phone"  placeholder="Pls Enter Your phone number"/>
           
        <button type="submit" className="bg-gray-700 text-white font-semibold p-3 rounded-xl hover:bg-gray-800 transition-colors" >
          Register Now
        </button>
            </form>
        </div>
    </div>
   </div>
    )
}
export default LoginForms ;