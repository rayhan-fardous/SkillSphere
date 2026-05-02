import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

export default function Home() {
  return (
    <div className="flex flex-col pb-16">
      <Hero/>
      <PopularCourses/>
      <LearningTips/>
      <TopInstructors/>
      <TrendingCourses/>
    </div>
  );
}
