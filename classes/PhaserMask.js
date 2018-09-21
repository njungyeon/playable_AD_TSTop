var PhaserBase = require('./PhaserBase');

function PhaserMask(props) {
    PhaserBase.call(this, props);
    this.body = this.game.add.graphics(0, 0);
    this.body.beginFill(props.color);
    this.body.drawRect(props.x, props.y, 820, 1350);
    this.body.alpha = props.default_alpha;
    this.body.visible = props.visible !== undefined ? props.visible : true;

    if(props.event_enable) {
        this.body.events.onInputDown.add(this.onDown, this);
    }
}
  
PhaserMask.prototype.constructor = PhaserMask;

export default PhaserMask;