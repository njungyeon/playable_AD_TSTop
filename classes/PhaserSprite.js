import PhaserBase from './PhaserBase';

function PhaserSprite(props) {
  PhaserBase.call(this, props);//body, data, game, o_id가 정의되고

  this.body = this.game.add.sprite(props.x, props.y, props.image_key);//body안에 sprite객체를 넣고있다
  this.body.visible = props.visible !== undefined ? props.visible : true;
//   if(props.animations !== undefined) {
//     var animations = props.animations;
//     for(var key in animations) {
//       var animation = animations[key];
//       this.body.animations.add(key, animation.data, animation.data.length, animation.is_loop);// add(name, frames, framesRate, loop useNumericIndex)
//       this.body.animations.getAnimation(key).onComplete.add(this.onAniComplete, this);//각 ani에 signal을 붙이고 그에따라 불릴 함수를 지정해주고있다.
//       if(animation.is_loop) {//is_loop에 대한 설정이 true이면
//         this.body.animations.getAnimation(key).onLoop.add(this.onAniLoop, this);
//       }
//     }
//   }
  if(props.default_alpha !== undefined) {
    this.body.alpha = props.default_alpha;
  }
  if(props.width !== undefined) {
    this.body.width = props.width;
  }
  if(props.height !== undefined) {
    this.body.height = props.height;
  }
  if(props.angle !== undefined) {
    this.body.angle = props.angle;
  }
  if(props.alive !== undefined) {
    this.body.alive = props.alive;
  }
  this.body.events.onInputDown.add(this.onDown, this);
  this.body.events.onInputUp.add(this.onUp, this);
  this.body.events.onInputOver.add(this.onOver, this);
  this.body.events.onInputOut.add(this.onOut, this);
  // this.body.events.onOutOfBounds.add(this.onOutBounds, this);
  // this.body.events.onDragStart.add(this.onDragStart, this);
  // this.body.events.onDragStop.add(this.onDragStop, this);

}

export default PhaserSprite;