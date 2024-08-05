import React from 'react'

type props = {
    title: string,
    shortDescription: string,
    longDescription: string
    
}

export default function GlobalBigHeader({ title, shortDescription: description, longDescription }: props) {
    return (
        <div className=" mt-20 flex flex-col items-center justify-center w-full h-full text-center">
            
            <div>

                <h1 className="text-6xl md:text-4xl lg:text-6xl font-extrabold uppercase text-white drop-shadow-lg">
                {title}
                </h1>
                <p className="text-xl mx-auto mb-10 text-gray-300 mt-6 max-w-xl">
                    {description}
                </p>
            </div>
            

            <p className="text-xl text-gray-300 mt-6 max-w-xl">
                {longDescription}
            </p>
        </div>
    )
}
