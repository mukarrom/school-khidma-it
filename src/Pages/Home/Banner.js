import React from 'react';
import Carousel from './Carousel';
import CornerL from './CornerL';
import CornerR from './CornerR';

const Banner = () => {
    return (
        <div className='md:grid grid-cols-4 max-h-80'>
            <div className="left-corner space-y-4 bg-slate-100 col-span-1">
                <CornerL />
            </div>
            <div className="col-span-2 mx-6">
                <Carousel className=''></Carousel>
            </div>
            <div className="right-corner col-span-1">
                <CornerR/>
            </div>
        </div>
    );
};

export default Banner;