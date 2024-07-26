import React from 'react';
import Layout from '../components/Layout/Layout';
import whatsappGif from '../components/Assets/whatsapp.gif'; // Adjust the path as needed
import Github from '../components/Assets/github-logo.png'; // Adjust the path as needed
import Netlify from '../components/Assets/Netlify.png'; // Adjust the path as needed
import Call from '../components/Assets/Call.jpg'; // Adjust the path as needed


const Contact = () => {
  return (
   <Layout title={'Contact Page'}>
     <div className="flex flex-col min-h-screen">
   

   <main className="flex-grow container mx-auto p-4 flex">
     <div className="w-full md:w-1/2 flex justify-center items-center p-4">
       <img
         src="https://www.pngkit.com/png/detail/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png"
         alt="Portrait"
         className="rounded-full w-100 h-48 md:w- md:h-100"
       />
     </div>
     <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
       <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
       <p className="mb-4">Feel free to reach out to me on WhatsApp or through my social media channels.</p>

       <a
         href="https://wa.me/+919319342061"
         className="mb-4 flex items-center text-green-500 hover:text-green-600"
         target="_blank"
         rel="noopener noreferrer"
       >
        <img src={whatsappGif} alt="WhatsApp" className="mr-2 w-10" />

         WhatsApp
       </a>
       <a
         href="tel:+919319342061"
         className="mb-4 flex items-center text-green-500 hover:text-green-600"
         target="_blank"
         rel="noopener noreferrer"
       >
        <img src={Call} alt="WhatsApp" className="mr-2 w-10" />

         Call Now
       </a>
       <a
         href="https://www.linkedin.com/in/paritosh-chauhan-629b7a1aa/"
         className="mb-4 flex items-center text-blue-600 hover:text-blue-700"
         target="_blank"
         rel="noopener noreferrer"
       >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"> <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path> </svg>


         LinkedIn
       </a>
       <a
         href="https://paritosh.netlify.app"
         className="mb-4 flex items-center text-blue-400 hover:text-blue-500"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={Netlify} alt="Twitter" className="mr-2 w-10" />
         Portfolio
       </a>
       <a
         href="https://github.com/Paritoshchauhan89"
         className="mb-4 flex items-center text-gray-800 hover:text-gray-900"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={Github} alt="GitHub" className="mr-2 w-10" />
         GitHub
       </a>
     </div>
   </main>


 </div>
   </Layout>
  );
};

export default Contact;
