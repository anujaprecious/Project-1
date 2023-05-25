import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay'; 

SwiperCore.use([Navigation, Pagination, Autoplay]);


const LogoSection = () => {

  const images = [
    'Google Logo.png',
    'Microsoft Logo.png',
    'Vector.png',
    'FedEx Logo.png',
    'Amazon Logo.png',
    'OLA logo.png',
    'OLA logo.png',
    'OLA logo.png',

  ];

return (


    <div style={{ maxWidth: "1440px", height: "300px", width: "100%", margin: "0 auto" }}>
      <h3
        style={{
          marginTop: "29px",
          marginBottom: "247px",
          width: "100%",
          maxWidth: "686px",
          height: "24px",
          position: "fixed",
          top: "0",
          background: "white",
          zIndex: "1",
        }}
      >
        Join these great companies committed to fighting climate change
      </h3>

      <div style={{ display: 'flex', alignItems: "center", justifyContent: "flex-start", marginTop: '60px' }}>
        {/* <div
          style={{

            width: '100%',
            maxWidth: 'auto',
            borderRadius: '16px',
            overflow: 'hidden',

          }}
        > */}
        <Swiper
          slidesPerView={1}
          spaceBetween={90}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000, // Default delay between slides
            disableOnInteraction: true,
          }}
          breakpoints={{
            390: {
              slidesPerView: 2, // Show only one slide on iPhone 12 Pro
              spaceBetween: 18, // Adjust the spacing as desired
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 18,
            },
          }}
        >
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "48px", // Added margin between boxes
                    marginTop: "128px", // Apply top margin
                    marginBottom: "76px",
                    background: "#FFFFFF", // Apply white background
                    boxShadow: "0px 30px 40px rgba(212, 217, 232, 0.2)", // Apply grey shadow
                    borderRadius: "16px", // Apply border radius
                    //display: "flex",
                    //flexDirection: "column",
                    justifyContent: "center",
                    //alignItems: "center",

                    padding: "16px", // Add padding for content
                  }}
                >
                  <div
                    style={{
                      width: "170px",
                      height: "96px",
                      margin: "10px",
                      //gap:"48px",
                      //border: "1px solid #ccc",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                    }}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",

                        width: "100px",
                        height: "30px",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>


  );
};

export default LogoSection;


