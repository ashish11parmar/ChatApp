import React, { useState, useEffect } from 'react';
import './Chatlist.css';
import { auth, db } from '../../components/DatabaseConfig/config.js';
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, limit } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
import profile from '../../components/images/chat.png'


const Chatlist = () => {
    const [messages, setMessage] = useState("");
    const [FetchMsg, setFetchMsg] = useState([]);
    // const [user] = useAuthState(auth);


    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50))

        const msg = onSnapshot(q, (QuerySnapshot) => {
            const fetchmsg = [];
            QuerySnapshot.forEach((doc) => {
                fetchmsg.push({ ...doc.data(), id: doc.id });
            });
            // console.log('fetchmsg', fetchmsg);
            setFetchMsg(fetchmsg);
        });
        return () => msg
    }, []);
    // console.log(FetchMsg);

    const sendMessage = async (event) => {
        event.preventDefault();

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: messages,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,

            
        });
        
        setMessage("");
        if (messages.trim() === "") {
            alert("Enter valid message");
            return;
        }
    };



    return (
        <>
            <div className='chat-list'>
                <div className='left'>
                    <div className='group-name'>
                        Groups
                    </div>
                    <hr className='line' />


                    <div className='groups'>
                        <div className='profile-image'>
                            <img src={profile} width='60px' alt='logo' />
                        </div>
                        <div className='group-text'>
                            <h3>Hello </h3>
                            <small>Click here for the message...</small>
                        </div>
                    </div>

                </div>


                <div className='right'>
                    <div className='group-name'>
                        Group_Name
                    </div>
                    <hr className='line' />

                    <div className="chat-view">



                        {

                            FetchMsg.map((chatdata, index) => {
                                return (
                                    <div className="chatprofile-right" key={index}>
                                        <div className="rightChat">
                                            {chatdata.text.toString()}

                                        </div>
                                        <div className="chat-profile-img-right">
                                            <img src={chatdata.avatar} alt="profile" width="27px" />
                                        </div>
                                    </div>

                                )
                            }).reverse()
                        }
                    </div>

                    <div className='text-input'>
                        <form onSubmit={(event) => sendMessage(event)} className="send-message">
                            <input type='text' id='message' onChange={(e) => setMessage(e.target.value)} value={messages} name='message' placeholder='Enter your message here.....' className='message' />
                            <button className='btn btn-dark'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg></button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chatlist