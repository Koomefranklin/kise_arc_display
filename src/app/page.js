export default function Home() {
  return (
    <div className="grid w-screen h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="grid flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <video
          className="w-screen rounded-lg border border-zinc-200 shadow-lg dark:border-zinc-700"
          src="/Every Step Counts  - Inside KISE’s Physiotherapy Unit.mp4"
          autoPlay
          loop
          playsInline
          />
      </main>
    </div>
  );
}
