import HomePage from "./components/HomePage";
import HomeProjects from "./components/HomeProjects";
import HomeBlogs from "./components/HomeBlogs";

export default function Home() {
  return <HomePage projectsSlot={<HomeProjects />} blogsSlot={<HomeBlogs />} />;
}
