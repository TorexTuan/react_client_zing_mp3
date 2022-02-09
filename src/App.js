
import PersonalPage from './pages/personal/Personal';
import { CurrentSongProvider } from './contextProviders/CurrentSongProvider'

function App() {

  return (
    <CurrentSongProvider>
      <div className='zing_mp3'>
        <div className='zing_mp3_inner'>
          <PersonalPage />
        </div>
      </div>
    </CurrentSongProvider>
  );
}

export default App;
