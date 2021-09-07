const ProfilePage = () => {
  return (
    <div className="border w-1/2 border-black px-28 pt-6 pb-6">

      <h1 className="font-bold text-lg text-center mb-4">Student Profile</h1>
        <div className="space-y-6 ">
        <div className="flex space-x-10 ">
          <div>
              <label >
                  <p>First name</p>
              </label>
                <input type="text" className="border-2 border-black"/>
          </div>

            <div>
                <label>
                <p>Last name</p>
                </label>
               <input type="text" className="border-2 border-black"/>
            </div>
        </div>
        <div>
        <label >
            <p>Age</p>
        </label>
        <select>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
        </select>
        </div>
        <div>
        <label >
            <p>Pairing preference with:</p>
        </label>
        <select>
            <option>Female</option>
            <option>Male</option>
            <option>Transgender</option>
            <option>Gay</option>
            <option>Lesbian</option>
            <option>Non-binary</option>
        </select>
        </div>
        <div>
        <label >
            <p>Location interest</p>
        </label>
        <input type="text" className="border-2 border-black"/>
        </div>
         <div>
        <label >
            <p>College name</p>
        </label>
        <input type="text" className="border-2 border-black"/>
       </div>
            <div className="border-black">
                <textarea name="text" cols="60" rows="5" >Tell us about yourself</textarea>
            </div>
            <div className="text-center"><input type="submit" value="Save and Find Matches"/></div>
            </div>


    </div>
  );
};

export default ProfilePage;
