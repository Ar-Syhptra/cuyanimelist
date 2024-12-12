import Image from "next/image";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
