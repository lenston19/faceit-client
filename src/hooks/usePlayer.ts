import { api } from 'boot/axios';
import { Player } from 'components/models';
import { LocationQuery } from 'vue-router';

export function usePlayer() {
  const fetchPlayer = async (query:LocationQuery) => {
    const { data } = await api.get<Player[]>('stats/player/', {params:query});
    return data;
  };

  const getPlayerById = async (id: number) => {
    const { data } = await api.get<Player>(`stats/player/${id}`);
    return data;
  };
  return {
    fetchPlayer,
    getPlayerById,
  };
}
