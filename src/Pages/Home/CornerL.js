import React from 'react';

const CornerL = () => {

    return (
        <div className='space-y-2'>
            <div className="h-40">
                <div>
                    <h6 className='uppercase text-[1.2vw] font-semibold bg-gradient-to-l from-[rgb(0,159,253)] to-[rgb(42,42,114)] text-white p-2 m-0'>Chairman's Corner</h6>
                </div>
                <div className="grid grid-cols-3 bg-gradient-to-t from-[rgb(0,159,253)] to-[rgb(42,42,114)] text-white">
                    <div className="col-span-1">
                        <img src="https://rajukcollege.net/Uploads/RUMC/Md.%20Abu%20Bakr%20Siddique.jpg" alt="Chairman" className='w-full h-full' />
                    </div>
                    <div className="content col-span-2 px-2 pt-2">
                        <h2 className='text-[1.5vw] m-0'>Md. Abu Bakr Siddique</h2>
                        <p className='m-0'>It is a great pride and pleasure f...</p>
                        <a href="#" className='block text-right text-sm font-semibold m-0' >read more...</a>
                    </div>
                </div>
            </div>
            {/* ---------------- */}
            <div className="h-40">
                <div>
                    <h6 className='uppercase text-[1.2vw] font-semibold bg-gradient-to-l from-[rgb(0,159,253)] to-[rgb(42,42,114)] text-white p-2 m-0'>PRINCIPAL'S CORNER
</h6>
                </div>
                <div className="grid grid-cols-3 bg-gradient-to-t from-[rgb(0,159,253)] to-[rgb(42,42,114)] text-white">
                    <div className="col-span-1">
                        <img src="https://rajukcollege.net/Uploads/RUMC/Principal%20photo.jpg" alt="Chairman" className='w-full h-full' />
                    </div>
                    <div className="content col-span-2 px-2 pt-2">
                        <h2 className='text-[1.5vw] m-0'>Brig. General Taef Ul Haq, ndc, psc, G</h2>
                        <p className='m-0'>The magnificently designed Raju...</p>
                        <a href="#" className='block text-right text-sm font-semibold m-0' >read more...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CornerL;