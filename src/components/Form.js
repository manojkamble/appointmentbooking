import "./Form.css";
import React, { useState } from "react";

export default function Form() {

  var d=new Date();
  let showdate=`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
  
  const [UserId, setUserId] = useState("810459219");
  const [DoctorId, setDoctorId] = useState("45346070");
  const [ClinicId, setClinicId] = useState("122990548");
  const [Title, setTitle] = useState("");
  const [AppointmentDate, setAppointmentDate] = useState("showdate");
  const [AppointmentTime, setAppointmentTime] = useState("");
  const [AppointmentChannelWalkin, setAppointmentChannelWalkin] = useState("");
 
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [BookedDate, setBookedDate] = useState("");
  const [Patient_BP, setPatient_BP] = useState("");
  const [Patient_Plus, setPatient_Plus] = useState("");
  const [Patient_SPO2, setPatient_SPO2] = useState("");
  const [Patient_Temp, setPatient_Temp] = useState("");
  const [Patient_Weight, setPatient_Weight] = useState("");
  const [Patient_Height, setPatient_Height] = useState("");
  const [ShortNote, setShortNote] = useState("");
  const [PrescriptionNote, setPrescriptionNote] = useState("");

const[city ,setcity]=useState("");
 const[state ,setstate]=useState("");
 const[country ,setcountry]=useState("");
 const[Pincode ,setPincode]=useState("");
 const[AppointmentType,setAppointmentType]=useState("");
 const[Address,setAddress]=useState("");

  
  function saveUser() {
    console.log({
      UserId,
      DoctorId,
      ClinicId,
      Title,
      AppointmentDate,
      AppointmentTime,
      AppointmentChannelWalkin,
      AppointmentType,
      FirstName,
      LastName,
      BookedDate,
      Patient_BP,
      Patient_Plus,
      Patient_SPO2,
      Patient_Temp,
      Patient_Weight,
      Patient_Height,
      ShortNote,
      PrescriptionNote,
    });
    let data = {
      UserId,
      DoctorId,
      ClinicId,
      Title,
      AppointmentDate,
      AppointmentTime,
      AppointmentChannelWalkin,
      AppointmentType,
      FirstName,
      LastName,
      BookedDate,
      Patient_BP,
      Patient_Plus,
      Patient_SPO2,
      Patient_Temp,
      Patient_Weight,
      Patient_Height,
      ShortNote,
      PrescriptionNote,
    };
     
    var AppointmentStatus="active";
    
    var AppointmentChannel="yes";
    data['AppointmentChannel']=AppointmentChannel;
    // data['UserId']=UserId;
    // data['ClinicId']=ClinicId;
    // data['DoctorId']=DoctorId;
    data['AppointmentStatus']=AppointmentStatus;

    fetch("http://13.233.217.107:8080/api/AddAppointment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
    });
  }
  return (
    <>
     
      <div class="flex-container">
        <span class="imgname">Chris Evans</span>
        <img
          src="https://www.teahub.io/photos/full/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg"
          class="image1"
        ></img>
      </div>

      

      <div class="container-fluid border-top border-3">
       

        <div id="mySidebar" class="sidebar">
        <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fa fa-home" aria-hidden="true"></i>
          <i class="fa fa-envelope-open" aria-hidden="true"></i>
          <i class="fa fa-clone" aria-hidden="true"></i>
          <i class="fa fa-address-book" aria-hidden="true"></i>
          <i class="fa fa-clone" aria-hidden="true"></i>
          <i class="fa fa-id-card-o" aria-hidden="true"></i>
          <i class="fa fa-credit-card" aria-hidden="true"></i>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          <i class="fa fa-history" aria-hidden="true"></i>
          
        </div>
      </div>

     
      <h1 class="header">Book Appointment</h1>
      <div class="container">
        <div class="main">
          <div class="row">
           
            <section class="leftsection col-6 col-md-6 col-lg-6">
              <h3 class="det">Details</h3>
              
                <div class="form-group">
                <span className="title1">Title</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="text"
                    className="Title"
                    value={Title}
                    name="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </form>
              </div>
                
              <div>
                <span className="date1">AppointmentDate</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Date"
                    className="date"
                    value={AppointmentDate}
                    name="AppointmentDate"
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </form>
                
              </div>

              <div>
                <span className="appointmenttime">AppointmentTime</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Time"
                    class="appointmenttime1"
                    value={AppointmentTime}
                    name="AppointmentTime"
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </form>
              </div>

              <div>
                <span className="user1">UserId</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="userid"
                    value={UserId}
                    name="UserId"
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </form>
              </div>

              <div>
                <span className="doctor1">DoctorId</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="doctor2"
                    value={DoctorId}
                    name="DoctorId"
                    onChange={(e) => setDoctorId(e.target.value)}
                  />
                </form>
              </div>

              <div>
                <span className="clinic1">ClinicId</span>
                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="clinic2"
                    value={ClinicId}
                    name="ClinicId"
                    onChange={(e) => setClinicId(e.target.value)}
                />

              </form>
              </div>
            </section>


            <section class="rightsec col-6 col-md-6 col-lg-6">
              <div>
                <h3>Appointment Details</h3>
                <div class="row">
                  <div class="col-6 col-md-3 col-lg-6">
                   <p className='first'>FirstName</p>
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <input type="text" value={FirstName} className="FirstName" name='FirstName' onChange={(e)=>setFirstName(e.target.value)} />
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <p className='lastname1'>LastName</p>
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <input type="text" value={LastName} className="LastName" name='LastName' onChange={(e)=>setLastName(e.target.value)} />
                  </div>
                
                </div>
                <div class="row">
                  <div class="col-6 col-md-6 colp-lg-6">
                  <p className='chanel'>AppointmentChannel-Walk In</p>
                  </div>
                  <div class="col-6 col-md-6 colp-lg-6">
                  <label class="switch">
                      <input type="checkbox"  value={AppointmentChannelWalkin} name='AppointmentChannelWalkin' onChange={(e)=>setAppointmentChannelWalkin(e.target.value)} />
                      <span class="slider round p-1">yes</span>
                    </label>
                  </div>
                  <div class="schedule">
                    <span className='book2'>BookedDate</span>
                  
                  
                    
       <form>
           <label for="birthdaytime"></label>
           <input type="text" className='bookdate' value={BookedDate} name='CurrentDate' onChange={(e)=>setBookedDate(e.target.value)}  />
         

             </form>
             <span className='addres'>Address</span>
                  
                  
                    
                  <form>
                      <label for="birthdaytime"></label>
                      <input type="text" className='time3' value={Address} name='Address' onChange={(e)=>setAddress(e.target.value)}  />
                    <span className='country1'>Country</span>
                    <label for="birthdaytime"></label>
                      <input type="text" className='country2' value={country} name='state' onChange={(e)=>setcountry(e.target.value)}  />
           
                        </form>
                        <span className='city1'>City</span>
                  
                  
                    
                  <form>
                      <label for="birthdaytime"></label>
                      <input type="text" className='City' value={city} name='city' onChange={(e)=>setcity(e.target.value)}  />
                  
                   <span className='state1'>State</span>
                    <label for="birthdaytime"></label>
                      <input type="text" className='time5' value={state} name='state' onChange={(e)=>setstate(e.target.value)}  />
                     
                      <span className='state2'>Pincode</span>
                   
                   <label for="birthdaytime"></label>
                      <input type="text" className='time6' value={Pincode} name='Pincode' onChange={(e)=>setPincode(e.target.value)}  />
                      <span className='state10'>AppointmentType</span>
                   
                   <label for="birthdaytime"></label>
                      <input type="text" className='appointype1' value={AppointmentType} name='AppointmentType'onChange={(e)=>setAppointmentType(e.target.value)}  />
                        </form>
                  </div>
                  
  
                  
                </div>
              </div>
            </section>
          </div>

          <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
              <h3>Vital Information</h3>

              <div class="input1">
                <span class="inputtext1">Blood pressure</span>
                <input type="text" class="form-control3" placeholder="" value={Patient_BP} name="Patient_BP" onChange={(e) => setPatient_BP(e.target.value)}/>
                <span class="inputtext2">Height</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={Patient_Height}
                  name="Patient_Height"
                  onChange={(e) => setPatient_Height(e.target.value)}
                />
                <span class="inputtext3">SPo2</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={Patient_SPO2}
                  name="Patient_SPO2"
                  onChange={(e) => setPatient_SPO2(e.target.value)}
                />
                <span class="inputtext4">Temp</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={Patient_Temp}
                  name="Patient_Temp"
                  onChange={(e) => setPatient_Temp(e.target.value)}
                />
                <span class="inputtext5">Weight</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={Patient_Weight}
                  name="Patient_Weight"
                  onChange={(e) => setPatient_Weight(e.target.value)}
                />
                <span class="inputtext6">Pulse Rate</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={Patient_Plus}
                  name="Patient_Plus"
                  onChange={(e) => setPatient_Plus(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="description">
            <textarea
              id="shortnote"
              rows="3"
              cols="50"
              placeholder="Reason"
              value={ShortNote}
              name="ShortNote"
              onChange={(e) => setShortNote(e.target.value)}
            ></textarea>
            <textarea
              id="presc"
              rows="3"
              cols="50"
              placeholder="Note for Doctor"
              value={PrescriptionNote}
              name="PrescriptionNote"
              onChange={(e) => setPrescriptionNote(e.target.value)}
            ></textarea>

            <div class="buttons1">
              <button type="button" class="btn2 btn-primary">
                Cancel
              </button>

          
              <button
                to="/register"
                onClick={saveUser}
                type="button"
                class="btn3 btn-primary"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p class="footer1">POWERED BY RAJYUG IT SOLUTIONS PVT LTD</p>
      </footer>
    </>
  );
}
