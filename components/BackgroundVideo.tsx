export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
    </div>
  );
}

