import React from 'react';
import { FaEnvelopeOpenText, FaCartPlus } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle, IoIosPaper, IoMdPeople } from "react-icons/io";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiFillHome />,
    cName: 'navText'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper />,
    cName: 'navText'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />,
    cName: 'navText'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoMdPeople />,
    cName: 'navText'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelopeOpenText />,
    cName: 'navText'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoMdHelpCircle />,
    cName: 'navText'
  }
];