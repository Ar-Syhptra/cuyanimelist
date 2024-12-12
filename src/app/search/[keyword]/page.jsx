import Image from "next/image";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";
import { getAnimeResponse } from "@/libs/api libs";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
