import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                {/* <img src={} alt="logo" className='w-32 cursor-pointer' /> */}
                <h1 className='w-32 cursor-pointer text-white'>Crypto</h1>
            </div>
        </nav>
    );
}

export default Navbar;
