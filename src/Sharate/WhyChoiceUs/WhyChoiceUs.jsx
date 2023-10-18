import { FaCarAlt, FaCarCrash, FaRecycle, } from 'react-icons/fa';

const WhyChoiceUs = () => {
    return (
        <div className="bg-white pt-12">
            <div className="w-2/3 mx-auto">
                <div className="content text-center ">
                    <h1 className="text-xl mb-5 md:text-4xl">WHY CHOOSE US?</h1>
                    <p>Explore our exclusive showroom featuring a diverse range of luxury vehicles, including BMW, Maserati, Mercedes-Benz, and more. Discover automotive excellence with every brand, and find your perfect ride at [Automotive].</p>

                </div>
                <div className="flex justify-between gap-8 items-center text-center pt-8">
                    <div className='bg-[#052046] p-10 rounded text-white'>
                        <FaCarAlt className='mx-auto text-5xl mb-3'></FaCarAlt>
                        <h3 className='text-xl mb-2 font-semibold'>Buy and Sale Vehiclese</h3>
                        <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>
                    <div className='bg-[#052046] p-10 rounded text-white'>
                    <FaCarCrash className='mx-auto text-5xl mb-3'></FaCarCrash>
                    <h3 className='text-xl mb-2 font-semibold'>Vehicles Rental Service</h3>
                    <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>
                    <div className='bg-[#052046] p-10 rounded text-white'>
                    <FaRecycle className='mx-auto text-5xl mb-3'></FaRecycle>
                    <h3 className='text-xl mb-2 font-semibold'>Vehicles Servicing</h3>
                    <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyChoiceUs;