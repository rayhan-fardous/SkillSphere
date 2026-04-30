import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <div className="flex flex-col pb-16">
      <Hero/>
      <PopularCourses/>
    </div>
  );
}
