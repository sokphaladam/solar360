// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const LOCATION = new Location([-50,0,0]);
  const SURFACE = new Surface(1000, 375, Surface.SurfaceShape.Flate);

  SURFACE.setAngle(0,0,0);

  r360.renderToLocation(
    r360.createRoot('solar360', {}),
    LOCATION
  )

  r360.renderToSurface(
    r360.createRoot('UIController', {}),
    SURFACE
  )

  r360.runtime.executor._worker.addEventListener('message', (e) => onMessage(e, r360, LOCATION))
  
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};


function onMessage(e, r360, LOCATION) {
  if(e.data.type === 'newLocation') {
    LOCATION.setWorldPosition(e.data.x, e.data.y, 0)
  }
}