import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext/DashboardContext'

function Form() {

    const {setIsFormActive, isFormActive, postFxn, errorFxn, formState, setFormState } = useContext(AppContext);
    const [ posts, setPosts ] = postFxn;
    
    const [ errors, setErrors ] = errorFxn;
    const [ postToEdit, setPostToEdit ] = useState(null)

    let isId = false;
    const generatedId = ()=>{
        const length = 12;
        let id = '';

        const alpha = "0A1BCD_3EF@G2HIJ6KLM4NOP5QRS7TUV8WX9Y&Z";
        while(id.length < length){
            id += alpha[Math.floor(Math.random() * alpha.length)]
        }
        return id;
    }
    

    const formValidation = ()=>{
        if(formState.title && formState.description && formState.context && formState.authorName && formState.thumbnail && formState.authorPic){
            setErrors("")
            return true
        } else{
            let errorField = [];
            for(const [key, value ] of Object.entries(formState)){
                if(!value){
                    errorField.push(key)
                }
            }
            setErrors(errorField.join(", "))
            return false
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let [checkId] = posts.filter((post) => post.id === formState.id)
        if(checkId){
            let newpost = posts.filter((post) => post.id !== checkId.id)
            setPosts([...newpost, formState])
        }
        else {
            if(!formValidation()) return;
            setPosts([...posts, {...formState, id: generatedId()}])
            console.log(formState)
        }

        setIsFormActive(!isFormActive)
    }

    

    // HANDLE INPUT
    const handleInput = (e)=>{
        if(formState.id){
            isId = true
            if(e.target.type === "file"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
            } 
            else{
                setFormState({...formState, [e.target.id]: e.target.value})
            }
        }
        else{
            isId = false;
            if(e.target.type === "file"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
            } else{
                setFormState({...formState, [e.target.id]: e.target.value})
            }
        }
    }


    return (
        <div className='top-wrapper form-wrapper'>
            <div className="form-container">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Title
                        <input value={formState.title} id='title' type="text" placeholder='Title' onChange={handleInput}/>
                    </label>

                    <label htmlFor="authorName">
                        Author Name
                        <input value={formState.authorName} id='authorName' type="text" placeholder='Author name' onChange={handleInput}/>
                    </label>

                    <label htmlFor="authorTitle">
                        Author Title
                        <input id='authorTitle' type="text" value={formState.authorTitle}placeholder='Author position' onChange={(e) => handleInput(e)} />
                        
                    </label>

                    <label htmlFor="authorPic">
                        Author Picture
                        <input id='authorPic' type="file"  
                        files={formState.authorPic} onChange={(e) => handleInput(e)}/>
                    </label>

                    <label htmlFor="thumbnail">
                        Thumbnail
                        <input id='thumbnail'  type="file"  onChange={(e) => handleInput(e)}/>
                    </label>

                    <label htmlFor="description">
                        Post Description
                        <textarea value={formState.description} id="description" placeholder='Post Description' onChange={(e) => handleInput(e)}></textarea>
                    </label>
                    <label htmlFor="context">
                        Post Context
                        <textarea value={formState.context} id="context" placeholder='Post Context...' onChange={(e) => handleInput(e)}></textarea>
                    </label>
                    {errors && <div className="error">Please include {errors}</div>}
                    <button className="submit-form">Add Post</button>
                </form>
            </div>
            <button className="back-to-dashboard" onClick={()=> setIsFormActive(!isFormActive)}>Back ➡️</button>
        
        </div>
    )
}

export default Form
