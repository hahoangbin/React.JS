
import { useEffect, useState } from 'react'

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const tabs = ['posts', 'comments', 'albums']
    const [type, setType] = useState('posts')
    const [showScrollTop, setShowScrollTop] = useState(false)


    useEffect(() => {
        document.title = title

        // Call API
        fetch('https://jsonplaceholder.typicode.com/' + type)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts)
            })

    }, [type])
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if(window.scrollY >=300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        // Cleanup function / ham don dep
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    
    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setType(tab)}
                        style={type == tab ? {
                            background: '#333',
                            color: '#fff'
                        } : {}}>
                        {tab}</button>
                ))}              
                {showScrollTop && <button className='btn-scroll-top' onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth' // Cuộn mượt đến đầu trang
                    });                
                }}>Scroll top</button>}
            </div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <ul>
                {posts.slice(0, 50).map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content
