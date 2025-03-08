/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

 
interface IFormContainerProps {
  updateReloadState:()=>void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl,setFullUrl]=React.useState<string>("");
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`,{
        fullUrl:fullUrl
      });
      setFullUrl("");
      updateReloadState();
      
    } catch (error) {
      console.log(error);
    }
  }
  return(
   <div className='container mx-auto p-2'>
    <div className="bg-[url('./src/assets/Bg.jpg')] my-8 rounded-xl bg-cover bg-left">
    <div className='w-full h-full rounded-xl p-20 backdrop-brightness-75'>
        <h2 className='text-white text-center text-3xl py-4'> URL shortner</h2>
        <p className='text-white text-xl text-center font-extralight pb-4'>Paste your untidy link to shorten it</p>
        <p className='text-white text-lg text-center font-thin pb-4'>
            free tool to shorten a URL or reduce link,Use our URL shortner to create a shortened & neat link making it easy to use
        </p> 
       <form onSubmit={handleSubmit}>
        <div className='flex'>
          <div className='relative w-full'>
            <div className='text-black inset-y-0 start-0 absolute flex items-center ps-2 pointer-events-none '>
              urlshortner.link /
            </div>
            <input type="text" required className='w-full bg-white ps-33 p-4 text-grey-900 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='add your link'
            value={fullUrl}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFullUrl(e.target.value)}
            /> 
            <button type='submit'className='absolute inset-y-0 text-sm font-medium text-white bg-blue-600 end-0 rounded-lg h-full p-2 border border-blue-600 focus:ring-2 focus-outline-none focus:ring-blue-200'>Shorten URL</button>
            
          </div>
        </div>
       </form>

    </div>
    </div>
   </div>
  );
}
 
export default FormContainer;
