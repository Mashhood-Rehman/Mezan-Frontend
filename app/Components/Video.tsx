"use client";

export default function Video() {
  return (
    <div className="hidden mt-6 lg:block">
      <video
        className="z-10 rounded-xl  h-full max-w-100 "
        loop
        autoPlay
        muted
      >
        <source src="/video.webm" type="video/mp4" />
        
      </video>
    </div>
  );
}
