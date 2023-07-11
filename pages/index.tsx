import { GetCharacter } from "@/api/hooks/useCharacter"
import CharacterItem from "@/components/Character/CharacterItem";
import styles from './global.module.scss'
import Link from "next/link";

export type CharacterCardItem = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};


export default function Home({data}:{data:CharacterCardItem[]}) {
    return (
        <main>
            <div className={styles.container}>
                {data.map(({image, name, species, id}) => {
                    const userId = id.toString();
                    return (
                        <Link href={userId} key={id}>
                            <CharacterItem image={image} name={name} species={species} id={id} key={userId}/>
                        </Link>)
                })}
            </div>
        </main>
    )
}

export async function getServerSideProps() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  const data = await res.json()
 
  return { props: { data:data.results } }
}