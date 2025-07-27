import React from 'react'

function About() {
  return (
    <section className="pt-16 pb-20">
      <div className="contain">
        <h4 className="text-md font-bold">About Villans</h4>
        <div className="my-10 flex justify-center items-center gap-10">
          <div className="w-[1500px] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww"
              className="w-full rounded"
              alt="about-section"
              loading='lazy'
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-white rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
              <h3 className="font-bold mb-3">Villans's local hotel search</h3>
              <p className="text-[13px]">
                villans’s hotel search allows users to compare hotel services in
                just a few clicks from on site for more than 200 hotels and
                other types of accommodation in over UAE. We help hundreds of
                travelers each year compare deals for hotels and accommodations
              </p>
            </div>
            <div className="p-5 md: bg-white md:translate-y-5 rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
              <h3 className="font-bold mb-3">How to book</h3>
              <p className="text-[13px]">
                villans is a hotel search with an extensive services comparison.
                By clicking on the “reserve” button, you will be forwarded onto
                a hotel details and rooms where you can complete the reservation
                for the hotel deal found on villans
              </p>
            </div>
            <div className="p-5 bg-white rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
              <h3 className="font-bold mb-3">Find cheap hotels on villans</h3>
              <p className="text-[13px]">
                With villans you can easily find your ideal hotel and compare
                prices and services. Simply enter where you want to go and your
                desired travel dates, and let our filter compare accommodation
                prices and services for you.
              </p>
            </div>
            <div className="p-5 md: bg-white md:translate-y-5 rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
              <h3 className="font-bold mb-3">
                Hotel reviews help you find your ideal hotel
              </h3>
              <p className="text-[13px]">
                Over 200 aggregated hotel ratings and more than 10,000 images
                allow you to find out more about where you're traveling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About