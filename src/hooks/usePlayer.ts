import { api } from 'boot/axios';
import { Player } from 'components/models';

export function usePlayer() {
  const fetchPlayer = async () => {
    const { data } = await api.get<Player[]>('stats/player/');
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
