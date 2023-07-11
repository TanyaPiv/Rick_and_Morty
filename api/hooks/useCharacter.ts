import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://rickandmortyapi.com/api";

axios.defaults.baseURL = API_URL;

export interface ICharacter {
    id: number;
    name: string;
    image: string;
    species: string;
}

export const GetCharacter = {
    async getAll() {
        return axios.get<any[]>('/character')
    },

    async getById(id:string) {
        return axios.get<any[]>(`/character/${id}`)
    }
};


// export const useCharacter = (id:string) => {
//     const {data} = useQuery()
// }