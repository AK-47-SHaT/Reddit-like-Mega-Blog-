import React ,{useState , useEffect}from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts,setPosts]=useState([])

    useEffect(() => {
      const posts = service.getPosts([]).then(
        
        (posts)=>{
            if(posts)
            setPosts(posts.documents)
        }
      )
    
      
    }, [])
    

  return (
    <div>
         <Container>
            <div className='flex flex-wrap'>
        {
            posts.map(post=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post}/>
                </div>
            )) 
        }
        </div>
        </Container>
    </div>
  )
}

export default AllPost