import { DotWave } from "@uiball/loaders";
function IsVideoLoading() {
  return (
    <div className="flex h-60 w-full flex-row items-center justify-center">
      <DotWave size={70} speed={1} color="#191938" />
    </div>
  );
}

export default IsVideoLoading;
