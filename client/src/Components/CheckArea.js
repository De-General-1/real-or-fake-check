import React from 'react'

function CheckArea() {
  return (
    <div>
        <section className="flex justify-center">
            <div className="text-center my-5 mx-10">
                <h1 className="text-[3.5rem] text-white">Accuracy Guaranteed</h1>
                <p className="my-3 text-white">Lorem ipsum dolor sit, amet consectetur adipis</p>

                <div className="md:grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-[#8c27ff] my-10 p-5 text-white text-center">
                        <div className="flex justify-center my-3">
                            <i className='arrowDown bx bx-camera text-2xl text-gray-300'></i>
                        </div>
                        <h1>User Friendly</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="bg-[#8c27ff] my-10 p-5 text-white text-center">
                        <div className="flex justify-center my-3">
                            <i className='arrowDown bx bx-camera text-2xl text-gray-300'></i>
                        </div>
                        <h1>User Friendly</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="bg-[#8c27ff] my-10 p-5 text-white text-center">
                        <div className="flex justify-center my-3">
                            <i className='arrowDown bx bx-camera text-2xl text-gray-300'></i>
                        </div>
                        <h1>User Friendly</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default CheckArea