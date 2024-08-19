import Video from 'next-video';
import MadeToOrder from '/videos/made-to-order-teaser.mp4';

export default function HeroArtwork2() {
  return (
    <div className="w-full max-w-screen-2xl m-auto mt-6">
      <div className="relative flex items-center justify-center lg:-mt-16">
         <Video src={MadeToOrder} autoPlay />
      </div>
    </div>
  )
}