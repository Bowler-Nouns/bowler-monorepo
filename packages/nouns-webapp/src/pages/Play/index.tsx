import { Unity, useUnityContext } from 'react-unity-webgl';

const PlayPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'game/Build/nouns-bowling-game.loader.js',
    dataUrl: 'game/Build/nouns-bowling-game.data',
    frameworkUrl: 'game/Build/nouns-bowling-game.framework.js',
    codeUrl: 'game/Build/nouns-bowling-game.wasm',
  });

  return <Unity unityProvider={unityProvider} />;
};
export default PlayPage;
