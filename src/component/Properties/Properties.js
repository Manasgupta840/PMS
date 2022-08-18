import './Properties.css'
import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };

  const styles = {
    wrap: {
      fontFamily: "sans-serif",
      padding: "1rem"
    }
  };  


const Properties = () => {
    return (
        <div className="e" style={styles.wrap}>
        <Tabs className="es" defaultActiveKey="1" onChange={onChange}>
        <TabPane className="e" tab="Buy" key="1">
        <center>
                   <form className="f">
                       <div id="Buy" class="tabcontent">
                           <div className="buycity">
  
                               <select name="City" id="City">
                                   <option value="Bhopal">Bhopal</option>
                                   <option value="Indore">Indore</option>
                                   <option value="Gwalior">Gwalior</option>
                                   <option value="Vidisha">Vidisha</option>
                                   <option value="Hyderabad">Hyderabad</option>
                                   <option value="Banglore">Banglore</option>
                                   <option value="Chennai">North-East</option>
                                   <option value="Delhi">Delhi</option>
                                   <option value="Amritsar">Amritsar</option>
                                   <option value="Ahemdabad">Ahemdabad</option>
                               </select>
                               <input type="text" name="inputt" placeHolder="Search upto3 localities or landmarks"></input>
                               <button className="btn">Search</button>
  
                           </div>
  
                           <div>
  
                               <div className="rad">
                                   <input type="radio" name="house" value="house "/>
                                   <label className="l">Full House</label>
                                   <input type="radio" name="house" value="land" />
                                   <label className="l">Land/Plot</label>
  
                                   <div className="apt">
                                       <select name="BHK" id="BHK">
                                           <option value="1rk">Apartment Type</option>
                                           <option value="1BHK">1BHK</option>
                                           <option value="2BHK">2BHK</option>
                                           <option value="3BHK">3BHK</option>
                                           <option value="4BHK">4+BHK</option>
                                       </select>
  
  
                                   </div>
                                   <div className="propstatus">
                                       <select name="Propstatus" id="Propstatus">
                                           <option value="Property Status">Property Status</option>
                                           <option value="Underconstruction">Under construction</option>
                                           <option value="ready">Ready</option>
                                     </select>
  
  
                                 </div>
                             </div>
  
  
  
                          </div>
  
  
  
  
                      </div>
                  </form>
  
                  </center>
                  
        </TabPane>
        
        <TabPane className="e" tab="Rent" key="2">
          <center>
        <form className="f">
                       <div id="Buy" class="tabcontent">
                           <div className="buycity">
  
                               <select name="City" id="City">
                                   <option value="Bhopal">Bhopal</option>
                                   <option value="Indore">Indore</option>
                                   <option value="Gwalior">Gwalior</option>
                                   <option value="Vidisha">Vidisha</option>
                                   <option value="Hyderabad">Hyderabad</option>
                                   <option value="Banglore">Banglore</option>
                                   <option value="Chennai">North-East</option>
                                   <option value="Delhi">Delhi</option>
                                   <option value="Amritsar">Amritsar</option>
                                   <option value="Ahemdabad">Ahemdabad</option>
                               </select>
                               <input type="text" name="inputt" placeHolder="Search upto3 localities or landmarks"></input>
                               <button className="btn">Search</button>
  
                           </div>
  
                           <div>
  
                               <div className="rad2">
                                   <input type="radio" name="a" value="" />
                                   <label className="l">Full House</label>
                                   <input type="radio" name="a" value="" />
                                   <label className="l">PG/Hostel</label>
                                   <input type="radio" name="a" value="" />
                                   <label className="l">Flatmates</label>
  
  
                                   <div className="apt">
                                       <select name="BHK" id="BHK">
                                           <option value="1rk">Apartment Type</option>
                                           <option value="1BHK">1BHK</option>
                                           <option value="2BHK">2BHK</option>
                                           <option value="3BHK">3BHK</option>
                                           <option value="4BHK">4+BHK</option>
                                       </select>
  
  
                                   </div>
  
                                   <div className="apt">
                                       <select name="BHK" id="BHK">
                                           <option value="1rk">Apartment Type</option>
                                           <option value="1BHK">1BHK</option>
                                           <option value="2BHK">2BHK</option>
                                           <option value="3BHK">3BHK</option>
                                           <option value="4BHK">4+BHK</option>
                                       </select>
                                   </div>
                                   <div className="propavail">
                                       <select name="Propavial" id="Propavail">
                                           <option value="Availability">Availability</option>
                                           <option value="Immediate">Immediate</option>
                                           <option value="Within 15 days">Within 15 days</option>
                                           <option value="Within 30 days">Within 30 days</option>
                                           <option value="after 30 days">after 30 days</option>
  
                                       </select>
  
  
                                   </div>
                               </div>
  
  
  
                           </div>
  
  
  
  
                       </div>
                   </form>
                   </center>
        </TabPane>
      </Tabs>
      </div>


    );



}
export default Properties;

