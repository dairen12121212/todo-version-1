import './NotFoundPage.css'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <div className='not-found-page__title'>Page Not Found </div>
            <Link className='not-found-page__link' to={'/'}>Go Home</Link>
        </div>
    )
}