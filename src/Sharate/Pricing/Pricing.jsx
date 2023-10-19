import { BsCheck } from 'react-icons/bs';
import img1 from '../../assets/image/Pricing-table-img-01.png'
import img2 from '../../assets/image/Pricing-table-img-02.png'
import img3 from '../../assets/image/Pricing-table-img-03.png'

const Pricing = () => {
    return (
        <div className='bg-[#052046] p-8 md:p-20'>
            

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                <div className="card  w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold text-white mb-3'>Superb</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$140</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
                <div className="card w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold text-white mb-3'>Luxory</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$150</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
                <div className="card w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold text-white mb-3'>Premium</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$190</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Pricing;