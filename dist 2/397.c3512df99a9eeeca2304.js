(self.webpackChunkregulatagen=self.webpackChunkregulatagen||[]).push([[397],{8397:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AdminOperasionalModule:()=>f});var i=n(1116),o=n(2501),r=n.n(o),a=n(8619),c=n(3319),s=n(3957);function g(t,e){if(1&t&&(a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"p",17),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"td"),a.TgZ(5,"p",18),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"td"),a.TgZ(8,"p",17),a._uU(9),a.qZA(),a.qZA(),a.TgZ(10,"td"),a.TgZ(11,"p",17),a._uU(12),a.qZA(),a.qZA(),a.TgZ(13,"td"),a.TgZ(14,"p",17),a._uU(15),a.qZA(),a.qZA(),a.qZA()),2&t){const t=e.$implicit,n=e.index;a.xp6(1),a.Tol(0===n&&0==t.checker?"active":2==t.checker?"active1":1==t.checker?"active2":"not_active"),a.xp6(2),a.Oqu(n+1),a.xp6(1),a.Tol(0===n&&0==t.checker?"active":2==t.checker?"active1":1==t.checker?"active2":"not_active"),a.xp6(2),a.Oqu(t.status),a.xp6(1),a.Tol(0===n&&0==t.checker?"active":2==t.checker?"active1":1==t.checker?"active2":"not_active"),a.xp6(2),a.hij(" ",t.smu," "),a.xp6(1),a.Tol(0===n&&0==t.checker?"active":2==t.checker?"active1":1==t.checker?"active2":"not_active"),a.xp6(2),a.hij(" ",t.koli," "),a.xp6(1),a.Tol(0===n&&0==t.checker?"active":2==t.checker?"active1":1==t.checker?"active2":"not_active"),a.xp6(2),a.hij(" ",t.berat_total," kg ")}}let l=(()=>{class t{constructor(t,e,n){this.activatedRoute=t,this.apiService=e,this.router=n,this.data=[],this.id=t.snapshot.paramMap.get("id"),e.admin_smu(this.id).subscribe(t=>{console.log(t),this.data=t})}ngOnInit(){}accept(){r().fire({title:"Approve data?",text:"Apakah anda ingin approve data!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Approve"}).then(t=>{t.isConfirmed&&this.apiService.admin_selesai({data:this.data},this.id).subscribe(t=>{r().fire({position:"center",icon:"success",title:"Berhasil",showConfirmButton:!1,timer:1500}).then(t=>{this.router.navigate(["/admin-operasional/project"])})},t=>{r().fire({position:"center",icon:"error",title:"Gagal",showConfirmButton:!1,timer:1500})})})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.gz),a.Y36(s.s),a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-smu"]],decls:38,vars:2,consts:[[1,"grid","grid-cols-2","gap-4"],[1,"flex","mt-8"],[1,"ml-4","text-4xl","font-bold","text-blue-500"],[1,"ml-6","font-light"],[1,"text-sm"],[1,"font-bold"],[1,"mt-1","font-light"],[1,"flex","justify-end","space-x-2"],["type","button",1,"flex","h-10","px-4","py-2","mt-10","font-light","text-black","bg-green-500","rounded","hover:bg-green-400",3,"click"],[1,"text-base","font-medium","text-white"],[1,"grid","gap-4","pb-8"],[1,"ml-2","font-bold","text-blue-500"],[1,"grid","grid-cols-5","gap-4","-mt-6"],[1,"col-span-5","p-8","bg-white","rounded","shadow-lg"],[1,"min-w-full","leading-normal"],[1,"px-5","py-3","text-xs","font-semibold","tracking-wider","text-left","text-gray-600","uppercase","bg-gray-100","border-b-2","border-gray-200"],[4,"ngFor","ngForOf"],[1,"text-gray-900","whitespace-no-wrap"],[1,"text-gray-900","border","pt-0.5","pb-0.5","px-2","border-blue-500","text-center","rounded","whitespace-no-wrap"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div"),a.TgZ(2,"h1",1),a.TgZ(3,"span",2),a._uU(4," BP 1155 CD"),a.qZA(),a.TgZ(5,"span",3),a.TgZ(6,"p",4),a._uU(7,"Pengemudi"),a.qZA(),a.TgZ(8,"p",5),a._uU(9,"Surwono"),a.qZA(),a.qZA(),a.qZA(),a._UZ(10,"div",6),a.qZA(),a.TgZ(11,"div",7),a.TgZ(12,"button",8),a.NdJ("click",function(){return e.accept()}),a.TgZ(13,"span",9),a._uU(14,"Selesai"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"div",10),a.TgZ(16,"div",1),a.TgZ(17,"span"),a._uU(18," Daftar barang | Total "),a.qZA(),a.TgZ(19,"span",11),a._uU(20),a.qZA(),a.qZA(),a.qZA(),a.TgZ(21,"div",12),a.TgZ(22,"div",13),a.TgZ(23,"table",14),a.TgZ(24,"thead"),a.TgZ(25,"tr"),a.TgZ(26,"th",15),a._uU(27," No "),a.qZA(),a.TgZ(28,"th",15),a._uU(29," Status "),a.qZA(),a.TgZ(30,"th",15),a._uU(31," SMU "),a.qZA(),a.TgZ(32,"th",15),a._uU(33," Koli "),a.qZA(),a.TgZ(34,"th",15),a._uU(35," Berat barang "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(36,"tbody"),a.YNc(37,g,16,15,"tr",16),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(20),a.hij(" ",e.data.length," Koli "),a.xp6(17),a.Q6J("ngForOf",e.data))},directives:[i.sg],styles:[".active[_ngcontent-%COMP%]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.active[_ngcontent-%COMP%], .not_active[_ngcontent-%COMP%]{border-bottom-width:1px;border-color:rgba(229,231,235,var(--tw-border-opacity));padding:1.25rem;font-size:.875rem;line-height:1.25rem}.not_active[_ngcontent-%COMP%]{--tw-border-opacity:1}.active1[_ngcontent-%COMP%]{background-color:rgba(209,250,229,var(--tw-bg-opacity))}.active1[_ngcontent-%COMP%], .active2[_ngcontent-%COMP%]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));--tw-bg-opacity:1;padding:1.25rem;font-size:.875rem;line-height:1.25rem}.active2[_ngcontent-%COMP%]{background-color:rgba(254,243,199,var(--tw-bg-opacity))}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"]}),t})();const d=function(t){return["/admin-operasional/project/smu",t]};function p(t,e){if(1&t&&(a.TgZ(0,"div"),a.TgZ(1,"ul"),a.TgZ(2,"li",7),a.TgZ(3,"div",8),a.TgZ(4,"dl",9),a.TgZ(5,"div",10),a.TgZ(6,"div",11),a.TgZ(7,"div",12),a.TgZ(8,"p",13),a._uU(9," No. Polisi: "),a.qZA(),a.TgZ(10,"div",14),a.TgZ(11,"span",15),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",16),a.TgZ(14,"div",12),a.TgZ(15,"p",13),a._uU(16," Pengemudi: "),a.qZA(),a.TgZ(17,"div",14),a.TgZ(18,"span",15),a._uU(19),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(20,"div",17),a.TgZ(21,"span",18),a.O4$(),a.TgZ(22,"svg",19),a._UZ(23,"path",20),a._UZ(24,"path",21),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Tol("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"),a.xp6(11),a.Oqu(null!=t.project&&t.project.no_polisi_kendaraan?t.project.no_polisi_kendaraan:null),a.xp6(7),a.Oqu(null!=t.project&&t.project.nama_pengemudi?t.project.nama_pengemudi:null),a.xp6(1),a.Q6J("routerLink",a.VKq(5,d,t.project.id))}}function u(t,e){1&t&&(a.TgZ(0,"div"),a.TgZ(1,"div",22),a.TgZ(2,"p"),a._uU(3,"Belum ada tugas, klik buat tugas untuk memulai tugas baru"),a.qZA(),a._UZ(4,"div",23),a.qZA(),a.qZA())}const Z=[{path:"",redirectTo:"project",pathMatch:"full"},{path:"project",component:(()=>{class t{constructor(t){this.apiService=t,this.show=!0,this.project={},this.isList=!0,this.apiService.admin_get().subscribe(t=>{console.log(t),this.project=t.data,this.isList=!1,0==t.status&&(this.show=!1),1==t.status&&(this.show=!0)},t=>{console.log(t),this.isList=!1})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.s))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-project"]],decls:12,vars:4,consts:[[1,"px-4","pt-4","pb-4","space-y-4","sm:px-6","lg:px-4","xl:px-6","sm:pb-6","lg:pb-4","xl:pb-6"],[4,"ngIf"],[2,"background","rgba(0, 0, 0, 0.3)"],[1,"flex","flex-col","items-center","px-5","py-2","bg-white","border","rounded-lg"],[1,"relative","block","w-20","h-5","mt-2","loader-dots"],[1,"absolute","top-0","w-3","h-3","mt-1","bg-blue-500","rounded-full"],[1,"mt-2","text-xs","font-light","text-center","text-gray-500"],[1,"bg-white"],[1,"block","p-4","bg-blue-500","border","border-gray-200","rounded-lg","hover:bg-light-blue-500","hover:border-transparent","hover:shadow-lg","group"],[1,"flex","flex-row","items-center"],[1,"flex-grow","p-4"],[1,"flex","flex-wrap"],[1,"relative","flex-1","flex-grow","w-full","max-w-full","pr-4"],[1,"text-xs","font-normal","text-gray-100","uppercase"],[1,"mt-0","font-semibold","text-gray-100"],[1,"text-xl"],[1,"flex","flex-wrap","mt-4"],[1,"flex-shrink","cursor-pointer",3,"routerLink"],[1,"inline-flex","items-center","justify-center","w-10","h-10","text-center","text-white","bg-white","rounded-full","shadow-lg"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px","fill","#3B82F6"],["d","M0 0h24v24H0V0z","fill","none"],["d","M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"],[1,"mt-20","font-sans","text-base","font-light","text-center"],[1,"flex","items-start","justify-center"]],template:function(t,e){1&t&&(a.TgZ(0,"section",0),a.YNc(1,p,25,7,"div",1),a.YNc(2,u,5,0,"div",1),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a._UZ(6,"div",5),a._UZ(7,"div",5),a._UZ(8,"div",5),a._UZ(9,"div",5),a.qZA(),a.TgZ(10,"div",6),a._uU(11," Silahkan tunggu... "),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngIf",e.show),a.xp6(1),a.Q6J("ngIf",!e.show),a.xp6(1),a.Tol(e.isList?"showss":"hiddenss"))},directives:[i.O5,c.rH],styles:[".loader-dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(0,1,1,0)}.loader-dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{left:8px;animation:loader-dots1 .6s infinite}.loader-dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:8px;animation:loader-dots2 .6s infinite}.loader-dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:32px;animation:loader-dots2 .6s infinite}.loader-dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){left:56px;animation:loader-dots3 .6s infinite}@keyframes loader-dots1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes loader-dots3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes loader-dots2{0%{transform:translate(0)}to{transform:translate(24px)}}.hiddenss[_ngcontent-%COMP%]{display:none}.hiddenss[_ngcontent-%COMP%], .showss[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:50;height:100vh;width:100vw;align-items:center;justify-content:center}.showss[_ngcontent-%COMP%]{display:flex}"]}),t})()},{path:"project/smu/:id",component:l}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,h]]}),t})()}}]);