"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[342],{7342:(J,l,r)=>{r.r(l),r.d(l,{TimerModule:()=>w});var a=r(8583),c=r(4419),t=r(7716),f=r(2809),d=r(1095),m=r(6627),p=r(9983),u=r(3679);function T(i,s){1&i&&(t.TgZ(0,"span",19),t._uU(1," Please introduce a description"),t.qZA())}function _(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){return t.CHM(n),t.oxw().startCounter("start")}),t._uU(1," Start "),t.qZA()}if(2&i){const n=t.oxw();t.Q6J("disabled",!n.descriptionParent)}}function h(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){return t.CHM(n),t.oxw().startCounter("pause")}),t._uU(1," Pause"),t.qZA()}}const g=function(i){return{color:i}},Z=function(i){return{"text-red-400":i}},v=[{path:"",redirectTo:"timer",pathMatch:"full"},{path:"",component:(()=>{class i{constructor(n){this._timerService=n,this.hour=0,this.minute=0,this.second=0,this.countDownDate=new Date,this.clearTimer=!1,this.pause=!0,this.flag=!0,this.distance=1}ngOnInit(){this.timer=window.setInterval(()=>{const n=new Date;this.clearTimer&&this.updateDate(n,this.pause)},1e3)}pauseTimeout(){window.clearInterval(this.timer)}updateTime(n,e,o){"hour"===n&&o&&(this.hour+=e),"minute"===n&&o&&(this.minute+=e),"second"===n&&o&&(this.second+=e),"hour"===n&&!o&&(this.hour>0&&(this.hour-=e),this.hour<0&&(this.hour=0)),"minute"===n&&!o&&(this.minute>0&&(this.minute-=e),this.minute<0&&(this.minute=0)),"second"===n&&!o&&(this.second>0&&(this.second-=e),this.second<0&&(this.second=0))}startCounter(n){"start"===n&&(this.pause=!0,this.clearTimer=!0,this.countDownDate=new Date((new Date).setHours((new Date).getHours()+this.hour,(new Date).getMinutes()+this.minute,(new Date).getSeconds()+this.second)),this.flag=!1),"reset"==n&&(this.pause=!0,this.clearTimer=!0,this.countDownDate=new Date((new Date).setHours((new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds())),this.hour=0,this.minute=0,this.second=0,this.clearTimer=!1,this.descriptionParent="",this.flag=!0),"learn"===n&&(this.clearTimer=!0,this.countDownDate=new Date((new Date).setHours((new Date).getHours(),(new Date).getMinutes()+25,(new Date).getSeconds())),this.flag=!1),"pause"===n&&(this.pause=!1,this.clearTimer=!0,this.countDownDate=new Date((new Date).setHours((new Date).getHours()+this.hour,(new Date).getMinutes()+this.minute,(new Date).getSeconds()+this.second)),this.flag=!0)}onAudioPlay(){let n=new Audio;n.src="./../../../../assets/sound/warn/Msg Tone 2a.mp3",n.load(),n.play().then(e=>{this.anotherTimer=setInterval(()=>{},1e3)})}updateDate(n,e){const o=n.getTime();return e&&(this.distance=this.countDownDate-o,this.flag=!1),this.hour=Math.floor(this.distance%864e5/36e5),this.minute=Math.floor(this.distance%36e5/6e4),this.second=Math.floor(this.distance%6e4/1e3),this.distance<0&&(this.hour=0,this.minute=0,this.second=0,this.clearTimer=!1,this.onAudioPlay(),clearInterval(this.anotherTimer),this._timerService.sendCounterData({name:this.descriptionParent,id:1}),this.flag=!0,this.style="#adbac7",this.descriptionParent=""),this.distance<2e3&&(this.style="red"),this.distance}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(f.f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["elix-timmer"]],decls:77,vars:42,consts:[[1,"flex-col","mb-60","text-9xl","vorkurt__color-text","font-normal","flex","justify-center","items-center","h-1/6"],[3,"ngStyle","ngClass"],[1,"flex","h-full"],["class","text-2xl text-red-400",4,"ngIf"],[1,"timer","sm:text-4xl","lg:text-9xl","vorkurt__color-text","font-normal","h-1/4","flex","flex-col","justify-center","items-center",3,"ngStyle"],[1,"flex"],[1,"vorkurt__padding-button"],[1,"flex","justify-center"],["mat-button","",3,"disabled","click"],[3,"svgIcon"],["mat-raised-button","",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],[1,"flex","items-center","h-5/6"],["mat-raised-button","",3,"disabled","click"],[1,"flex","flex-row-reverse","h-1/4"],[1,"w-1/3"],[1,"flex","justify-center","pr-4","pb-1","text-6xl","vorkurt__color-text"],[1,"flex","justify-center","pr-4","pb-1","h-3/5"],["matInput","",1,"w-full","h-full","px-5","py-1",3,"ngModel","ngModelChange"],[1,"text-2xl","text-red-400"],["mat-raised-button","","color","warn",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," Timer "),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,T,2,0,"span",3),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t.TgZ(9,"button",8),t.NdJ("click",function(){return e.updateTime("hour",10,!0)}),t._UZ(10,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"button",8),t.NdJ("click",function(){return e.updateTime("hour",1,!0)}),t._UZ(13,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(14,"div"),t.TgZ(15,"span"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"div",7),t.TgZ(18,"button",8),t.NdJ("click",function(){return e.updateTime("hour",1,!1)}),t._UZ(19,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(20,"div",7),t.TgZ(21,"button",8),t.NdJ("click",function(){return e.updateTime("hour",10,!1)}),t._UZ(22,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(23,"div"),t.YNc(24,_,2,1,"button",10),t.qZA(),t.TgZ(25,"div"),t.YNc(26,h,2,0,"button",11),t.qZA(),t.qZA(),t.TgZ(27,"div",12),t.TgZ(28,"div"),t._uU(29," : "),t.qZA(),t.qZA(),t.TgZ(30,"div",6),t.TgZ(31,"div",7),t.TgZ(32,"button",8),t.NdJ("click",function(){return e.updateTime("minute",10,!0)}),t._UZ(33,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(34,"div",7),t.TgZ(35,"button",8),t.NdJ("click",function(){return e.updateTime("minute",1,!0)}),t._UZ(36,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(37,"div"),t.TgZ(38,"span"),t._uU(39),t.qZA(),t.qZA(),t.TgZ(40,"div",7),t.TgZ(41,"button",8),t.NdJ("click",function(){return e.updateTime("minute",1,!1)}),t._UZ(42,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(43,"div",7),t.TgZ(44,"button",8),t.NdJ("click",function(){return e.updateTime("minute",10,!1)}),t._UZ(45,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(46,"div"),t.TgZ(47,"button",13),t.NdJ("click",function(){return e.startCounter("reset")}),t._uU(48," Reset"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",12),t.TgZ(50,"div"),t._uU(51," : "),t.qZA(),t.qZA(),t.TgZ(52,"div",6),t.TgZ(53,"div",7),t.TgZ(54,"button",8),t.NdJ("click",function(){return e.updateTime("second",10,!0)}),t._UZ(55,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(56,"div",7),t.TgZ(57,"button",8),t.NdJ("click",function(){return e.updateTime("second",1,!0)}),t._UZ(58,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(59,"div"),t.TgZ(60,"span"),t._uU(61),t.qZA(),t.qZA(),t.TgZ(62,"div",7),t.TgZ(63,"button",8),t.NdJ("click",function(){return e.updateTime("second",1,!1)}),t._UZ(64,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(65,"div",7),t.TgZ(66,"button",8),t.NdJ("click",function(){return e.updateTime("second",10,!1)}),t._UZ(67,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(68,"div"),t.TgZ(69,"button",13),t.NdJ("click",function(){return e.startCounter("learn")}),t._uU(70," Learn Mode "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"div",14),t.TgZ(72,"div",15),t.TgZ(73,"div",16),t._uU(74," Description "),t.qZA(),t.TgZ(75,"div",17),t.TgZ(76,"textarea",18),t.NdJ("ngModelChange",function(C){return e.descriptionParent=C}),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(36,g,e.style))("ngClass",t.VKq(38,Z,!e.descriptionParent)),t.xp6(3),t.Q6J("ngIf",!e.descriptionParent),t.xp6(1),t.Q6J("ngStyle",t.VKq(40,g,e.style)),t.xp6(4),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-up"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-up"),t.xp6(3),t.hij(" ",0===e.hour?"00":e.hour," "),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-down"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-down"),t.xp6(2),t.Q6J("ngIf",e.flag),t.xp6(2),t.Q6J("ngIf",!e.flag),t.xp6(6),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-up"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-up"),t.xp6(3),t.hij(" ",0===e.minute?"00":e.minute," "),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-down"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-down"),t.xp6(2),t.Q6J("disabled",!e.flag||!e.descriptionParent),t.xp6(7),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-up"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-up"),t.xp6(3),t.hij(" ",0===e.second?"00":e.second," "),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:sort-down"),t.xp6(2),t.Q6J("disabled",!e.flag),t.xp6(1),t.Q6J("svgIcon","fa_solid:arrow-down"),t.xp6(2),t.Q6J("disabled",!e.flag||!e.descriptionParent),t.xp6(7),t.Q6J("ngModel",e.descriptionParent))},directives:[a.PC,a.mk,a.O5,d.lW,m.Hw,p.Nt,u.Fj,u.JJ,u.On],styles:[".vorkurt__padding-button[_ngcontent-%COMP%]{width:10rem}.vorkurt__padding-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center}.vorkurt__padding-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important;margin-bottom:2rem}.vorkurt__padding-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{background:red!important}.mat-icon[_ngcontent-%COMP%]{height:3.562rem!important;width:3.562rem!important}@media (max-width: 640px){.mat-icon[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%]{font-size:1.831rem!important}}"]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),i})();var A=r(8295);let w=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.ez,b,m.Ps,d.ot,p.c,A.lN,u.u5]]}),i})()}}]);