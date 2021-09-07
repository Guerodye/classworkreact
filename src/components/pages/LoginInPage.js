import { useRef } from "react";

/**
 * @author: David
 */

function LoginInPage() {
  // since we have this form, we can collect it's value
  //see this for more of Ref: https://bit.ly/3zqey1l
  const username = useRef();
  const password = useRef();

  // this is the function that will run
  // when we submit below
  const handleLogin = (event) => {
    event.preventDefault();
    // login to submit this form
    // let's check this is works...
    // we can get the value of username , password from the current

    console.log(`Logging in as: 
  ${username.current.value}
  ${password.current.value}
  `);
  };

  return (
      <div className="space-y-6 ">
          <div className="bg-red-400 w-1/2  border-2  text-center p-6">
              <p className="">Step 1: College attendee verification</p>
              <p>Enter Email address</p>
              <input className="" name="username" type="text"/>
              <p>Please submit your college ID car or your college admission letter</p>
              <p>Upload here</p>
              <input className="bg-red-700 border-red-800 font-bold p-z" type="submit" value="Submit"/>
          </div>

         <div className="flex">
           <div className="w-1/2 h-1/2 ">
            <img className=" bg-cover " src="/images/roomate.jpg" alt=""/>
           </div>


             <div className="border-2 block w-1/2 px-20 py-5  ">
                   <h2 className="text-gray-800 text-3xl font-medium">Log in</h2>
                   <form onSubmit={handleLogin} className="">
                   <input name="username" ref={username} type="text" className=" mt-5 border-2 block w-full p-2 rounded border-gray-300" placeholder="Enter email" />
                   <input name="password" ref={password} type="passward" className=" mt-5 border-2 block w-full p-2  rounded border-gray-300 " placeholder="Enter password" />
                   {/* <button onClick={}>Login</button> */}
                   <input type="sumbit" value="Sign in" className=" mt-5 text-center border-2 block py-3 bg-green-500 text-white w-full rounded hover:bg-green-600" />
                   </form>

            </div>
         </div>

    </div>
  );
}

export default LoginInPage;
