import React from 'react'
import { useState } from "react";
import lummi_img from '../img/Image  --lummi.jpg';
import basic_img from '../img/basic.png';
import pope_smoke from'../img/pope_smoke.jpg'

function HeroSection() {

    const [imageData, setImageData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [confidenceLevel, setConfidenceLevel] = useState('');

    const fileValue = (event) => {
        const file = event.target.files[0];
            if (file) {
                setSelectedFile(event.target.files[0]);
                const fileName = file.name;
                const fileExtension = fileName.split('.').pop().toLowerCase();

            // Check if the file extension is one of the supported formats
            if (['jpg', 'jpeg', 'png', 'svg', 'gif'].includes(fileExtension)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                setImageData(reader.result);
                };
                reader.readAsDataURL(file);

                // Display the file name
                document.getElementById("filename").textContent = fileName;
            } else {
                // Handle unsupported file formats
                alert('Unsupported file format! Please select a JPG, JPEG, PNG, SVG, or GIF file.');
                // Reset the input field
                event.target.value = '';
            }
            let section = document.getElementById("next");
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }


    const handleSubmit = () => {
        if (!selectedFile) {
          alert('Please select an image.');
          return;
        }
    
        const formData = new FormData();
        formData.append('image', selectedFile);
    
        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            setPrediction(data.prediction);
            setConfidenceLevel(data.confidence_level);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };

  return (
    <>
        <section className="mx-auto bg-[#000]">
            <div className="md:flex md:mx-[10%] lg:mx-[15%] w-full py-[15%] md:py-[5%] pb-[6%]">
                <div className="md:w-[50%] w-full">
                    <div className="flex justify-center md:block">
                        <img src={lummi_img} alt='ai_image'/>
                    </div>
                    <h1 className="text-[4rem] md:text-[3rem] lg:text-[5rem] my-5 text-white leading-[4.5rem] text-center md:text-start">Real or AI-Generated?</h1>
                    <h2 className="text-[20px] md:text-[25px] text-white my-6 leading-10 text-center md:text-start">Upload your image to find out now!</h2>
                </div>
                <div className="w-full md:w-[30%] flex justify-center items-center">
                    <div className="image-upload mb-[10rem] md:mb-[30%] relative mx-auto overflow-hidden max-w-[360px] p-6 rounded-lg cursor-pointer border border-gray-400" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <input type="file" name="" id="logo" onChange={fileValue}/>
                        <label htmlFor="logo" className="upload-field" id="file-label">
                            <div className="file-thumbnail cursor-pointer">
                                <img id="image-preview" src={imageData || basic_img} className="mx-auto cursor-pointer" alt=""/>
                                <h3 className="cursor-pointer" id="filename">
                                    <p className="inline-block p-[8px] text-lg w md:w-[6rem] lg:w-[10rem] text-white cursor-pointer bg-[#671abe] rounded m-2">Upload</p> 
                                    <p className="text-gray-700">Upload or Drag and Drop a file</p>
                                </h3>
                                <p className="text-gray-700 text-[12px] mb-0">Supports JPG, PNG, SVG</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex justify-center">
            <div className="p-[10%]">
                <h1 id="next" className="text-5xl font-bold text-white text-center md:text-start">AI Image Detector</h1>
                <p className="md:w-[50%] my-5 text-white text-center md:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora libero esse ut.sit amet consectetur, adipisicing elit. Tempora libero esse ut.</p>
                <div className="md:flex">
                    <div className="border border-gray-700 h-[26rem] w-full md:w-[50%] rounded-2xl">
                        <img src={imageData || pope_smoke} className="img_placeholder h-full w-full rounded-2xl object-cover" alt='pope_smalking'/>
                    </div>
                    <div className=" w-full md:w-[50%] my-10 md:my-0">
                        <div className="md:px-10">
                            <div className="flex justify-center p-4 bg-[#8c27ff] hover:bg-[#8c27ffc4] rounded-md hover:shadow-lg cursor-pointer">
                                <button onClick={handleSubmit} className="text-3xl font-semibold text-white ">Begin Test</button>
                            </div>
                            <div className="bg-[#1f2937] rounded-lg my-[8%] h-[19rem]">
                                <div className="text-white p-4">
                                    This image is likely to be  {!prediction ? <p>Loading...</p> : <span>{prediction}</span>} 
                                    <p>With a confidence level of {confidenceLevel}</p>
                                </div>   
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default HeroSection