import { Icon } from "@chakra-ui/react"
import {  
    FiHome, 
    FiUser, 
    FiPenTool, 
    FiPhone, 
    FiFolder, 
    FiGithub, 
    FiTwitter, 
    FiMail
} from "react-icons/fi"


const links = [
    {
      id: 0,
      text: 'Home',
      url: '/',
      icon: FiHome,
    },
    {
        id: 1,
        text: 'About',
        url: '/about',
        icon: FiUser,

    },
    {
        id: 2,
        text: 'Projects',
        url: '/projects',
        icon: FiFolder,
    },
    {
        id: 3,
        text: 'Blog',
        url: '/blog',
        icon: FiPenTool,
    }
]


export default links

export const socials = [
    {
        id: 1,
        icon: <Icon as={FiMail} />
,
        url: 'mailto:bellololade2017@gmail.com',
    },
    {
        id: 2,
        icon: <Icon as={FiGithub} />
,
        url: 'https://github.com/Haryor-Mhie-max',
    },
    {
        id: 3,
        icon: <Icon as={FiTwitter} />
,
        url: 'https://mobile.twitter.com/hey_Ololade',
    },
]
