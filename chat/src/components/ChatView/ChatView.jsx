import React from 'react';
import './ChatView.css';
import Navbar from '../Navbar/Navbar';
import Chatlist from '../../pages/ChatList/Chatlist';


const ChatView = () => {
  return (
    <>
    <Navbar/>
    <Chatlist/>
    </>
  )
}

export default ChatView