
import { useRouter } from 'next/router';


const Hero = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/shortner'); // Assuming 'shortner' is the route you want to redirect to
  };
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Never use long links again.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          hwr.link offer all students a tool to short academic long URLs into compact and short links.
        </p>
        <button className="btn btn-primary btn-wide" onClick={handleButtonClick}>Start Shorting</button>

      </div>
      <div className="lg:w-full">

        <img src="https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/3-Minutes.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zLzMtTWludXRlcy5zdmciLCJpYXQiOjE3MDMxOTgwMjEsImV4cCI6MTczNDczNDAyMX0.trkRQdWjPG54t6DozUCbK0ysFGwUpVa4dQek05wPvWI&t=2023-12-21T22%3A33%3A40.405Z"></img>
      </div>
    </section>
  );
};

export default Hero;
