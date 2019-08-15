import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';
import Entity from 'Entity';
import UIController from './components/UIController';

export default class solar360 extends React.Component {

  state = {
    sunRotate: 0,
    earthRotate: 0,
    marsRotate: 0
  }

  componentDidMount(){
    setInterval(()=>{
      if(this.state.sunRotate >= 360) this.setState({ sunRotate: 0 });
      if(this.state.earthRotate >= 360) this.setState({ earthRotate: 0 });
      if(this.state.marsRotate >= 360) this.setState({ marsRotate: 0 });

      this.setState({ 
        sunRotate: this.state.sunRotate + 1,
        earthRotate: this.state.earthRotate + .0050,
        marsRotate: this.state.marsRotate + 0.0040
      });

    }, 10);
  }

  render() {
    return (
      <View>
        <AmbientLight/>
        <PointLight/>
        <Entity
          source={{
            obj: asset('sun/PUSHILIN_sun.obj'),
            mtl: asset('sun/PUSHILIN_sun.mtl')
          }}
          style={{
            transform: [
              {
                translate: [0,0,0]
              },
              {
                scale: 20
              },
              {
                rotateY: this.state.sunRotate
              }
            ]
          }}
          lit={true}
        />
        <Entity
          source={{
            obj: asset('earth/model.obj'),
            mtl: asset('earth/materials.mtl')
          }}
          style={{
            transform: [
              {
                translate: [70 * Math.cos(this.state.earthRotate) ,0, 60 * Math.sin(this.state.earthRotate)]
              },
              {
                scale: 20
              },
              {
                rotateY: this.state.earthRotate
              }
            ]
          }}
          lit={true}
        />
        <Entity
          source={{
            obj: asset('mars/1239_Mars.obj'),
            mtl: asset('mars/1239_Mars.mtl')
          }}
          style={{
            transform: [
              {
                translate: [70 * Math.cos(this.state.marsRotate) ,-3, 60 * Math.sin(this.state.marsRotate)]
              },
              {
                scale: 0.03
              },
              {
                rotateY: this.state.marsRotate
              }
            ]
          }}
          lit={true}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('solar360', () => solar360);
AppRegistry.registerComponent('UIController', () => UIController);
