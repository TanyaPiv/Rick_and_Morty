import { CharacterCardItem } from '.';

const CharacterPage: React.FC<{character:CharacterCardItem}>= ({character}) => {
    const {image, name, species, id} = character;

    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h2>{species}</h2>
        </div>
    );
};

export default CharacterPage;

export async function getServerSideProps({params}:{params: {id:string}}) {
    const {id} = params;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const character = await res.json()
 
    return { props: { character } }
}