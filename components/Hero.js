import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Never use long links again.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          hwr.link offer all students a tool to short academic long URL's into compact and short links.
        </p>
        <button className="btn btn-primary btn-wide">Start now</button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/3-Minutes%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zLzMtTWludXRlcyAoMSkucG5nIiwiaWF0IjoxNzAyOTIyOTY0LCJleHAiOjE3MzQ0NTg5NjR9.FYeOJXlDJckdXYjZRQvRMWPZuI0O_FcC6LjfGXzEOFU&t=2023-12-18T18%3A09%3A24.761Z"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={300}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
