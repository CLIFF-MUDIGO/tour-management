import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-4.jpeg'
import ava02 from '../../assets/images/ava-6.jpeg'
import ava03 from '../../assets/images/ava-5.jpeg'
import ava05 from '../../assets/images/ava-2.jpg'

const Testimonials = () => {


        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            swipeToSlide: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slideToScroll:1,
                    infinite: true,
                    dots: true,

                  },
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slideToScroll:1,
                  },
                },
              ],
        }


  return <Slider {...settings}>
    <div className="testimonial" py-4 px-3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Nesciunt similique placeat ipsa aspernatur magni hic sapiente autem quod, 
           at harum soluta fugit incidunt facilis tenetur veniam quis dolorum unde provident.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className='mb-0 mt-3'>Belam muia</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial" py-4 px-3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Nesciunt similique placeat ipsa aspernatur magni hic sapiente autem quod, 
          at harum soluta fugit incidunt facilis tenetur veniam quis dolorum unde provident.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className='mb-0 mt-3'>Derric Muguti</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial" py-4 px-3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Nesciunt similique placeat ipsa aspernatur magni hic sapiente autem quod, 
           at harum soluta fugit incidunt facilis tenetur veniam quis dolorum unde provident.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className='mb-0 mt-3'>Eric Mutembei</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial" py-4 px-3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Nesciunt similique placeat ipsa aspernatur magni hic sapiente autem quod, 
           at harum soluta fugit incidunt facilis tenetur veniam quis dolorum unde provident.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className='mb-0 mt-3'>Belam muia</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial" py-4 px-3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Nesciunt similique placeat ipsa aspernatur magni hic sapiente autem quod, 
           at harum soluta fugit incidunt facilis tenetur veniam quis dolorum unde provident.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava05} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className='mb-0 mt-3'>Glory Nkatha</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

  </Slider>
}

export default Testimonials