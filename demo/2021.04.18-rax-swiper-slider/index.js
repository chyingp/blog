/* eslint-disable import/no-extraneous-dependencies */
import { createElement, Component, render, createRef } from 'rax';
import View from 'rax-view';
import {Swiper, SwiperSlide} from '../src/index';
import DU from 'driver-universal';
import './index.css';

let swiperEle;
class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      data: [],
    };
  }

  onClick = () => {
    swiperEle.slideNext();
  }

  render() {
    return (
      <View style={{
        width: 750
      }}>
        <Swiper
          autoplay={true}
          loop={true}
          style={{
            height: 300,
            width: 750
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => swiperEle = swiper}
          pagination={{ clickable: true }}
		  initialSlide={2}
        >
          <SwiperSlide key="1">Slide 1</SwiperSlide>
          <SwiperSlide key="2">Slide 2</SwiperSlide>
          <SwiperSlide key="3">Slide 3</SwiperSlide>
          <SwiperSlide key="4">Slide 4</SwiperSlide>
        </Swiper>
        <View onClick={this.onClick}>Click</View>
      </View>
    );
  }
}

render(<App />, document.body, { driver: DU });