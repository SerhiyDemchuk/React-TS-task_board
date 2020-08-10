import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
        <h1>Information page</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio aliquam impedit nam corporis exercitationem earum molestiae sit delectus magni.
            </p>
        <button className="btn" onClick={() => history.push('/')}>Back to event list</button>
        </>
    )
}