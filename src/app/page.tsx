import Banner from "./components/Banner";
import LatestList from "./components/LatestList";

export default function Home() {
  return (
    <main className="m-auto w-full md:w-[1300px] px-5 md:px-0 py-[180px]">
      <Banner />
      <LatestList />
    </main>
  );
};