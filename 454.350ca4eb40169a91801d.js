"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[454],{8454:(D,s,a)=>{a.r(s),a.d(s,{ItemModule:()=>w});var l=a(8583),c=a(4419),t=a(7716),Z=a(6627);let u=(()=>{class e{constructor(i,r){this._el=i,this._renderer=r,this._renderer.addClass(this._el.nativeElement,"vorkurt__primary-btn")}mouseClick(){this._renderer.addClass(this._el.nativeElement,"vorkurt__primary-btn")}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(t.SBq),t.Y36(t.Qsj))},e.\u0275dir=t.lG2({type:e,selectors:[["","elixBtnPrimary",""]],hostBindings:function(i,r){1&i&&t.NdJ("click",function(){return r.mouseClick()})}}),e})();const v=function(e){return[e]};function T(e,o){if(1&e&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("routerLink",t.VKq(2,v,i)),t.xp6(1),t.hij(" > ",i," ")}}let _=(()=>{class e{constructor(i,r){this._route=i,this._activateRouter=r,this.url=i.url.split("/").slice(1)}ngOnInit(){}goToPage(i){"new"===i&&(this._route.navigate(["new"],{relativeTo:this._activateRouter}),console.log(this.buttons))}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(c.F0),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["elix-item"]],decls:18,vars:2,consts:[[1,"item-wrapper"],[1,"item-branch","h-full"],[1,"item__route-easy"],["class","route",3,"routerLink",4,"ngFor","ngForOf"],[1,"package-item","flex","flex-row","items-center"],[1,"flex-1"],[3,"svgIcon"],[1,"item__pagination-button"],[1,"mr-2"],["elixBtnPrimary","",1,"mr-5",3,"click"],["elixBtnPrimary","",3,"click"],[1,"package__item-content","h-full"],[1,"route",3,"routerLink"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,T,2,4,"span",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"span"),t._uU(6," Package Item "),t.qZA(),t.TgZ(7,"span",5),t._UZ(8,"mat-icon",6),t.qZA(),t.TgZ(9,"div",7),t.TgZ(10,"span",8),t._uU(11," 1 of 1 "),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return r.goToPage("new")}),t._uU(13," New"),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return r.goToPage("finish")}),t._uU(15," Finished"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngForOf",r.url),t.xp6(5),t.Q6J("svgIcon","fa_solid:star"))},directives:[l.sg,Z.Hw,u,c.lC,c.rH],styles:[".item-wrapper[_ngcontent-%COMP%]{height:85vh}"]}),e})();var n=a(3679);function m(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){let r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==i?r:3&r|8).toString(16)})}var f=a(6916),x=a(6215);let d=(()=>{class e{constructor(){this._dataTooltip=new x.X(""),this.dataSend$=this._dataTooltip.asObservable()}dataNextTooltip(i){this._dataTooltip.next(i)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=a(8753);function A(e,o){if(1&e&&(t.TgZ(0,"elix-jumbotron",1),t.TgZ(1,"div"),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.oxw();t.Q6J("type","template"),t.xp6(3),t.hij(" ",i.value," ")}}let h=(()=>{class e{constructor(i){this._tooltipService=i}ngOnInit(){this._tooltipService.dataSend$.subscribe(i=>this.value=i)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["elix-items-tooltip"]],decls:1,vars:1,consts:[["class","items__tooltip-wrapper",3,"type",4,"ngIf"],[1,"items__tooltip-wrapper",3,"type"]],template:function(i,r){1&i&&t.YNc(0,A,4,2,"elix-jumbotron",0),2&i&&t.Q6J("ngIf",r.value)},directives:[l.O5,I.w],styles:[".items__tooltip-wrapper[_ngcontent-%COMP%]{color:var(--primary-color-text)}"]}),e})();var y=a(531);let q=(()=>{class e{constructor(i,r,p){this._elementRef=i,this._overlayAll=r,this._tooltipService=p}mouseOver(){const i=this._elementRef.nativeElement;this._tooltipService.dataNextTooltip(this._elementRef.nativeElement.value),this._overlayAll.display(i,h)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(t.SBq),t.Y36(y.F),t.Y36(d))},e.\u0275dir=t.lG2({type:e,selectors:[["","elixTooltipDirective",""]],hostBindings:function(i,r){1&i&&t.NdJ("click",function(){return r.mouseOver()})},inputs:{name:"name"}}),e})();var g=a(7539);const k=[{path:"",component:_,children:[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["elix-list-items"]],decls:2,vars:0,template:function(i,r){1&i&&(t.TgZ(0,"p"),t._uU(1,"list-items works!"),t.qZA())},styles:[""]}),e})()},{path:"new",component:(()=>{class e{constructor(){this.items=new n.cw({pckItemId:new n.NI(m()),itemId:new n.NI(m()),hazmatPckTypeId:new n.NI(""),pckWeight:new n.NI(""),pckWidth:new n.NI(""),unitLength:new n.NI(""),diameterPerShipUnit:new n.NI(""),pckItemTypeId:new n.NI(""),innerPackPckUnit:new n.NI(""),bulkMixingFamilyId:new n.NI(""),description:new n.NI(""),priority:new n.NI(""),pckUnit:new n.NI(""),unitVolume:new n.NI(""),unitWidth:new n.NI(""),coreDiameter:new n.NI(""),thuProfileId:new n.NI(""),innerPackSize:new n.NI(""),compartmentTypeProfileId:new n.NI(""),hazaradous:new n.NI(!1),mixable:new n.NI(!1),defaultPck:new n.NI(!1),unitHeight:new n.NI(""),loadConfigRuleRank:new n.NI(""),innerPckSizeUOMcode:new n.NI(""),categoryId:new n.NI(m())})}ngOnInit(){}getValue(){console.log(this.items.value)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["elix-new-items"]],decls:141,vars:7,consts:[[1,"package__item-content"],[1,"item-branch"],[3,"formGroup"],[1,"package__item-content-child","p-5"],[1,"package__item__content-per"],[1,"flex-row"],[1,"text-red-500"],["elixInputPrimary",""],["elixTooltipDirective","","type","text","id","pckItemId","readonly","","formControlName","pckItemId",1,"overflow-ellipsis","item-background__input",2,"border","none"],["readonly","","elixTooltipDirective","","id","item-id","type","text","formControlName","itemId",1,"overflow-ellipsis","item-background__input"],["elixTooltipDirective","","id","hazmatPck","type","text","formControlName","hazmatPckTypeId"],["id","pckWeight","type","text","formControlName","pckWeight"],["id","pckWidth","type","text","formControlName","pckWidth"],[1,"vorkurt__primary-input"],["id","unitLength","type","text","formControlName","unitLength"],["id","diameterPerShipUnit","type","text","formControlName","diameterPerShipUnit"],["id","pckItemTypeId","type","text","formControlName","pckItemTypeId"],["id","bulkMixingFamilyId","type","text","formControlName","bulkMixingFamilyId"],["elixTooltipDirective","","id","description","formControlName","description"],["id","priority","type","text","formControlName","priority"],["id","pckUnit","type","text","formControlName","pckUnit"],["id","unitVolume","type","text","formControlName","unitVolume"],["id","unitWidth","type","text","formControlName","unitWidth"],["id","coreDiameter","type","text","formControlName","coreDiameter"],["id","thuProfileId","type","text","formControlName","thuProfileId"],["id","innerPackSize","type","text","formControlName","innerPackSize"],["id","compartmentTypeProfileId","type","text","formControlName","compartmentTypeProfileId"],[1,"example-margin",3,"checked","color"],[1,"mt-20"],["id","unitHeight","type","text","formControlName","unitHeight"],["id","loadConfigRuleRank","type","text","formControlName","loadConfigRuleRank"],["id","innerPckSizeUOMcode","type","text","formControlName","innerPckSizeUOMcode"],["elixTooltipDirective","","id","categoryId","type","text","formControlName","categoryId",1,"overflow-ellipsis","item-background__input"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div"),t.TgZ(7,"span",6),t._uU(8,"*"),t.qZA(),t._uU(9," Package Item ID "),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"input",8),t.qZA(),t.qZA(),t.TgZ(12,"div"),t.TgZ(13,"span",6),t._uU(14,"*"),t.qZA(),t.TgZ(15,"span"),t._uU(16,"Item ID"),t.qZA(),t.TgZ(17,"span"),t.TgZ(18,"div",7),t._UZ(19,"input",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div"),t.TgZ(21,"span"),t._uU(22,"Hazmat Package Type ID"),t.qZA(),t.TgZ(23,"div",7),t._UZ(24,"input",10),t.qZA(),t.qZA(),t.TgZ(25,"div"),t.TgZ(26,"span"),t._uU(27,"Package weight"),t.qZA(),t.TgZ(28,"div",7),t._UZ(29,"input",11),t.qZA(),t.qZA(),t.TgZ(30,"div"),t.TgZ(31,"span"),t._uU(32,"Package width"),t.qZA(),t.TgZ(33,"div",7),t._UZ(34,"input",12),t.qZA(),t.qZA(),t.TgZ(35,"div"),t.TgZ(36,"span"),t._uU(37,"Unit Length"),t.qZA(),t.TgZ(38,"div",13),t._UZ(39,"input",14),t.qZA(),t.qZA(),t.TgZ(40,"div"),t.TgZ(41,"span"),t._uU(42,"Diameter per Ship Unit"),t.qZA(),t.TgZ(43,"div",7),t._UZ(44,"input",15),t.qZA(),t.qZA(),t.TgZ(45,"div"),t.TgZ(46,"span"),t._uU(47,"Package item Type ID"),t.qZA(),t.TgZ(48,"div",7),t._UZ(49,"input",16),t.qZA(),t.qZA(),t.TgZ(50,"div"),t.TgZ(51,"span"),t._uU(52,"Inner Pack Packaging Unit"),t.qZA(),t._UZ(53,"span"),t.qZA(),t.TgZ(54,"div"),t.TgZ(55,"span"),t._uU(56,"Bulk Mixing Family ID"),t.qZA(),t.TgZ(57,"div",7),t._UZ(58,"input",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"div",4),t.TgZ(60,"div"),t.TgZ(61,"span"),t._uU(62,"Description"),t.qZA(),t.TgZ(63,"div",7),t._UZ(64,"textarea",18),t.qZA(),t.qZA(),t.TgZ(65,"div"),t.TgZ(66,"span"),t._uU(67,"Priority"),t.qZA(),t.TgZ(68,"div",7),t._UZ(69,"input",19),t.qZA(),t.qZA(),t.TgZ(70,"div"),t.TgZ(71,"span"),t._uU(72,"Packaging unit"),t.qZA(),t.TgZ(73,"div",7),t._UZ(74,"input",20),t.qZA(),t.qZA(),t.TgZ(75,"div"),t.TgZ(76,"span"),t._uU(77,"Unit Volume"),t.qZA(),t.TgZ(78,"div",7),t._UZ(79,"input",21),t.qZA(),t.qZA(),t.TgZ(80,"div"),t.TgZ(81,"span"),t._uU(82,"Unit width"),t.qZA(),t.TgZ(83,"div",7),t._UZ(84,"input",22),t.qZA(),t.qZA(),t.TgZ(85,"div"),t.TgZ(86,"span"),t._uU(87,"Core Diameter"),t.qZA(),t.TgZ(88,"div",7),t._UZ(89,"input",23),t.qZA(),t.qZA(),t.TgZ(90,"div"),t.TgZ(91,"span"),t._uU(92,"THU Profile ID"),t.qZA(),t.TgZ(93,"div",7),t._UZ(94,"input",24),t.qZA(),t.qZA(),t.TgZ(95,"div"),t.TgZ(96,"span"),t._uU(97,"Inner Pack Size"),t.qZA(),t.TgZ(98,"div",7),t._UZ(99,"input",25),t.qZA(),t.qZA(),t.TgZ(100,"div"),t.TgZ(101,"span"),t._uU(102,"Compartment Type Profile ID"),t.qZA(),t.TgZ(103,"div",7),t._UZ(104,"input",26),t.qZA(),t.qZA(),t.qZA(),t.TgZ(105,"div",4),t.TgZ(106,"div"),t.TgZ(107,"span"),t._uU(108,"Hazaradous"),t.qZA(),t.TgZ(109,"div",7),t._UZ(110,"mat-checkbox",27),t.qZA(),t.qZA(),t.TgZ(111,"div",28),t.TgZ(112,"span"),t._uU(113,"Mixable"),t.qZA(),t.TgZ(114,"div",7),t._UZ(115,"mat-checkbox",27),t.qZA(),t.qZA(),t.TgZ(116,"div"),t.TgZ(117,"span"),t._uU(118,"Default Packaging"),t.qZA(),t.TgZ(119,"div",7),t._UZ(120,"mat-checkbox",27),t.qZA(),t.qZA(),t.TgZ(121,"div"),t.TgZ(122,"span"),t._uU(123,"Unit Height"),t.qZA(),t.TgZ(124,"div",7),t._UZ(125,"input",29),t.qZA(),t.qZA(),t.TgZ(126,"div"),t.TgZ(127,"span"),t._uU(128,"Load Config Rule Rank"),t.qZA(),t.TgZ(129,"div",7),t._UZ(130,"input",30),t.qZA(),t.qZA(),t.TgZ(131,"div"),t.TgZ(132,"span"),t._uU(133,"Inner Pack Size UOM Code "),t.qZA(),t.TgZ(134,"div",7),t._UZ(135,"input",31),t.qZA(),t.qZA(),t.TgZ(136,"div"),t.TgZ(137,"span"),t._uU(138,"Category ID"),t.qZA(),t.TgZ(139,"div",7),t._UZ(140,"input",32),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(2),t.Q6J("formGroup",r.items),t.xp6(108),t.Q6J("checked",!1)("color","primary"),t.xp6(5),t.Q6J("checked",!1)("color","primary"),t.xp6(5),t.Q6J("checked",!1)("color","primary"))},directives:[n._Y,n.JL,n.sg,f.F,n.Fj,q,n.JJ,n.u,g.oG],styles:[".package__item-content[_ngcontent-%COMP%]{border:1px solid;overflow:auto}.package__item-content[_ngcontent-%COMP%]   .item-branch[_ngcontent-%COMP%]   .package__item-content-child[_ngcontent-%COMP%]{display:flex;justify-content:space-between;text-transform:capitalize;height:84vh}.package__item-content[_ngcontent-%COMP%]   .item-branch[_ngcontent-%COMP%]   .package__item-content-child[_ngcontent-%COMP%]   .item-background__input[_ngcontent-%COMP%]{background:var(--secondary-input-background)}.package__item-content[_ngcontent-%COMP%]   .item-branch[_ngcontent-%COMP%]   .package__item-content-child[_ngcontent-%COMP%]   .package__item__content-per[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around}.package__item-content[_ngcontent-%COMP%]   .item-branch[_ngcontent-%COMP%]   .package__item-content-child[_ngcontent-%COMP%]   .package__item__content-per[_ngcontent-%COMP%]   .example-margin[_ngcontent-%COMP%]:not(:checked){border:1px solid var(--second-primary-text);border-radius:.3rem;outline:none}"]}),e})()}]}];let U=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),e})();var C=a(1095),P=a(4466),N=a(9983);let w=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,U,Z.Ps,C.ot,g.p9,P.m,N.c,n.UX]]}),e})()}}]);