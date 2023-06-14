import Scroll100VHIcon from "../Scroll100VHIcon";

function InitialScreenTitle({ title }: { title: string }) {
  return (
    <div className="relative grid h-screen grid-flow-row grid-cols-1 items-center lg:grid-cols-2">
      <div className="flex justify-start p-32">
        <h1 className="text-[40px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
          {title}
        </h1>
      </div>
      <Scroll100VHIcon />
    </div>
  );
}

export default InitialScreenTitle;
