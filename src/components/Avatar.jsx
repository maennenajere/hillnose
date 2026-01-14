import React from 'react';
import avatar from '../assets/photo/avatar.webp';

const Avatar = () => {
    return (
        <div className="flex justify-center">
            <img
                src={avatar}
                alt="Avatar"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-white shadow-lg transition-transform duration-300 ease-out hover:scale-105 select-none"
            />
        </div>
    );
};

export default Avatar;