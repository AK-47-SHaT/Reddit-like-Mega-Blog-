import React , {useState, useEffect } from 'react'
import service from '../appwrite/config'
import { useParams , useNavigate } from 'react-router-dom'
import { Container , PostForm} from '../components'

function EditPost() {
    const navigate = useNavigate()

    const [post, setPost] = useState()
    const {slug}=useParams()

    if(slug){
        service.getPost(slug).then((post)=>{
            if(post)
                setPost(post)
        }
        )
    }
    else navigate("/")

  return post ? (
    <div className='py-8'>
    <Container>
        <PostForm post={post}/>
    </Container>
    </div>
  ) : null
}

export default EditPost