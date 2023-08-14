import AboutSection from "../components/UI/AboutSection/AboutSection";
import SearchTab from "../components/UI/Heading/SearchTab";
import QuestionsSection from "../components/UI/QuestionsSection";

export default function Home() {
  return (
    <div>
      <SearchTab />
      <AboutSection />
      <QuestionsSection />
    </div>
  );
}
