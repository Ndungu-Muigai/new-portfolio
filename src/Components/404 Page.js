import Image from '../assets/Images/Error.png'
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Error.css'

const ErrorPage = () => 
{
    const navigate=useNavigate()
    return (  
        <>
            <div className='error-message flex flex-col items-center justify-center'>
                <img src={Image} alt='404 Error' className='w-1/2'/>
                <h1>404- Page Not Found</h1>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
                <button className="mb-3" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </>
    );
}
 
export default ErrorPage;