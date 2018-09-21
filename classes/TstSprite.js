import PhaserSprite from './PhaserSprite';

class TstSprite extends PhaserSprite {
  constructor(props) {
    super(props);
    
    this.score_digit = { 100: null, 10: null, 1: null };
  }

  onAniComplete(sprite, animation) {//애니매이션이 끝나면 실행될 함수
   
  }

  onAniLoop(sprite, animation) { //설정된 애니메이션의 전체 프레임이 재생된뒤 다시 처음 프레임으로 돌아갈 대 실행되는 콜백함수
 
  }

  onDown(sprite, pointer) {//input을 활성화시키고 버튼을 눌렀을때 실행되는 함수이다.  파라미터 sprite 삭제
    let game = this.game;
    let oId = this.o_id;
    let Id = this.o_id;

    if(this.o_id.indexOf('note1') > -1) {
      oId = 'note1';
    }else if(this.o_id.indexOf('note2') > -1){
      oId = 'note2';
    }
    // else if(this.o_id.indexOf('note_tutorial3') > -1){
    //   oId = 'note_tutorial3';
    // }

    switch(oId) {
      case "button1": {
        let button1 = game.member.components['button1'];
        let straight_line2 = game.member.components['straight_line2'];
        game.add.tween(button1.body.scale).to({ x: 1.1, y: 1.1 }, 80, Phaser.Easing.Linear.None, true, 0, 0, 1);
        game.add.tween(straight_line2.body).to({ alpha: 1 }, 80, Phaser.Easing.Linear.None, true, 0, 0, 1);


        break;
      }
      case "button2": {
        let button2 = game.member.components['button2'];
        let straight_line = game.member.components['straight_line'];
        game.add.tween(button2.body.scale).to({ x: 1.1, y: 1.1 }, 80, Phaser.Easing.Linear.None, true, 0, 0, 1);
        game.add.tween(straight_line.body).to({ alpha: 1 }, 80, Phaser.Easing.Linear.None, true, 0, 0, 1);


        break;
      }
      case "note2": {
        let note = game.member.components[Id];
        let note_light2 = game.member.components['note_light2'];
        let button2 = game.member.components['button2'];
        let straight_line = game.member.components['straight_line'];
        let note_effect = game.member.components['note_effect2'];

        if(note.body.y > 866 && note.body.y < 1088){
          game.add.tween(note.body.scale).to({ x: 1.0, y: 1.0 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(note_light2.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(button2.body.scale).to({ x: 1.1, y: 1.1 }, 30, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(straight_line.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(note_effect.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);

          if(note.body.y > 940 && note.body.y < 1000){            
            this.game.time.events.add(50, function() {
              note.game.member.components['note'] = null;
              note.body.destroy();
            }, this);
  
            this.upScore(1, 'perfect+');
          } else if(note.body.y > 884 && note.body.y < 1070){
            this.upScore(1, 'perfect');
            this.game.time.events.add(50, function() {
              note.game.member.components['note'] = null;
              note.body.destroy();
            }, this);
  
          } else{
            this.game.time.events.add(50, function() {
              note.game.member.components['note'] = null;
              note.body.destroy();
            }, this);
          }
        }

        break;
      }
      case "note1": {
        let note = game.member.components[Id];
        let note_light1 = game.member.components['note_light1'];
        let button1 = game.member.components['button1'];
        let straight_line2 = game.member.components['straight_line2'];
        let note_effect = game.member.components['note_effect1'];

        if(note.body.y > 866 && note.body.y < 1088){
          game.add.tween(note.body.scale).to({ x: 1.0, y: 1.0 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(note_light1.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(button1.body.scale).to({ x: 1.1, y: 1.1 }, 30, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(straight_line2.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
          game.add.tween(note_effect.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);

          if(note.body.y > 940 && note.body.y < 1000){
            game.add.tween(note.body.scale).to({ x: 1.0, y: 1.0 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
            game.add.tween(note_light1.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
            game.add.tween(button1.body.scale).to({ x: 1.1, y: 1.1 }, 30, Phaser.Easing.Linear.None, true, 0, 0, 1);
            game.add.tween(straight_line2.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
            game.add.tween(note_effect.body).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, 1);
            
            this.game.time.events.add(50, function() {
              note.game.member.components['note2'] = null;
              note.body.destroy();
            }, this);
  
            this.upScore(1, 'perfect+');
          } else if(note.body.y > 884 && note.body.y < 1070){
            this.upScore(1, 'perfect');
            this.game.time.events.add(50, function() {
              note.game.member.components['note2'] = null;
              note.body.destroy();
            }, this);
  
          } else{
            this.game.time.events.add(50, function() {
              note.game.member.components['note2'] = null;
              note.body.destroy();
            }, this);
          }
        }
        break;
      }
      case "pause_button": {
        let tutorial_mask = game.member.components['tutorial_mask'];
        let pause_panel = game.member.components['pause_panel'];
        let continue_button = game.member.components['continue_button'];
        let download_button = game.member.components['download_button'];
        let restart_count = game.member.components['restart_count'];  
        let pause_button = game.member.components['pause_button'];
        let noteCreateEvent = game.member.components['noteCreateEvent'];

        if(!this.game.paused){
          this.game.paused = true;
          tutorial_mask.body.visible = true;
          pause_panel.body.visible = true;
          continue_button.body.visible = true;
          download_button.body.visible = true;
          tutorial_mask.game.world.bringToTop(tutorial_mask.body);
          pause_panel.game.world.bringToTop(pause_panel.body);          
          download_button.game.world.bringToTop(download_button.body);
          continue_button.game.world.bringToTop(continue_button.body);
          pause_button.body.inputEnabled = false;

          game.data.game_mode = 'PAUSE';

          
        }else {
          tutorial_mask.body.visible = false;
          pause_panel.body.visible = false;
          continue_button.body.visible = false;
          download_button.body.visible = false;
          this.game.paused = false;

          restart_count.body.visible = true;

          this.game.time.events.add(1000, function(){ restart_count.body.loadTexture('perfect+_2', 0); }, this);
          this.game.time.events.add(2000, function(){ restart_count.body.loadTexture('perfect+_1', 0); }, this);
          this.game.time.events.add(3000, function(){
            restart_count.body.visible = false;
            pause_button.body.inputEnabled = true;
            
            restart_count.body.loadTexture('perfect+_3', 0);
          }, this);

          
        }        
        break;
      }
      case "continue_button": {
        let tutorial_mask = game.member.components['tutorial_mask'];
        let pause_panel = game.member.components['pause_panel'];
        let continue_button = game.member.components['continue_button'];
        let download_button = game.member.components['download_button'];
        let restart_count = game.member.components['restart_count'];
        let pause_button = game.member.components['pause_button'];
        let noteEventCnt = game.data.noteEventArr.length;

        tutorial_mask.body.visible = false;
        pause_panel.body.visible = false;
        continue_button.body.visible = false;
        download_button.body.visible = false;
        this.game.paused = false;
        // noteCreateEvent.timer.stop(false);
        // noteCreateEvent.timer.start();
        // noteCreateEvent.timer.running = false;

        for(let i=0; i< noteEventCnt; i++){
          game.data.noteEventArr[i].pause();
        }
        console.log(game.data.noteEventArr);

        // if(GAME.data.game_mode === '')
        restart_count.body.visible = true;

        this.game.time.events.add(1000, function(){ restart_count.body.loadTexture('perfect+_2', 0); }, this);
        this.game.time.events.add(2000, function(){ restart_count.body.loadTexture('perfect+_1', 0); }, this);
        this.game.time.events.add(3000, function(){
          restart_count.body.visible = false;
          pause_button.body.inputEnabled = true;
          game.data.game_mode = 'GAME_START';

          for(let i=0; i< noteEventCnt; i++){
            game.data.noteEventArr[i].resume();
          }
          
          
          restart_count.body.loadTexture('perfect+_3', 0);
        }, this);
        
        break;
      }

      
      case "note_tutorial1_1": {
        let note_tutorial1 = game.member.components['note_tutorial1_1'];
        let click_hand = game.member.components['click_hand'];
        let tutorial1_text = game.member.components['tutorial1_text'];
        let tutorial_mask = game.member.components['tutorial_mask'];
        let tutorial1_event_click = game.member.components['tutorial1_event_click'];

        note_tutorial1.game.member.components['note_tutorial1_1'] = null;
        note_tutorial1.body.destroy();
        tutorial1_event_click.timer.game.member.components['tutorial1_event_click'] = null;
        game.time.events.remove(tutorial1_event_click);

        click_hand.body.visible = false;
        tutorial1_text.body.visible = false;
        tutorial_mask.body.visible = false;

        this.upScore(1);
        game.func.tutorial2();

        break;
      }
      case "note_tutorial2_2": {
        this.game.data.dragStartPoint = pointer.x;
        this.game.data.dragStopPoint = pointer.y;

        console.log("ondown", pointer.x);
        console.log(Date.now());
      
        break;
      }

      case "note_tutorial3_1": {
        let note_tutorial3_1 = game.member.components['note_tutorial3_1'];
        let note_tutorial3_2 = game.member.components['note_tutorial3_2'];
        let click_hand = game.member.components['click_hand'];
        let click_hand3 = game.member.components['click_hand3'];
        let tutorial3_text = game.member.components['tutorial3_text'];
        let tutorial_mask = game.member.components['tutorial_mask'];

        this.game.data.note_tutorial3_1_time = Date.now();
        let differ1 = this.game.data.note_tutorial3_2_time - Date.now();

        if(Math.abs(differ1) < 1500){
          note_tutorial3_1.game.member.components['note_tutorial3_1'] = null;
          note_tutorial3_1.body.destroy();
          note_tutorial3_2.game.member.components['note_tutorial3_2'] = null;
          note_tutorial3_2.body.destroy();

          click_hand.body.visible = false;
          click_hand3.body.visible = false;
          tutorial3_text.body.visible = false;
          tutorial_mask.body.visible = false;

          this.upScore(2);

          this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.game.func.createnote, this);
        }       
      
        break;
      }
      case "note_tutorial3_2": {
        let note_tutorial3_1 = game.member.components['note_tutorial3_1'];
        let note_tutorial3_2 = game.member.components['note_tutorial3_2'];
        let click_hand = game.member.components['click_hand'];
        let click_hand3 = game.member.components['click_hand3'];
        let tutorial3_text = game.member.components['tutorial3_text'];
        let tutorial_mask = game.member.components['tutorial_mask'];


        this.game.data.note_tutorial3_2_time = Date.now();
        let differ2 = this.game.data.note_tutorial3_1_time - Date.now();

        if( Math.abs(differ2) < 1500){
          note_tutorial3_1.game.member.components['note_tutorial3_1'] = null;
          note_tutorial3_1.body.destroy();
          note_tutorial3_2.game.member.components['note_tutorial3_2'] = null;
          note_tutorial3_2.body.destroy();

          click_hand.body.visible = false;
          click_hand3.body.visible = false;
          tutorial3_text.body.visible = false;
          tutorial_mask.body.visible = false;

          this.upScore(2);
          this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.game.func.createnote, this);
        }     
        break;
      }

    }
  }

  onOver(sprite) {
  }

  onOut(sprite) {
  }

  onUp(sprite, pointer) {
    let Id = this.o_id;
    switch(Id){
      case "note_tutorial2_2": {
        let note_tutorial2 = this.game.member.components['note_tutorial2_2'];
        let click_hand = this.game.member.components['click_hand'];
        let tutorial2_text = this.game.member.components['tutorial2_text'];
        let tutorial_mask = this.game.member.components['tutorial_mask'];
        let tutorial2_event_click = this.game.member.components['tutorial2_event_click'];
    
        if(pointer.x - this.game.data.dragStartPoint > 20){
          note_tutorial2.game.member.components['note_tutorial2_2'] = null;
          note_tutorial2.body.destroy();
          tutorial2_event_click.timer.game.member.components['tutorial2_event_click'] = null;
          this.game.time.events.remove(tutorial2_event_click);
          click_hand.body.visible = false;
          tutorial2_text.body.visible = false;
          tutorial_mask.body.visible = false;
    
          this.upScore(1);
          this.game.func.tutorial3();
    
        }else{
          note_tutorial2.body.x = 610;
          note_tutorial2.body.y = 970;
          //버튼을 다시 원위치로 돌려두기
        }
        console.log( "ondown", pointer.x);
      
        break;
      }    
    }
  }


  upScore(plusScore, typeScore) {//combo_cnt
    // let scoreGrp = [];
    // let distance = 10;
    this.game.data.combo_cnt += plusScore;
    let combo_cnt = this.game.data.combo_cnt;
    let perfect = this.game.member.components['perfect+'];

    let x = 0;
    let y = 0;

    let strCnt = combo_cnt.toString();
    if(strCnt.length === 1){
      x = 360;
    }else if(strCnt.length === 2){
      x = 330;
    }else x=300;

    let positionalNum1 = strCnt.charAt(strCnt.length - 1);
    let positionalNum10 = strCnt.charAt(strCnt.length - 2);
    let positionalNum100 = strCnt.charAt(strCnt.length - 3);
    
    for(let i = 0, digit = 100 ; i < strCnt.length ; i++, digit = digit / 10) {
      let spriteId = 'combo_cnt_' + digit;
      let cha = strCnt.charAt(i);
      perfect.body.loadTexture(typeScore, 0);
      perfect.body.visible = true;
      perfect.body.scale.setTo(1.6);
      let comboSprite = new TstSprite({
        game: this.game,
        x: x,
        y: 640,
        image_key: typeScore + '_'+ cha,
        id: spriteId,
        visible: true //false
      });

      comboSprite.body.scale.setTo(1.6);
      
      this.game.add.tween(perfect.body.scale).to({ x: 1.0, y: 1.0 }, 200, Phaser.Easing.Linear.None, true );
      this.game.add.tween(comboSprite.body.scale).to({ x: 1.0, y: 1.0 }, 200, Phaser.Easing.Linear.None, true);

      // this.game.add.tween(perfect.body.scale).to({ x: 1.0, y: 1.0 }, 30, Phaser.Easing.Linear.None, true, 300 );
      // this.game.add.tween(comboSprite.body.scale).to({ x: 1.0, y: 1.0 }, 30, Phaser.Easing.Linear.None, true, 300);

      this.score_digit[digit] = comboSprite; //digit = 100 ,10, 1 에 객체 하나하나 들어가게 된다

      this.game.time.events.add(700, function() {
        perfect.body.visible = false;
        comboSprite.game.member.components[comboSprite.o_id] = null;
        comboSprite.body.destroy();        
      }, this);

      x+=50;
    }



  }
}

export default TstSprite;
