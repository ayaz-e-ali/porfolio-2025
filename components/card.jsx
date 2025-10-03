import React from 'react'

export default function Card({ title, description, image }) {
    return (
        <div className="border-neutral-700 max-w-[25rem] border rounded-xl overflow-hidden shadow-md transition duration-300 flex flex-col hover:bg-neutral-900">
            <img
                src={image}
                alt="Project screenshot"
                className="w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="mt-4">
                    <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium underline"
                    >
                        View Project →
                    </a>
                </div>
            </div>
        </div>
    )
}
