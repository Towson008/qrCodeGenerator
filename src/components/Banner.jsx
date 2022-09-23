import React from 'react';
import imgs from '../img/qr-code.svg';
import spinner from '../img/Spinner-1s-200px.svg';


function Banner() {
  const form = document.getElementById('generate-form');
  const qr =document.querySelector('#qrcode');

  // const onGenerateSubmit = (e) => { 
  //       e.preventDefault();
        
  //       const url = document.getElementById('url').value;
  //       const size = document.getElementById('size').value;     
  //       if (url === ''){
  //           alert('Please enter a valid url');
  //       }else{
  //           showSpinner();
  //           setTimeout(() =>{
  //               hideSpinner();  
  //           }, 4000);
  //       }
  //   };
  //       const showSpinner = () =>{
  //           document.getElementById('spinner').style.display = 'block';
  //       }
  //       const hideSpinner = () =>{
  //           document.getElementById('spinner').style.display = 'none';
  //       }
  //   hideSpinner();
  //   form.addEventListener('submit', onGenerateSubmit);
  return (
      <main>
      <div className="flex flex-col-reverse align-center justify-center p-5 m-auto 
      md:max-w-5xl md:flex-row"> 
        <div className="w-full md:w-2/3 mr-24">
        <h1 className="text-3xl font-bold mb-5 md:text-4xl">
          QR Code Generator
        </h1>
        <p className='mb-4'>
          QR code allows you to generate code for your website with just a scan from your smartphone camera.
        </p>
        <form id="generate-form" className='mt-4'>
                <input type="url" id='url'
                placeholder='Enter your URL here'
                className="w-full border-2 border-gray-200 
                rounded p-3 text-gray-dark mr-2 
                focus:outline-none mb-5" />
                <select name="" id="size" 
                className="w-full border-2 border-gray-200 
                rounded p-3 text-gray-dark mr-2 
                focus:outline-none">
                <option value="100">100x100</option> 
                <option value="200">200x200</option>
                <option value="300" >300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
                <option value="600">600x600</option>
                </select>
                <button 
                className="bg-gray-600 rounded 
                w-full text-white py-3 px-4 mt-5 
                hover:bg-black" type='submit'>
                    Generate QR CODE
                </button>
        </form>
      </div>
      <div className="w-full md:w-1/3 self-center">
        <img src={imgs} className="w-1/2 m-auto mb-10 md:w-full" alt="" />
      </div>
    </div>
    <div className="max-w-5xl m-auto flex flex-col text-center
    align-center justify-center mt-20">
        <div className="" id="spinner" role="status">
            <img src={spinner} alt="loader" />
            <span className='sr-only'>Loading</span>
        </div>
        <div className="m-auto" id="grcode"></div>
    </div>
    </main>
  )
}

export default Banner