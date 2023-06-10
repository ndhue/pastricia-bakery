import React from 'react'
export default function NewsAndPromotions() {
    return (
        <div className="text-tertiary pt-[140px]">
            <div className="title text-3xl lg:text-4xl text-center py-6">
                <h1>NEWS</h1>
            </div>
            <div className="content px-6">
                <div className="card bg-secondary grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="img md:col-span-1 col-span-2">
                        <img src='../assets/news/news1.png' alt='' className='w-full' />
                    </div>
                    <div className="text p-10 md:p-28 md:col-span-1 col-span-2">
                        <h1 className='md:text-6xl text-4xl md:pb-8 pb-6'>Catering & Events</h1>
                        <p className='md:text-lg text-base'>Invite Pastrica Bakery to your next party or event no occasion is too large or too small.</p>
                        <p className='md:text-lg text-base'>Get in touch with our catering team, and we’ll work with you to create the sweetest experience possible.</p>
                    </div>
                </div>
                <div className="hidden card md:grid grid-cols-1 md:grid-cols-2 items-center border">
                    <div className="text p-10 md:p-24 md:col-span-1 col-span-2">
                        <h1 className='md:text-6xl text-4xl md:pb-8 pb-6'>Same-Day Local Delivery & Pick Up</h1>
                        <p className='md:text-lg text-base'>Want your delicious treats ASAP? Order for local delivery or pick up at your nearest Pastrica Bakery and enjoy them today!</p>
                    </div>
                    <div className="img md:col-span-1 col-span-2">
                        <img src='../assets/news/news2.png' alt='' className='w-full' />
                    </div>
                </div>
                <div className="grid card md:hidden grid-cols-1 md:grid-cols-2 items-center border">
                    <div className="img md:col-span-1 col-span-2">
                        <img src='../assets/news/news2.png' alt='' className='w-full' />
                    </div>
                    <div className="text p-10 md:p-24 md:col-span-1 col-span-2">
                        <h1 className='md:text-6xl text-4xl md:pb-8 pb-6'>Same-Day Local Delivery & Pick Up</h1>
                        <p className='md:text-lg text-base'>Want your delicious treats ASAP? Order for local delivery or pick up at your nearest Pastrica Bakery and enjoy them today!</p>
                    </div>
                </div>
                <div className="card bg-secondary grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="img md:col-span-1 col-span-2">
                        <img src='../assets/news/news3.png' alt='' className='w-full' />
                    </div>
                    <div className="text p-10 md:p-32 md:col-span-1 col-span-2">
                        <h1 className='md:text-6xl text-4xl md:pb-8 pb-6'>Advance Order for Pick Up</h1>
                        <p className='md:text-lg text-base pr-3'>Advance ordering for local pick up is available at all of our locations. Schedule your next order now!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}