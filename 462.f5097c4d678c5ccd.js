"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[462],{6821:(O,m,e)=>{e.d(m,{NJ:()=>d.N,kh:()=>b});var d=e(5057),r=e(7625),t=e(4850),l=e(8929),s=e(5e3),c=e(7071),h=e(1995),P=e(2799);let b=(()=>{class u{constructor(g,f,v,p){this._firebase=g,this._listItem=f,this._db=v,this._localStoarage=p,this._unSubscribe=new l.xQ}resolve(g,f){this._firebase.allDateTwoColection("users","item_new").snapshotChanges().pipe((0,r.R)(this._unSubscribe),(0,t.U)(v=>v.map(p=>p.payload.doc.data()))).subscribe(v=>this._listItem.retriveData(v))}ngOnDestroy(){this._unSubscribe.next(),this._unSubscribe.complete()}}return u.\u0275fac=function(g){return new(g||u)(s.LFG(c.M),s.LFG(d.N),s.LFG(h.ST),s.LFG(P._g))},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},5057:(O,m,e)=>{e.d(m,{N:()=>t});var d=e(591),r=e(5e3);let t=(()=>{class l{constructor(){this._dataList=new d.X(new Array),this.dataComming$=this._dataList.asObservable()}retriveData(c){this._dataList.next(c)}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7462:(O,m,e)=>{e.r(m),e.d(m,{TransportModule:()=>B});var d=e(9808),r=e(7587),t=e(5e3),l=e(1279),s=e(2198);function c(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1," > "),t.qZA())}function h(n,i){if(1&n&&(t.TgZ(0,"span"),t.TgZ(1,"a",2),t._uU(2),t.qZA(),t.YNc(3,c,2,0,"span",3),t.qZA()),2&n){const o=i.$implicit,a=i.last;t.xp6(1),t.Q6J("routerLink",o.url),t.xp6(1),t.hij("",o.label," "),t.xp6(1),t.Q6J("ngIf",!a)}}let P=(()=>{class n{constructor(o,a){this._activateRouter=o,this._router=a,this.initializeBreadCrumb()}ngOnInit(){this.initializeBreadCrumb()}initializeBreadCrumb(){this._router.events.pipe((0,s.h)(o=>o instanceof r.m2)).subscribe(o=>{this.breadcrumbs=[];let a=this._activateRouter.root,C="";do{let I=a.children;a=null,I.forEach(M=>{"primary"===M.outlet&&(C+="/"+M.snapshot.url.map(x=>x.path).join("/"),this.breadcrumbs.push({label:M.snapshot.data.breadCrumb,url:C}),this.breadcrumbs=this.breadcrumbs.filter((x,R,D)=>R===D.findIndex(z=>z.label===x.label)),a=M)})}while(a)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.gz),t.Y36(r.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["elix-bread-crumb"]],decls:2,vars:1,consts:[[1,"bread__crumb"],[4,"ngFor","ngForOf"],["routerLinkActive","bread__crumb-active",3,"routerLink"],[4,"ngIf"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.YNc(1,h,4,3,"span",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",a.breadcrumbs))},directives:[d.sg,r.yS,r.Od,d.O5],styles:[""]}),n})();function b(n,i){if(1&n&&(t.TgZ(0,"div",12),t._UZ(1,"mat-icon",7),t.TgZ(2,"div",8),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA(),t.qZA()),2&n){const o=i.$implicit;t.Q6J("routerLinkActive","active")("routerLink",o.path),t.xp6(1),t.Q6J("svgIcon",o.icon),t.xp6(3),t.hij(" ",o.name," ")}}function u(n,i){1&n&&(t.TgZ(0,"div"),t._UZ(1,"router-outlet"),t.qZA())}function T(n,i){1&n&&(t.TgZ(0,"div",13),t.TgZ(1,"div",14),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"div"),t._UZ(4,"a",16),t.qZA(),t.qZA())}let g=(()=>{class n{constructor(o,a){this._activateRouter=o,this._router=a,this.activeRoute=!1,this.routerForSideBar=this._activateRouter.snapshot.data.data,this._router.events.subscribe(C=>{C instanceof r.m2&&(this.activeRoute="/tms"===C.url)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.gz),t.Y36(r.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["elix-transport"]],decls:16,vars:4,consts:[[1,"flex","z-50"],[1,"flex"],[1,"h-full","transport__menu","absolute"],[1,"h-full"],[1,"flex-col","overflow-y-auto","h-full","overflow-hidden","transport__menu-bar"],["class","flex transport__menu-child relative cursor-pointer",3,"routerLinkActive","routerLink",4,"ngFor","ngForOf"],[1,"flex","transport__menu-child","relative","cursor-pointer"],[1,"ml-1.5","mr-2.5",3,"svgIcon"],[1,"transport__text","justify-start","text-sm","text-base"],[1,"ml-6","absolute","transport__frame-content","mr-6"],[4,"ngIf"],["class","flex flex-col justify-center item-center mt-24 transport__img",4,"ngIf"],[1,"flex","transport__menu-child","relative","cursor-pointer",3,"routerLinkActive","routerLink"],[1,"flex","flex-col","justify-center","item-center","mt-24","transport__img"],[1,"flex","justify-center","transport__airplane"],["src","assets/img/transport.jpeg"],["routerLink","items"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.YNc(6,b,5,4,"div",5),t.TgZ(7,"div",6),t._UZ(8,"mat-icon",7),t.TgZ(9,"div",8),t.TgZ(10,"span"),t._uU(11," Logout"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t._UZ(13,"elix-bread-crumb"),t.YNc(14,u,2,0,"div",10),t.YNc(15,T,5,0,"div",11),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngForOf",a.routerForSideBar),t.xp6(2),t.Q6J("svgIcon","fa_solid:sign-out-alt"),t.xp6(6),t.Q6J("ngIf",!a.activeRoute),t.xp6(1),t.Q6J("ngIf",a.activeRoute))},directives:[d.sg,l.Hw,P,d.O5,r.Od,r.rH,r.lC,r.yS],styles:['.transport__frame-content[_ngcontent-%COMP%]{color:var(--primary-color-text);width:95vw;padding:.6rem 0 .4rem 3rem;position:relative}.transport__frame-content[_ngcontent-%COMP%]   .transport__frame-img[_ngcontent-%COMP%]{position:relative}.transport__frame-content[_ngcontent-%COMP%]   .transport__frame-img[_ngcontent-%COMP%]:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to right bottom,rgba(243,243,246,.4),rgba(75,75,149,.39))}.transport__menu[_ngcontent-%COMP%]{width:3rem;transition:all .5s ease-in;color:var(--primary-color-text);z-index:100;height:92.5vh}.transport__menu[_ngcontent-%COMP%]   .transport__menu-bar[_ngcontent-%COMP%]{height:100vh}.transport__menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:var(--primary-color-background)}.transport__menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center}.transport__menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover:after{position:absolute;content:"";height:100%;width:100%;background:var(--primary-color-text);z-index:100;opacity:.4}.transport__menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .transport__text[_ngcontent-%COMP%]{transition:all .2s;align-items:center;min-width:12rem;z-index:100}.transport__menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--second-primary-text)}.transport__menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:.5rem;transform:scale(1.5)}.transport__menu[_ngcontent-%COMP%]:hover{width:15rem;z-index:100;box-shadow:1rem 1rem 24px #0302014d}.transport__menu[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center}.transport__menu[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .transport__text[_ngcontent-%COMP%]{align-items:center;min-width:13rem;display:flex;animation:test .3s ease-in-out;transition:all .2s ease-in}.transport__menu[_ngcontent-%COMP%]   .transport__menu-child[_ngcontent-%COMP%]{height:3rem;z-index:100}.transport__menu[_ngcontent-%COMP%]   .transport__menu-child[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:2rem}@keyframes test{0%{min-width:0}to{min-width:13rem;display:flex;opacity:1}}']}),n})();var f=e(7116),v=e(520),p=e(166);let Z=(()=>{class n{constructor(o,a){this._http=o,this._plBillingService=a}resolve(){return this._plBillingService.dataNextCoins()}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(v.eN),t.LFG(p.Y))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=e(6821);const A=[{path:"",component:g,data:{data:f.K.tms},children:[{path:"dashboard",loadChildren:()=>e.e(144).then(e.bind(e,4144)).then(n=>n.DashboardModule),data:{breadCrumb:"Dashboard"}},{path:"items",loadChildren:()=>Promise.all([e.e(223),e.e(766),e.e(47)]).then(e.bind(e,3047)).then(n=>n.ItemModule),resolve:{data:y.kh}},{path:"pck-collection",loadChildren:()=>e.e(913).then(e.bind(e,2913)).then(n=>n.PickupColectionModule),data:{breadCrumb:"Package Collection"}},{path:"shp-transportation",loadChildren:()=>e.e(28).then(e.bind(e,28)).then(n=>n.ShippingTransportationModule),data:{breadCrumb:"Ship Transportation"}},{path:"delivery",loadChildren:()=>e.e(664).then(e.bind(e,9664)).then(n=>n.DeliveryModule),data:{breadCrumb:"Delivery"}},{path:"ctm-support",loadChildren:()=>e.e(442).then(e.bind(e,2149)).then(n=>n.CustomerSupportModule),data:{breadCrumb:"Ctm Support"}},{path:"billing",loadChildren:()=>e.e(149).then(e.bind(e,4149)).then(n=>n.BillingModule),data:{breadCrumb:"Billing"}},{path:"3-pl-billing",loadChildren:()=>e.e(812).then(e.bind(e,3812)).then(n=>n.PlBillingModule),resolve:{coins:Z},data:{breadCrumb:"pl-billing"}},{path:"api",loadChildren:()=>e.e(387).then(e.bind(e,3387)).then(n=>n.ApiModule)},{path:"customer-vendor",loadChildren:()=>e.e(687).then(e.bind(e,2687)).then(n=>n.CustomerVendorModule),data:{breadCrumb:"Customer Vendor"}}]}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(A)],r.Bz]}),n})();var L=e(4466);let B=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,F,l.Ps,L.m]]}),n})()},166:(O,m,e)=>{e.d(m,{Y:()=>l});var d=e(591),r=e(5e3),t=e(520);let l=(()=>{class s{constructor(h){this._http=h,this._walletInformation=new d.X({}),this.walletData$=this._walletInformation.asObservable()}dataNextCoins(){return this._http.get("https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd")}}return s.\u0275fac=function(h){return new(h||s)(r.LFG(t.eN))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);