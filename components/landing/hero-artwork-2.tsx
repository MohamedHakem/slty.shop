// "use client";

// import { CldVideoPlayer } from 'next-cloudinary';

// import Video from 'next-video';
// import MadeToOrder from '/videos/made-to-order-teaser.mp4';
// import MadeToOrder from '@/public/vids/made-to-order-teaser.mp4';

export default function HeroArtwork2() {
  return (
    <div className="w-full max-w-3xl m-auto mt-4">
      <div className="relative flex items-center justify-center">
        {/* <CldVideoPlayer
          id="landingpage-video"
          src="Slty-landingpage/itkj0fp0cxlx0k72eax3"
          // https://res.cloudinary.com/dpieq06nn/video/upload/f_webm,vc_vp9,q_auto/v1724305482/Slty-landingpage/itkj0fp0cxlx0k72eax3
          // width="1920"
          // height="1080"
          // width="800"
          // height="450"
          width="768"
          height="768"
          aspectRatio="1:1"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}
          hideContextMenu={true}
        /> */}
        <video 
          // src='https://res.cloudinary.com/dpieq06nn/video/upload/f_webm,vc_vp9,q_auto/v1724305482/Slty-landingpage/itkj0fp0cxlx0k72eax3' 
          src="https://res.cloudinary.com/dpieq06nn/video/upload/f_auto:video,q_auto/v1/Slty-landingpage/itkj0fp0cxlx0k72eax3"
          autoPlay={true} loop={true} muted={true} controls={false} width="768" height="768"
        />

        {/* <Video src={MadeToOrder} autoPlay={true} controls={false} /> */}
        {/* <video width="320" height="240" controls preload="none">
          <source src="/public/vids/made-to-order-teaser.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* <iframe
          src="https://www.youtube.com/watch?v=hAcB3EHtGNc"
          // frameborder="0"

        /> */}

        {/* <video 
        src='https://www.youtube.com/shorts/J5CQQmK-NWg' 
        autoPlay={true} 
        loop={true} 
        muted={true} 
        // className="absolute top-0 left-0 w-full h-full object-cover"
        className="w-full h-full object-cover"
        >
        </video> */}

        {/*  */}

        {/* <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
            type: 'auto',
            source: true
          }}
          alt='CldImage'
        /> */}
        {/* <CldVideo
          src="made-to-order-teaser"
          
        /> */}

        {/* <CldVideoPlayer
          // id='Slty-landingpage/itkj0fp0cxlx0k72eax3'
          src="Slty-landingpage/itkj0fp0cxlx0k72eax3"
          width="1920"
          height="1080"
        // sourceTypes={['hls']} // <-- Add HLS as a source type or dash for MPEG-DASH
        // transformation={{
        //   // <-- Add transformation prop
        //   streaming_profile: 'hd', // <-- Add streaming profile
        // }}
        /> */}


      </div>
    </div>
  )
}