import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './CharacterItem.module.scss';

interface iCharacterItem {
  image: string;
  name: string;
  species: string;
  id:number;
}

const CharacterItem: React.FC<iCharacterItem>= ({image, name, id, species}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterItem;