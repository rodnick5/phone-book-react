import React from 'react'
import { useSelector } from 'react-redux'
import { CalledItemType } from '../../reducers/called'
import { RootState } from '../../shared/store'
import CalledContact from './CalledContact'

const Home: React.FC = ( ) => {
    const called: any = useSelector<RootState>((state) => state.called.called)
    return (
        <div>
            {called.map( ({name, surname, phoneNumber, date}: CalledItemType, index: number) => <CalledContact key={index} name={name} surname={surname} phoneNumber={phoneNumber} date={date} />)}
        </div>
    )
}

export default Home