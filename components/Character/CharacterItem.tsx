import styles from './CharacterItem.module.scss';

interface iCharacterItem {
  image: string;
  name: string;
  species: string;
  id:number;
}

const CharacterItem: React.FC<iCharacterItem>= ({image, name, id, species}) => {
  return (
    <div className={styles.characterItem}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{species}</h2>
    </div>
  );
};

export default CharacterItem;