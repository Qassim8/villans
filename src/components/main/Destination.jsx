import React from 'react'

function Destination() {
  return (
    <section className="pt-24 pb-16">
      <div className="contain">
        <h4 className="text-md font-bold">Popular Distenations</h4>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="relative md:row-span-3 sm:row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Abu-Dhabi
            </p>
            <img
              src={
                "https://images.pexels.com/photos/3873664/pexels-photo-3873664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
          <div className="relative row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Dubai
            </p>
            <img
              src={
                "https://images.pexels.com/photos/10514386/pexels-photo-10514386.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
          <div className="relative md:row-span-3 sm:row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Alain
            </p>
            <img
              src={
                "https://th.bing.com/th/id/R.c2c0577c18cf2707729daeb28a9ddcc2?rik=lRgBqZRDoqk4jQ&pid=ImgRaw&r=0"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
          <div className="relative md:row-span-2 sm:row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Ajman
            </p>
            <img
              src={
                "https://th.bing.com/th/id/OIP.sjIfXFD1mw6eiwolz8fszAHaEI?rs=1&pid=ImgDetMain"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
          <div className="relative md:row-span-2 sm:row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Fujairah
            </p>
            <img
              src={
                "https://th.bing.com/th/id/OIP.STSykr7tdIpJuMro8s9IqgHaE8?rs=1&pid=ImgDetMain"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
          <div className="relative row-span-1 overflow-hidden h-full">
            <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
              Sharjah
            </p>
            <img
              src={
                "https://images.pexels.com/photos/17420377/pexels-photo-17420377/free-photo-of-monument-on-square-in-al-juraina-park-in-sharjah-in-uae.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="destinations"
              className="image-effects"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination