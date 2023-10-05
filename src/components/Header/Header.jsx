import moment from 'moment/moment';
import image from '../../assets/logo.png'
import { useEffect, useState } from 'react';
const Header = () => {
    const [time,setTime]=useState(null)
    useEffect(()=>{
        setInterval(()=>{
            setTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

        },1000)
    },[time])
    return (
        <div className='flex justify-center items-center w-full '>
            <div className=' text-center space-y-3 '>
                <img src={image} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{time?time:'Time is Loading...'}</p>
                {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}

            </div>
            
        </div>
    );
};

export default Header;