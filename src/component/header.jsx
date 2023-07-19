import React, { useState, useEffect } from 'react'
import "./animation.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function Header() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [Messege, setMessege] = useState('');



    const HandleAppointment = (event) => {

        if (name === '' || email === '' || phone === '' || Messege ==='') {
            // alert("Data uploaded successfully")
           
            alert('All fields are required');
            return;
        }
     else if (phone.length !== 10) {
            alert("Phone number should be 10 digit");
            return;
        }
        try {

        // Access the Firebase database reference
        event.preventDefault();

        // Access the Firebase database reference
        const database = firebase.database();

        // Save the form data to Firebase
        database.ref('Appointment Data').push({
            name,
            email,
            phone,
            Messege

        }).then(() => {
             // Clear the form fields
            setName('');
            setEmail('');
            setMessege('');
            setPhone('');
            console.log('data added to firestore')
            alert('Your appointment has book successfully..')
        }).catch((error) => {

            console.log('firestore error ', error)
            alert('sorry try again ..')
        }

        )
    }
    catch (error) {
        
        console.log('system error ', error.message)
    }
    
    }

    useEffect(() => {
        // Initialize Firebase app
        firebase.initializeApp({
            // Your Firebase config object
            apiKey: "AIzaSyD0COqyjZAKhqSTUYEjBXGFqFkpYXcSLbM",
            authDomain: "aisensehospital.firebaseapp.com",
            databaseURL: "https://aisensehospital-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "aisensehospital",
            storageBucket: "aisensehospital.appspot.com",
            messagingSenderId: "930945176581",
            appId: "1:930945176581:web:f285076c70e28282b8b86c",
            measurementId: "G-97VPV39KGC"

        });
    }, []);

    return (

        <>
            <div>
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">

                    <img
                        src={require("../assets/manipal_banner_gs.webp")}
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div
                        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4b33e700] to-[#766fff00] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />

                    </div>
                    <div
                        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#cb46ff00] to-[#766fff00] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="header">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl mb-10">Get the Right Care <br />
                                    <h2 className='mt-5'> At the Right Time!</h2></h2>
                                <hr className='w-64 font-bold' />
                                <h4 className="text-2xl tracking-tight text-white sm:text-4xl mt-4">From Best Team of</h4>
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-3">
                                    Specialists </h2>
                                <h4 className="text-2xl tracking-tight text-white sm:text-4xl mt-4">at Manipal Hospitals Pune Baner</h4>
                            </div>

                        </div>
                    </div>
                </div>
                <form onSubmit={HandleAppointment}>
                    <div className="container">


                        <div className="relative py-4 sm:max-w-3xl mx-auto  text-center -mt-36  ">
                            <div className="mt-4 bg-white shadow-2xl shadow-black text-left">
                                <div className='flex justify-center text-blue-900 font-bold text-3xl py-5'>Book An Appointment</div>
                                <div className="px-5 py-5 ">
                                    <div className='flex justify-center'>

                                        <input type="text" placeholder="Name"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            className="border rounded-md w-full h-3 px-3 py-4   font-thin text-sm hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 " />

                                        <input type="text" placeholder="Phone"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                            className="border rounded-md w-full h-3 px-3 py-4 ml-5  font-thin  text-sm hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 " />
                                    </div>
                                    <div className='flex justify-center mt-8'>

                                        <input type="text" placeholder="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            className="border rounded-md w-full h-3 px-3 py-4  font-thin text-sm hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 " />

                                        <input type="text" placeholder="Messege"
                                            value={Messege}
                                            onChange={(event) => setMessege(event.target.value)}
                                            className="border rounded-md w-full h-3 px-3 py-4 ml-5 font-thin  text-sm hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 " />
                                    </div>

                                    <div className="flex justify-center">
                                        <button type="submit" class="bg-gradient-to-r  from-blue-900 from-10% via-sky-700 via-30% to-emerald-500 to-95% ... text-white w-56 h-12 mt-12 hover:bg-purple-600  text-sm hover:opacity-60">Submit
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                        </button>
                                            
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </form>
                <div>
                    <div className='flex justify-center text-blue-900 font-bold text-3xl py-5'>Our Specialities</div>
                </div>
            </div>

        </>
    )
}



export default Header