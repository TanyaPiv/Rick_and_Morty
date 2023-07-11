import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CharacterCardItem } from '.';

const CharacterPage: React.FC<{character:CharacterCardItem}>= ({character}) => {
    const {image, name, species, id} = character;

    return (
        <Card sx={{ maxWidth: 345 }}>
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

export default CharacterPage;

export async function getServerSideProps({params}:{params: {id:string}}) {
    const {id} = params;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const character = await res.json()
 
    return { props: { character } }
}