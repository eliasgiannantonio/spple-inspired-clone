import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { animateWithGSAP } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'

const Features = () => {
    const videoRef = useRef();
    
    useGSAP(() => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: "play pause reverse restart",
                start: "-10% bottom",
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })
        animateWithGSAP('#features_title', { y:0, opacity:1})
        animateWithGSAP(".g_grow", {
            opacity: 1,
            scale: 1,
            ease: "power1",
        },
            {
                scrub: 5.5
            })
        animateWithGSAP(".g_text", {
            opacity: 1,
            y:0,
            ease: "power2inOut",
            duration: 1
        })
    }, [])

    return (
        <section className='relative h-full overflow-hidden common-padding bg-zinc'><div className='screen-max-width'>
            <div className='w-full mb-12'>
                <h1 id="features_title" className='section-heading'>Explore the full story.</h1>
            </div>
            <div className='flex flex-col items-center justify-center overflow-hidden'>
                <div className='pl-24 mt-32 mb-24'>
                    <h2 className='text-5xl font-semibold lg:text-7xl'>iPhone.</h2>
                    <h2 className='text-5xl font-semibold lg:text-7xl'>Forged in titanium.</h2>
                </div>
                <div className='flex-col flex-center sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video playsInline id='exploreVideo' className='object-cover object-center w-full h-full' preload='none' muted autoPlay ref={videoRef}>
                            <source src={exploreVideo} type='video/mp4' />
                        </video>
                    </div>
                    <div className='relative flex flex-col w-full'>
                        <div className='feature-video-container'>
                            <div className='flex-1 overflow-hidden h-[50vh]'>
                                <img src={explore1Img} alt="Tittanium" className='feature-video g_grow' />
                            </div>
                            <div className='flex-1 overflow-hidden h-[50vh]'>
                                <img src={explore2Img} alt="Tittanium2" className='feature-video g_grow' />
                            </div>
                        </div>
                        <div className='feature-text-container'>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>iPhone 15 Pro is {""}
                                <span className='text-white'>
                                    the first iPhone to feature an aerospace-grade titanium design </span>
                                     using the same alloy that spacecrafts use for misions to Mars. </p>
                            </div>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>Titanium has one of the best strength-to-weight ratios of any metal, making these our {""}
                                <span className='text-white'>
                                    lightest Pro models ever. </span>
                                    You'll notice the difference the moment you pick one up. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Features