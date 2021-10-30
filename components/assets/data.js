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
        url: '#about',
        icon: FiUser,

    },
    {
        id: 2,
        text: 'Projects',
        url: '#projects',
        icon: FiFolder,
    },
    {
        id: 3,
        text: 'Blog',
        url: '/blog',
        icon: FiPenTool,
    },
    {
        id: 4,
        text: 'Contact',
        url: '#contact',
        icon: FiPhone,
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


export const items = [
    {
        id: '01',
        title: 'Coffe Shop Landing Page',
        desc: '5 bucks is a coffee shop landing page concept. The idea is to get a coffee delivered faster at no cost higher than 5 bucks. They also offer delivery as service.',
        image: './5Bucks.png',
        url: '/',
    },
    {
        id: '02',
        title: 'TradR Crypto Landing Page',
        desc: 'TradR is a crypto landing page concept. The idea is to be able to buy and sell any cryptocurrency as fast as possible from anywhere with low cost.',
        image: './TradR.png',
        url: '/',
    },
    {
        id: '03',
        title: 'Cryptol Onboarding Screen',
        desc: 'Cryptol is a cryptocurrency wallet. It is aimed as a storage wallet for crypto traders and non-traders i.e any individual wishing to hodl crypto. You can also buy and sell easily.',
        image: './cryptol.png',
        url: '/',
    },
    
]