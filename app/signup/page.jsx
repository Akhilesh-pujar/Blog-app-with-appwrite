"use client"
import Link from "next/link";
import { useForm } from "react-hook-form"
function Loginform() {


  const { register, handleSubmit, watch, formState: { errors } } =
    useForm();

  const onSubmit = data => console.log(data);

  console.log(watch("example"))
  return (
    <div className="">

<section className="text-gray-600 body-font">
  <form className="container px-5 py-24 mx-auto flex flex-wrap items-center" onSubmit={handleSubmit(onSubmit)}>
    
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Wel come to web dev-blog</h1>
      <p className="leading-relaxed mt-4"> signing up with our cummunity where latest updates about web gets realesed.</p>
    </div>


    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
      
        <input 
         {...register("username", {
          
        })}
        placeholder="Enter your username"
        type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none
         text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4">
       
        <input
         type="email" 
         {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
        placeholder="Enter your mail"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
         focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         />
      </div>
      <div className="relative mb-4">
       
       <input
        type="email" 
        {...register("email", {
         required: "Required",
         pattern: {
           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
           message: "Password is not strong"
         }
       })}
       placeholder="Enter your password"
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
        focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
     </div>

     <div className="relative mb-4">
       
       <input
        type="email" 
        {...register("email", {
         required: "Required",
         pattern: {
           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
           message: "Password did not match"
         }
       })}
       placeholder="Confirm password"
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
        focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
     </div>

      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
     <button>Already have a account then <Link className="text-green-500" href="/loginform">login  here</Link> </button>
     
    </div>
    
  </form>
</section>

    </div>
  )
}

export default Loginform
