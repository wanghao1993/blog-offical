import SectionContainer from "./SectionContainer";
import BlogName from "./Name";
import Nav from "./Nav";
export default function Header() {
  return (
    <SectionContainer>
      <header className="h-12 flex justify-between ">
        <BlogName />
        <Nav />
      </header>
    </SectionContainer>
  );
}
