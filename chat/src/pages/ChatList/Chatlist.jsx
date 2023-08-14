import React from 'react';
import './Chatlist.css';
import profile from '../../components/images/chat.png'
import chatprofile from '../../components/images/profile.png';

const Chatlist = () => {
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

                    <div className='groups mt-2'>
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

                    <div class="chat-view">

                        <div class="chatprofile-left">
                            <div class="chat-profile-img-left">
                                <img src={chatprofile} alt="profile" width="27px" />
                            </div>
                            <div class="leftChat">
                                Hello! Everyone...
                            </div>
                        </div>


                        <div class="chatprofile-right">
                            <div class="rightChat">
                                Hello! Everyone...
                            </div>
                            <div class="chat-profile-img-right">
                                <img src={chatprofile} alt="profile" width="27px" />
                            </div>
                        </div>

                        <div class="chatprofile-left">
                            <div class="chat-profile-img-left">
                                <img src={chatprofile} alt="profile" width="27px" />
                            </div>
                            <div class="leftChat">
                                Hello! Everyone...
                            </div>
                        </div>



                        <div class="chatprofile-right">
                            <div class="rightChat">
                                Hello! Everyone...
                            </div>
                            <div class="chat-profile-img-right">
                                <img src={chatprofile} alt="profile" width="27px" />
                            </div>
                        </div>

                    </div>

                    <div className='text-input'>
                        <input type='text' id='message' name='message' placeholder='Enter your message here.....' className='message' />
                        <button className='btn btn-dark'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg></button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Chatlist