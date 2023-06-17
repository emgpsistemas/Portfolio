import Scroll100VHIcon from "../Scroll100VHIcon";

function HomeSection() {
  return (
    <div
      className="relative grid h-screen grid-flow-row grid-cols-1 items-center lg:grid-cols-2"
      id="home"
    >
      <div className="flex justify-center lg:justify-end">
        <div className="flex flex-col space-y-5">
          <h1 className="text-[40px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
            EMGP Sistemas
          </h1>
          <h2 className="text-[16px] font-normal leading-tight md:text-3xl lg:text-[44px]">
            Desenvolvimento de Sites e Aplicativos
          </h2>
        </div>
      </div>
      <Scroll100VHIcon />
    </div>
  );
}

export default HomeSection;