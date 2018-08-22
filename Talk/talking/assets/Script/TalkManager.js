// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        maxWidth: 717,
       editbox:cc.Node,
       OpersonImg:cc.SpriteFrame,
       MpersonImg:cc.SpriteFrame,
       talkImg:cc.SpriteFrame,
       persontalk:cc.Prefab,
       mypersontalk:cc.Prefab,
       isother:false,
       talk:cc.Node,
    },
    
    send:function(){
      var editBox=this.editbox.getComponent(cc.EditBox).string;
      if(editBox!==""){
         //生成对话框
         if(this.isother){
            var persontalk=cc.instantiate(this.persontalk);
         }else{
            var persontalk=cc.instantiate(this.mypersontalk);
         } 
         persontalk.parent=this.talk;
         //var talkbox=persontalk.getChildByName("talkbox");
         var talkLabel=persontalk.getChildByName("talkLabel");
         talkLabel.getComponent(cc.Label).overflow = cc.Label.Overflow.NONE;
         talkLabel.getComponent(cc.Label).string=editBox;
         if(talkLabel.width >= this.maxWidth){
            talkLabel.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            talkLabel.width = this.maxWidth;
            //自适应高度
            var height=talkLabel.getContentSize().height;
            var height1=height+40;
            persontalk.height=height1;
        }   
      }
    },
    switch:function(){
        this.isother=!this.isother;
    },
});
