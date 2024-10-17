import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import Header from './Header/Header';
import Main from './Main/Main';
function App() {
  return (
    <>
      <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube]} autoHeight={true} direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{clickable: true,}} >
        <SwiperSlide className='swiper'>
          <Header/>
        </SwiperSlide>
        <SwiperSlide className='swiper23'>
          <Main/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
