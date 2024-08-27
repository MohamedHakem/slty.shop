import SltyHeroPlaceholder2 from '@/public/assets/landing-page-assets/slty-hero-placeholder-2.jpeg'

export default function HeroArtwork2() {
  return (
    <div className="w-full">
      <div className="max-w-3xl m-auto relative flex items-center justify-center overflow-hidden rounded-[4rem]">
        <video
          // src='https://res.cloudinary.com/dpieq06nn/video/upload/f_webm,vc_vp9,q_auto/v1724305482/Slty-landingpage/itkj0fp0cxlx0k72eax3' 
          poster={SltyHeroPlaceholder2.src}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          controls={false}
          width="768"
          height="768"
        >
          <source src="https://res.cloudinary.com/dpieq06nn/video/upload/f_auto:video,q_auto/v1/Slty-landingpage/itkj0fp0cxlx0k72eax3" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}