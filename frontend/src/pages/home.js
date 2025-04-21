import { Facebook, Flower, Instagram, Mail, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Thời gian animation
            once: false,     // Chạy animation chỉ một lần khi scroll đến
        });
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* <div className="fixed top-0 left-0 w-screen h-[2000px] z-0 bg-gradient-to-b from-pink-200 via-sky-200 to-yellow-100 opacity-90 overflow-hidden">
                <div className="absolute w-24 h-24 bg-pink-300 rounded-full opacity-40 top-20 left-10 animate-float"></div>
                <div className="absolute w-16 h-16 bg-yellow-300 rounded-full opacity-40 top-96 left-1/3 animate-float delay-200"></div>
                <div className="absolute w-20 h-20 bg-sky-400 rounded-full opacity-40 top-[600px] left-[60%] animate-float delay-500"></div>
                <div className="absolute w-14 h-14 bg-purple-300 rounded-full opacity-30 top-[1000px] left-[80%] animate-float delay-1000"></div>
            </div> */}
            {/* <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-pink-400 text-2xl animate-floating"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${6 + Math.random() * 6}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        🌸
                    </div>
                ))}
            </div> */}

            <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-pink-400 text-2xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.3 + Math.random() * 0.3,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    >
                        🌸
                    </div>
                ))}
            </div>

            <div className='flex justify-center relative z-10 pt-5'>
                <div data-aos="fade-up" className='font-dancing space-x-2 pt-4'>
                    <div className="flex justify-center justify-end">
                        <img
                            className='h-auto w-80 rounded-lg'
                            src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745155475/e3fc0d7f-0f0e-4ea7-98b6-471ad14c4eaf_ufdu92.jpg'
                            alt="Ảnh"
                        />
                    </div>

                    <div data-aos="fade">
                        <p className="text-center -mt-[40px] mb-4 text-white text-2xl font-bold w-80">
                            Xin chào mọi người, mình là Giang
                        </p>
                    </div>

                    <div data-aos="fade-up" className="mt-4 text-2xl font-bold w-80 rounded-lg">
                        <p className='text-4xl pb-2 text-center'>Bùi Nguyên Giang</p>
                        <p>Sinh ngày: 18/11/2003</p>
                        <p>Quê quán: Đăk Nông - Quảng Nam</p>
                        <p>Sinh viên: Trường Đại Học Công Nghệ TP.HCM-HUTECH</p>
                        <p>Chuyên ngành: Marketing </p>
                    </div>

                    <div data-aos="fade-up" className="flex justify-center justify-end mt-5">
                        <img
                            className='h-auto w-80 rounded-lg'
                            src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745160312/f6b55d82-fd71-4b89-bc01-e7e651c9fdf2_sgy1d8.jpg'
                            alt="Ảnh"
                        />
                    </div>

                    <div data-aos="fade" className="mt-4 text-2xl font-bold w-80 rounded-lg">
                        <p className='text-4xl pb-2 text-center'>Sở thích</p>
                        <p>- Mình thích đọc sách, xem phim, nghe nhạc, chạy bộ và đặc biệt là chụp ảnh.</p>
                        <p>- Thời gian rảnh, mình thường đi dạo ở công viên gần nhà, tận hưởng không khí trong lành và yên tĩnh. Những khoảnh khắc đó giúp mình thư giãn đầu óc, giải tỏa căng thẳng và lấy lại năng lượng sau những giờ làm việc mệt mỏi.</p>
                    </div>

                    <div data-aos="fade-up" className="flex justify-center justify-end mt-5">
                        <img
                            className='h-auto w-80 rounded-lg'
                            src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745172133/320b5a5d-863a-443f-847e-397114418744_nmppeb.jpg'
                            alt="Ảnh"
                        />
                    </div>

                    <div data-aos="fade" className="mt-4 text-2xl font-bold w-80 rounded-lg">
                        <p className='text-4xl pb-2 text-center'>Công việc</p>
                        <p>- Hiện tại mình đang làm Admin Support tại Renewable Energy Vietnam (REV)</p>
                        <p>- Địa chỉ: 25 Nguyễn Cơ Thạch, An Lợi Đông, Thủ Đức, Hồ Chí Minh, Việt Nam</p>
                        <p>- Môi trường làm việc tại công ty rất tốt và chuyên nghiệp, các anh/chị đồng nghiệp luôn vui vẻ, hòa đồng và sẵn sàng hỗ trợ mình trong công việc. Mình chưa bao giờ cảm thấy lạc lõng mà ngược lại, luôn cảm nhận được sự gắn kết và ấm áp như một gia đình.</p>
                    </div>

                    <div data-aos="fade-up" className="flex justify-center mt-5">
                        <img
                            className='h-auto w-80 rounded-lg'
                            src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745174926/a3225975-258b-4cb9-a7d8-cd7661a8119e_bjs2yk.jpg'
                            alt="Ảnh"
                        />
                    </div>

                    <div data-aos="fade" className="mt-4 text-2xl font-bold w-80 rounded-lg">
                        <p className='text-4xl pb-2 text-center'>Thông tin liên hệ</p>
                        <p className='flex space-x-2 items-center text-center text-lg'><Phone /> <span>0889177702</span></p>
                        <p className='flex space-x-2 items-center text-center'><Mail /> <span>giangngbui@gmail.com</span></p>
                        <p className='flex space-x-2 items-center text-center'><Facebook /> <span>facebook.com/nguyengiang.bui.7</span></p>
                        <p className='flex space-x-2 items-center text-center'><Instagram /> <span>nguyengiang.bui.7</span></p>
                    </div>

                    <div data-aos="fade" className='w-80 rounded-lg bg-black h-[2px] mt-2 mb-2'></div>

                    <div className='mt-5 mb-5 relative w-80'>
                        <img data-aos='zoom-out-right' className='w-60 rounded-lg ' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745217603/490993900_9705996859488725_8229859880994849177_n_d0b25x.jpg' />
                        <img data-aos='zoom-out-left' className='w-52 -mt-14 ms-auto jus rounded-lg ' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745232128/490997782_1755660395374086_8855383920115501088_n_yvxm09.jpg' />
                        <img data-aos='zoom-out-right' className='w-60 -mt-14 me-auto rounded-lg ' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745217603/490987582_652390390945112_2061861561222528948_n_ibdflu.jpg' />
                    </div>

                    <div data-aos="fade" className='w-80 rounded-lg bg-black h-[2px] mt-2 mb-2'></div>

                    <div className='mt-5 mb-5 block w-80'>
                        <div className='flex space-x-2 justify-center'>
                            <img data-aos="slide-right" className='w-40 h-52 object-cover rounded-lg' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745217603/490992599_1666917847263075_5542943782389107811_n_gohbb2.jpg' />
                            <img data-aos="slide-left" className='w-44 h-52 object-cover rounded-lg' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745217604/490988188_3147880842027507_16905298743579923_n_vw51hb.jpg' />
                        </div>
                        <div className='flex mt-3 justify-center '>
                            <img data-aos="fade-up" className='w-44 h-52 object-cover rounded-lg ' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745217604/490987395_673277495450961_1806410509530730116_n_nucggf.jpg' />
                        </div>
                    </div>

                    <div data-aos="fade" className='w-80 rounded-lg bg-black h-[2px] mt-2 mb-2'></div>

                    <div className='mt-5 mb-5 block w-80 space-y-5'>
                        <img data-aos="zoom-out-up" className='rounded-lg' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745230637/HOA05400_iqzgro.jpg' />
                        <img data-aos="zoom-in-up" className='rounded-lg' src='https://res.cloudinary.com/dteuqunrm/image/upload/v1745230638/HOA05458_be8gvb.jpg' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
