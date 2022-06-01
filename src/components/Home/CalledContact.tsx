import React from 'react'

interface CalledContactProps {
    phoneNumber: string
    name: string
    surname: string
    date: string
}

const CalledContact: React.FC<CalledContactProps> = ({phoneNumber, name, surname, date}) => {
    return(
        <div className='w-1/3 bg-gray-100 p-3'>
            <div>
                <p>{name}</p>
                <p>{surname}</p>
            </div>
            <div>
                <p>{phoneNumber}</p>
            </div>
            <div>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default CalledContact