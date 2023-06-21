import Scroll100VHIcon from "../Scroll100VHIcon";

function HomeSection() {
  return (
    <div className=" relative h-screen w-screen">
      <div
        className="relative flex h-screen w-full items-center justify-center lg:max-w-[60vw]"
        id="home"
      >
        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col space-y-2 lg:space-y-2">
            <h1 className="text-[40px] font-bold leading-tight md:text-6xl lg:text-[76px]">
              EMGP Sistemas
            </h1>
            <h2 className="text-[16px] font-normal leading-tight md:text-3xl lg:text-[40px]">
              Desenvolvimento de Sites e Aplicativos
            </h2>
          </div>
        </div>
      </div>
      <Scroll100VHIcon />
    </div>
  );
}

export default HomeSection;
