import { DotWave } from "@uiball/loaders";
function IsButtonLoading() {
  return (
    <div className="flex flex-row items-center justify-center">
      <DotWave size={40} speed={1} color="white" />
    </div>
  );
}

export default IsButtonLoading;
