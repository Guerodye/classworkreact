/**
 * @author: Casey
 */
const HomePage = () => {
  // users
  // const [changeableVal, setChangeableVal] = useState(initialState)

  // const loadMoreMessages = () => {
  // newMessages = fetch(Message)
  // setMessage(newMessages)
  // }

  return (
    <>
          <div className="flex">
             <div className="w-3/4 ">
                <img className=" bg-cover " src="/images/roomate.jpg" alt=""/>
              </div>
              <div>
                  <div className="border-2 p-6 h-full">
                     <h1 className="font-bold lg:text-xl">Affordable College Room Rental App</h1>
                      <br/>
                      <p>Are you a College student looking for a place to rent where you can <br/> share a room  and/or a common living space with other students with the goal of reducing living cost</p>
                  <br/>
                      <p>Welcome to the only app design to give services only to college students.</p>
                      <br/>
                     <p>Before you start, here is what you  you will need so we can better serve you:</p>
                      <br/>
                     <ul type="circle">
                          <li> - College ID card or Acceptance letter </li>

                      </ul>
                      <br/>
                      <br/>
                      <div>
                          <input type="submit" value="Get Started" className="bg-black text-white p-1 text-center "/>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
}

export default HomePage;
