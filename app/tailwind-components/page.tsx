import ComponentCard from '@/components/Global/ComponentsCard'
import React from 'react'
import { IoHeartDislikeCircleOutline } from 'react-icons/io5'
import { FaRegAddressCard } from "react-icons/fa6";


export default function page () {

    return (
        <div className="flex flex-wrap mt-20 justify-center gap-4 w-[70%] mx-auto">
            <ComponentCard 
                title='Card Sections' 
                icon={<FaRegAddressCard size={40} />} 
                description='10 Components'
            />
        </div>

    )
}
