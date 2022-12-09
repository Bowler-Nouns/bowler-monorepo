import { Unity, useUnityContext } from 'react-unity-webgl';
import loadingNoun from '../../assets/loading-skull-noun.gif';
import Image from 'react-bootstrap/Image';
import classes from './Play.module.css';

const PlayPage = () => {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: 'game/Build/nouns-bowling-game.loader.js',
    dataUrl: 'game/Build/nouns-bowling-game.data',
    frameworkUrl: 'game/Build/nouns-bowling-game.framework.js',
    codeUrl: 'game/Build/nouns-bowling-game.wasm',
  });

  return (
    <>
      {isLoaded === false && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={loadingNoun} alt="Loading noun" />
        </div>
      )}
      <div style={{ textAlign: 'center' }}>
        <Unity unityProvider={unityProvider} className={classes.unityContainer} />
      </div>
    </>
  );
};
export default PlayPage;
