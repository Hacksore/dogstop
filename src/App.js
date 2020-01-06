import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';

const streams = [
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-02.stream/playlist.m3u8', name: 'Main Room'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-10.stream/playlist.m3u8', name: 'Step Room'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-09.stream/playlist.m3u8', name: 'Front Room'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-03.stream/playlist.m3u8', name: 'Suite 1'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-08.stream/playlist.m3u8', name: 'Suite 2'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-06.stream/playlist.m3u8', name: 'Suite 3'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-04.stream/playlist.m3u8', name: 'Suite 4'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-07.stream/playlist.m3u8', name: 'Suite 5'},
  { url: 'https://56826ae6d184b.streamlock.net:443/live/far-north-dallas-05.stream/playlist.m3u8', name: 'Suite 6'}
];

const App = () => {  
  const [ videoURL, setVideoURL ] = useState(streams[0].url);
  const player = useRef(null);

  useEffect(() => {

  }, [player]);

  const enterFullscreen = () => {
    const hlsPlayer = player.current.getInternalPlayer();
    hlsPlayer.webkitEnterFullscreen();
  }

  return (
    <div style={{ background: '#000' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPlayer
          onClick={enterFullscreen}
          onTouchStart={enterFullscreen}
          ref={player}
          controls={true} 
          url={videoURL}
          volume={0}
          playing
          playsinline
          width="100%"
        />
      </div>
      <div style={{  }}>
        {streams.map(stream => 
          <Button 
            fullWidth={true}
            variant="contained"
            style={{ background: '#424242', color: '#fff' }}
            key={stream.name} 
            onClick={() => setVideoURL(stream.url)}
          >
            {stream.name}
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;