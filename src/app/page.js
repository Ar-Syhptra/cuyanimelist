import Image from "next/image";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";

const Page = async ({params}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

 const { keyword } = params
  const topAnime = await response.json();

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
    </>
  );
};

export default Page;
