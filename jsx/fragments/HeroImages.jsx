import Image from "next/image";

const HeroImages = () => (
  <>
    <div className='w-full relative sm:h-[500px] h-[350px]'>
      <Image
        src="/cover.png"
        alt="hero_cover"
        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        fill
      />
    </div>

    <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
      <div className='relative sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]' >
        <Image
          src="/stamp.png"
          alt="stamp"
          className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          fill
        />
      </div>
    </div>
  </>
)

export default HeroImages