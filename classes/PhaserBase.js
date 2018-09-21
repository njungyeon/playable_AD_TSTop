function PhaserBase(props) {
    this.o_id = null;
    if(props.id) {
      this.o_id = props.id;
    }
    this.game = props.game;
    this.body = null;
    this.data = null;
  }
   
  module.exports = PhaserBase;