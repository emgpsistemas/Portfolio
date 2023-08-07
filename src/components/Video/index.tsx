import { useEffect, useState } from "react";
import IsVideoLoading from "../IsVideoLoading";

function Video({ videoPath }: { videoPath: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <IsVideoLoading />;
  }

  return (
    <>
      <video controls className="rounded-3xl">
        {isClient && <source src={videoPath} type="video/webm" />}
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default Video;
