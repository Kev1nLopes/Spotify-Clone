export const environment = {
  production: true
};



export const SpotifyConfiguration = {
  clientId: '754907a20b454ee0bb0988e1aa618082',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
  "user-read-currently-playing",//musica tocando agora,
  "user-read-recently-played", // let musicas todadas recentemente,
  "user-read-playback-state", //let estado do player do usuario,
  "user-top-read", // top artistas e musicas do usuario,
  "user-modify-playback-state", //alterar do player do usuario
  "user-library-read", //ler biblioteca dos usuarios
  "playlist-read-private", // ler playlists privadas
  "playlist-read-collaborative" // ler playlists colaborativas
  ]
}
