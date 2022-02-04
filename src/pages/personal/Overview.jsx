
import OverviewSongs from './songs/OverviewSongs';
import OverviewPlaylist from './playlist/OverviewPlaylist';
import OverviewArtists from './artists/OverviewArtists';
import OverviewMv from './mv/OverviewMv';

const Overview = () => {
  return (
    <>
      {/* songs  */}
      <OverviewSongs />
      {/* Playlist  */}
      <OverviewPlaylist />
      {/* MV  */}
      <OverviewMv />
      {/* Nghệ sĩ  */}
      <OverviewArtists />
    </>
  );
};

export default Overview;
