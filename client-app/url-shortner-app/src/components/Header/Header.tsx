/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return(
    <div className='bg-slate-900 text-center font-bold  '>
        <div className='container p-2 mx-auto'> 
          <div className=''>
          <nav className='py-5'>
            <div className='bg-red-500 text-2xl text-black rounded-2xl'>URL shortner</div>
          </nav>
          </div>
        
         
        </div>
    </div>
 
  );
};

export default Header;
