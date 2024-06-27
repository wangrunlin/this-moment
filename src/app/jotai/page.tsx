"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";

import { TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { animeAtom, progressAtom } from "@/model";

const AnimeList = () => {
  const anime = useAtomValue(animeAtom);

  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {anime.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddAnime = () => {
  const setAnime = useSetAtom(animeAtom);

  return (
    <Button
      onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: "Chicken",
            year: 2001,
            watched: true,
          },
        ]);
      }}
    >
      Add Chicken
    </Button>
  );
};

const ProgressTracker = () => {
  const progress = useAtomValue(progressAtom);

  return <div>{Math.trunc(progress * 100)}% watched</div>;
};

const AnimeApp = () => {
  const [anime, setAnime] = useAtom(animeAtom);

  return (
    <>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <Button
        onClick={() => {
          setAnime((anime) => [
            ...anime,
            {
              title: "Cowboy Bebop",
              year: 1998,
              watched: false,
            },
          ]);
        }}
      >
        Add Cowboy Bebop
      </Button>
    </>
  );
};

export default function Jotai() {
  return (
    <main className="text-center mt-16">
      <div className="flex justify-evenly">
        <div>
          <TypographyH2>Read and write from same component</TypographyH2>
          <AnimeApp />
        </div>

        <div>
          <TypographyH2>Read and write from separate components</TypographyH2>
          <AnimeList />
          <AddAnime />
          <ProgressTracker />
        </div>
      </div>

      <footer>
        Powerd by
        <Button variant="link">
          <Link href="https://jotai.org" target="_blank">
            Jotai
          </Link>
        </Button>
        and
        <Button variant="link">
          <Link href="https://wangrunlin.com" target="_blank">
            Leo Wang
          </Link>
        </Button>
      </footer>
    </main>
  );
}
