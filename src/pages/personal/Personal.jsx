import { PlayingProvider } from '../../contextProviders/PlayingProvider';
import { Sidebar, MusicBar } from '../../components';
import PersonalContent from './PersonalContent';

const Personal = () => {

  return (
      <PlayingProvider>
        <Sidebar />
        <PersonalContent />
        <MusicBar />
      </PlayingProvider>
  );
};

export default Personal;
