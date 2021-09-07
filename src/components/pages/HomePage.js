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
          <div className="flex h-screen">
             <div className="w-1/2 ">
                <img className=" bg-cover " src="/images/roomate.jpg" alt=""/>
              </div>
              <div>
                  <div className="border-2 p-6 w-3/4">
                     <h1 className="font-bold text-lg">Affordable College Room Rental App</h1>
                      <br/>
                     <p>Welcome to the only app design to give services only to low income college students.</p>
                      <br/>
                     <p>Before you start, here is a list of documents you will need so we can better serve you:</p>
                      <br/>
                     <ul type="circle">
                          <li> College ID card or Acceptance letter </li>
                          <li> A document justifying that you are low income college student: </li>
                          <li> Tax return document </li>
                          <li>Immigration Status document</li>
                          <li>Financial Hardship Letter</li>
                      </ul>

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
