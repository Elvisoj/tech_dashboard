import React, { createContext, useState } from 'react'
import SettingIcon from '../assets/setting.svg'
import ElvisPic from '../assets/elvis.jpg'
import UserIcon from '../assets/user.svg'
import AllPostIcon from '../assets/allpost.png'
import AddIcon from '../assets/add.png'
import UserProfile from '../assets/UserProfile.png'
import Logo from '../assets/technitol-logo.svg'

export const AppContext = createContext();

const DashboardContext = (props) => {
    const defaultPost =  [
        {
        title: "The Rise of Bitcoin and Gofed Coin",
        description: "We are excited to introduce our services to you. We are talent individuals of all types of skills who main offer services like;",
        context: "Our team is committed to delivering high-quality services that meet your school's visual communication needs. Our Services- Graphics Design Brochures, flyers, posters, business cards, and more - Typing Services Documents, reports, presentations, and digital content",
        authorName: "John Harrison",
        authorTitle: "Professor",
        thumbnail: null,
        authorPic: null,
        isEditing: false,
        id: 123
        },
        {
        title: " THe Flash Disapperas in Crisis",
        description: "We are excited to introduce our services to you. We are talent individuals of all types of skills who main offer services like;",
        context: "If you have any upcoming projects or require our services, please do not hesitate to contact us. We look forward to discussing how Eoj Graphix can support your school visual communication needs",
        authorName: "Eobard West",
        authorTitle: "Reverse Flash",
        thumbnail: null,
        authorPic: null,
        isEditing: false,
        id: 124
        },
        {
        title: "All for One one for all",
        description: "We are excited to introduce our",
        context: "Our team is committed to delivering high-quality services that meet your school's visual communication needs. Our Services- Graphics Design Brochures, flyers, posters, business cards, and more - Typing Services Documents, reports, presentations, and digital content",
        authorName: "Young Midoriya",
        authorTitle: "Hero All",
        thumbnail: null,
        authorPic: null,
        isEditing: false,
        id: 125
        },
    ];
    const formStateData = {
        title: "",
        description: "",
        context: "",
        thumbnail: null,
        authorPic: null,
        authorName: "",
        authorTitle: "",
        isEditing: false
    };
    


    const postFxn= useState(defaultPost);
    const errorFxn= useState('');
    const postToEditFxn= useState(null);
    const [ postToEdit, setPostToEdit ] = postToEditFxn

    const [posts, setPosts]= postFxn;
    const [formState, setFormState] = useState(formStateData)

    
    // BOOLEAN LOGIC
    


    const [ isSettingActive, setIsSettingActive] = useState(false)
    const [ isDisplayPost, setIsDisplayPost] = useState(false)
    const [ isFormActive, setIsFormActive] = useState(false)

    
    const handleDelete = (postId)=>{
        setPosts(posts.filter(post => post.id !== postId))
    }

    const handleFormEdit = (postId)=>{

        let [m] = posts.filter(post => post.id === postId)
        setFormState(m)
        console.log(m)
        setIsDisplayPost(!isDisplayPost)
        setIsFormActive(!isFormActive)
    }
    

    const data = {
        SettingIcon,
        UserIcon,
        ElvisPic,
        AllPostIcon,
        AddIcon, 
        UserProfile,

        postFxn,
        errorFxn,
        formState, 
        setFormState,
        postToEdit,
        posts,
        formStateData,

        //BOOLEAN LOGIC
        isDisplayPost, setIsDisplayPost,
        isFormActive, setIsFormActive,
        isSettingActive, setIsSettingActive,
        Logo,
        
        handleFormEdit,
        handleDelete
    };

    return (
        <AppContext.Provider value={data}>
            {props.children}
        </AppContext.Provider>
    )
}

export default DashboardContext
