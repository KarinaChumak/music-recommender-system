export const defaultState = {
  users: [{
    id: "U1",
    name: "Dev"
  }],
  artists: [{
    id: "A1",
    name: "Kansas"
  },
  {
    id: "A2",
    name: "Queen"
  },
  {
    id: "A3",
    name: "MONATIK"
  }],
  songs: [
    {
      name: "Dust in the wind",
      id: "S1",
      artist: "A1",
      duration: "3m 45s"
    },
    {
      name: "Bohemian Rhapsody",
      id: "S2",
      arist: "A2",
      duration: "7m 12s"
    },
    {
      name: "I want to break free",
      id: "S3",
      artist: "A2",
      duration: "4m 0s"
    },
    {
      name: "LOvE it",
      id: "S4",
      artist: "A3",
      duration: "4m 0s"
    },
    {
      name: "VECHERINOCHKA",
      id: "S5",
      artist: "A3",
      duration: "4m 0s"
    }
  ],
  playlists: [
    {
      id: "P1",
      name: "Favourite songs",
      user: "U1",
      songs: ["S1", "S2"]
    },
    {
      id: "P2",
      name: "Dancing music",
      user: "U1",
      songs: ["S4", "S5"]
    }
  ]
}