import Image from "next/image";

const WorldMap = () => (
  <>
    <Image src="/map.png" alt="map" className="w-full h-full object-cover" fill={true} />

    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
      <Image src="/people-01.png" alt="people" className="w-full h-full" fill={true} />
    </div>

    <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
      <Image src="/people-02.png" alt="people" className="w-full h-full" fill={true} />
    </div>

    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
      <Image src="/people-03.png" alt="people" className="w-full h-full" fill={true} />
    </div>
  </>
)

export default WorldMap