import { useState, useEffect } from 'react'

function CountDown() {
    const [countdowm, setCountdown] = useState(180)
    const [avatar, setAvatar] = useState()

    const handlePreviewAvatar = (e) => {
        console.log(e);
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    useEffect(() => {
        //
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    useEffect(() => {
        const timeID = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(timeID)
        }
    }, [])

    return (
        <div>
            <h1>{countdowm}</h1>
            <input type='file' onChange={handlePreviewAvatar}/>
            {avatar && (
                <img src={avatar.preview} alt='' width="40%"/>
            )}
        </div>
    )
}

export default CountDown