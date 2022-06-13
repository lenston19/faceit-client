export interface Faculty {
  name: string;
}
export interface Group {
  name: string;
  faculty: Faculty;
}
export interface Player {
  csgoStats: CSGOStats;
  group: Group;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  nickname: string;
}
export interface CSGOStats {
  elo: number;
  kdRatio: number;
  averageKdRatio: number;
  averageHs: number;
  winRate: number;
  player: number;
}
