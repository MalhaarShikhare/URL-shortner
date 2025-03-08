/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return(
    <div
    className='text-base text-white bg-slate-900 text-center py-5 '>
     Copyright &#169; URLShortner | Malhaar Shikhare
    </div>
  );
};

export default Footer;
