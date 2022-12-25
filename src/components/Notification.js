import { React, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Notification() {


    const [style, setStyle] = useState(" items-center text-white flex bg-[#9f5030] font-semibold justify-center")

    const handleClose = () => {
        setStyle(style + " hidden")
    }
    return (
        <div className={style}>
            <h2 >
                Hurry up it's 40% off now
            </h2>
            <CloseIcon className='cursor-pointer hover:scale-90'
                onClick={handleClose} />
        </div>
    )
}

export default Notification