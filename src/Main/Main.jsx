import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import Thehome from './Thehome/Thehome';
import Header from '../Header/Header';
import Ourfirm from './Ourfirm/Ourfirm';
import ReedingHouse from './ReedingHouse/ReedingHouse';
import Happycustomers from './Happycustomers/Happycustomers';
import Themarblestaircase from './Themarblestaircase/Themarblestaircase';
import Priorclients from './Priorclients/Priorclients';
import Theswirlingstaircase from './Theswirlingstaircase/Theswirlingstaircase';
import Getintouch from './Getintouch/Getintouch';
import Footer from '../footer/footer';
export default function Main(){
    return(
        <>
          <Header/>
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube]} direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{clickable: true,}} scrollbar={true} >
            <main>
              <SwiperSlide>
                <Thehome/>
              </SwiperSlide>
              <SwiperSlide>
                <Ourfirm/>
              </SwiperSlide>
              <SwiperSlide>
                <ReedingHouse/>
              </SwiperSlide>
              <SwiperSlide>
                <Happycustomers/>
              </SwiperSlide>
              <SwiperSlide>
                <Themarblestaircase/>
              </SwiperSlide>
              <SwiperSlide>
                <Priorclients/>
              </SwiperSlide>
              <SwiperSlide>
                <Theswirlingstaircase/>
              </SwiperSlide>
              <SwiperSlide>
                <Getintouch/>
              </SwiperSlide>
            </main>
              <SwiperSlide>
                <Footer/>
              </SwiperSlide>
          </Swiper>
        </>
    )
}