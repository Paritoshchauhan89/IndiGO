import React from 'react';
import pdfFile from '../components/Assets/Document/IndigoCasestudy.pdf'; // Adjust the path to the PDF file
import Layout from '../components/Layout/Layout';

const CaseStudy = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Hack_to_hire_Case_study_Full_Stack_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <Layout title={'Case Study'}>
      <div className="flex flex-col min-h-screen">


      <main className="flex-grow container mx-auto p-4 w-auto">
        <div className="bg-white shadow-md rounded leading-custom p-8">
        <div className="header">
  <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png" alt="IndiGO" width={150}/>
</div>
          <h1 className="text-2xl font-bold mb-4">Hack to Hire 2024</h1>
          <h2 className="text-xl font-semibold mb-2">Case study for full stack developer</h2>
          <p className="mb-2"><strong>Problem Statement:</strong> Flight Status and Notifications</p>
          <p className="mb-4">
            <strong>Description:</strong> Develop a system to provide real-time flight status updates and notifications to passengers.
          </p>

          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Real-time Updates: Display current flight status (delays, cancellations, gate changes).</li>
                <li>Push Notifications: Send notifications for flight status changes via SMS, email, or app notifications. You can use Kafka, RabbitMQ, etc.</li>
                <li>Integration with Airport Systems: Pull data from airport databases for accurate information. We will give you mock data.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Technologies:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Frontend: HTML, CSS, React.js.</li>
                <li>Backend: Python, Go, Java.</li>
                <li>Database: MongoDB, PostgreSQL.</li>
                <li>Notifications: Firebase Cloud Messaging, Kafka, RabbitMQ, etc.</li>
              </ul>
            </li>
            <li>
              <strong>How to share your solution?</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Upload your Code on GitHub Repository.</li>
                <li>Make your Git repo Public and share the link in the Microsoft Form.</li>
                <li>Summarize your work in the readme, mention the tech stack front end and backend used in the project and additional tools and library you may have used.</li>
              </ul>
            </li>
          </ol>

       
        </div>
        <div className="text-center">
            <button
              onClick={handleDownload}
              className="px-4 py-2 m-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Download PDF
            </button>
          </div>
      </main>


    </div>
  </Layout>
  );
};

export default CaseStudy;
