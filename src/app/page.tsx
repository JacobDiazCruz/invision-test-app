import Banner from "./components/Banner";
import LatestList from "./components/LatestList";

export default function Home() {
  return (
    <main className="m-auto w-[1300px] py-[180px]">
      <Banner />
      <LatestList />
    </main>
  );
};