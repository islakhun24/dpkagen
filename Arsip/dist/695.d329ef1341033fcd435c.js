(self.webpackChunkregulatagen=self.webpackChunkregulatagen||[]).push([[695],{1695:(t,e,n)=>{"use strict";n.r(e),n.d(e,{LayoutsModule:()=>M});var o=n(1116),i=n(8619),r=n(3319);let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-admin-operasional"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Admin Operasional"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})();var d=n(3651),s=n(4213),l=n.n(s),u=n(3957);function g(t,e){if(1&t&&(i.TgZ(0,"tr"),i.TgZ(1,"td",37),i._uU(2),i.qZA(),i.TgZ(3,"td",37),i._uU(4),i.qZA(),i.TgZ(5,"td",37),i._uU(6),i.qZA(),i.TgZ(7,"td",37),i._uU(8),i.qZA(),i.TgZ(9,"td",37),i._uU(10),i.qZA(),i.TgZ(11,"td",37),i._uU(12),i.qZA(),i.TgZ(13,"td",37),i._uU(14),i.qZA(),i.qZA()),2&t){const t=e.$implicit,n=e.index;i.xp6(2),i.hij(" ",n+1," "),i.xp6(2),i.hij(" ",t[0].no_do," "),i.xp6(2),i.hij(" ",t[0].koli," "),i.xp6(2),i.hij(" ",t[0].nama_barang," "),i.xp6(2),i.hij(" ",t[0].berat," "),i.xp6(2),i.hij(" ",t[0].harga_per_kg," "),i.xp6(2),i.hij(" ",t[0].biaya," ")}}const Z=function(){return["/dokumen/invoice/riwayat"]};let c=(()=>{class t{constructor(t,e){this.activateRoute=t,this.apiService=e,this.isLoading=!1,this.invoice=[],this.data={},this.invoices={},this.customers={},this.customer=t.snapshot.paramMap.get("agen"),this.no_invoice=t.snapshot.paramMap.get("no_invoice"),e.invoice_print(this.customer,this.no_invoice).subscribe(t=>{this.data=t,this.invoices=t.invoice,this.customers=t.customer,console.log(t)})}tanggal(t){return t.split(" ")[0]}ngOnInit(){}save(){this.isLoading=!0}generatePDF(){var t=document.getElementById("contentToConvert");l()(t).then(t=>{var e=208*t.height/t.width;const n=t.toDataURL("image/png");let o=new d.ZP("p","mm","a4");o.addImage(n,"PNG",0,0,208,e),o.save(this.no_invoice+".pdf")})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.gz),i.Y36(u.s))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-cetak"]],decls:154,vars:13,consts:[[1,"container"],[1,"flex","justify-between","min-w-full"],[1,""],[1,"text-4xl","font-bold","text-blue-500"],[1,"flex","justify-end","gap-2"],["routerLinkActive","router-link-active",1,"flex","items-center","gap-2","px-8","py-2","font-semibold","text-white","bg-red-500","rounded-md",3,"routerLink"],[1,"flex","items-center","justify-center","px-4","py-2","text-sm","font-normal","text-white","bg-blue-500","rounded","min-h-10","hover:bg-blue-700",3,"click"],[1,"w-3","h-3","mr-2","border-t-2","border-b-2","border-white","rounded-full","animate-spin",3,"hidden"],["id","contentToConvert",1,""],[1,"w-full","pt-8","pb-8","pl-16","pr-16","mt-8","bg-white","rounded","shadow","lg:py-8","lg:px-8"],[1,"flex","items-center","mt-16","lg:mt-8"],["src","assets/logo.png","alt","",1,"w-20","mr-6","h-18"],[1,"text-2xl","font-bold"],[1,"text-lg","font-md"],[1,"flex","justify-between","p-8"],["colspan","3"],[1,"text-lg","font-semibold"],["width","20px",1,"text-center"],[1,"h-1","border-t","border-b-2","border-black"],[1,"w-full","mt-4","text-2xl","font-bold","text-center"],[1,"px-2","py-2","mt-2","-mx-4","overflow-x-auto","sm:-mx-8","sm:px-8"],[1,"inline-block","min-w-full","overflow-hidden","rounded-lg","shadow"],[1,"min-w-full","leading-normal"],["scope","col",1,"px-5","py-3","text-xs","font-semibold","tracking-wider","text-left","text-gray-600","uppercase","bg-gray-100","border-b-2","border-gray-200"],[1,"bg-white","divide-y","divide-gray-200"],[4,"ngFor","ngForOf"],["bg-gr",""],["colspan","2",1,"px-6","py-4","text-sm","text-center","text-gray-500","bg-gray-100","whitespace-nowrap"],[1,"px-6","py-4","text-sm","text-gray-500","bg-gray-100","whites","pace-nowrap"],[1,"grid","grid-cols-2","mb-16","mt-44"],[1,"col-span-1"],["colspan","3",1,"py-1"],[1,"text-base","font-semibold"],[1,"font-semibold"],["width","20px",1,"py-1","text-center"],[1,"grid","justify-between","grid-cols-2","col-span-1"],[1,"mt-24","text-base","font-semibold"],[1,"px-6","py-4","text-sm","text-gray-500","whitespace-nowrap"]],template:function(t,e){1&t&&(i.TgZ(0,"section",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h1",3),i._uU(4),i.qZA(),i.qZA(),i.TgZ(5,"div",4),i.TgZ(6,"button",5),i._uU(7," Kembali"),i.qZA(),i.TgZ(8,"button",6),i.NdJ("click",function(){return e.generatePDF()}),i._UZ(9,"div",7),i._uU(10," Cetak Invoices "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"div",8),i.TgZ(12,"div",9),i.TgZ(13,"div",10),i._UZ(14,"img",11),i.TgZ(15,"div"),i.TgZ(16,"h1",12),i._uU(17,"PT. Duta Pasifik Kargo"),i.qZA(),i.TgZ(18,"h1",13),i._uU(19,"Regulated Agen"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(20,"div",14),i.TgZ(21,"div",2),i.TgZ(22,"table"),i.TgZ(23,"thead"),i.TgZ(24,"tr"),i.TgZ(25,"td",15),i.TgZ(26,"h3",16),i._uU(27,"Customer"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(28,"tbody"),i.TgZ(29,"tr"),i.TgZ(30,"td"),i._uU(31,"Nama"),i.qZA(),i.TgZ(32,"td",17),i._uU(33,":"),i.qZA(),i.TgZ(34,"td"),i._uU(35),i.qZA(),i.qZA(),i.TgZ(36,"tr"),i.TgZ(37,"td"),i._uU(38,"No Hp"),i.qZA(),i.TgZ(39,"td",17),i._uU(40,":"),i.qZA(),i.TgZ(41,"td"),i._uU(42),i.qZA(),i.qZA(),i.TgZ(43,"tr"),i.TgZ(44,"td"),i._uU(45,"Alamat"),i.qZA(),i.TgZ(46,"td",17),i._uU(47,":"),i.qZA(),i.TgZ(48,"td"),i._uU(49),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(50,"div",2),i.TgZ(51,"table"),i.TgZ(52,"thead"),i.TgZ(53,"tr"),i.TgZ(54,"td",15),i.TgZ(55,"h3",16),i._uU(56,"\xa0"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(57,"tbody"),i.TgZ(58,"tr"),i.TgZ(59,"td"),i._uU(60,"Nomor Invoice"),i.qZA(),i.TgZ(61,"td",17),i._uU(62,":"),i.qZA(),i.TgZ(63,"td"),i._uU(64),i.qZA(),i.qZA(),i.TgZ(65,"tr"),i.TgZ(66,"td"),i._uU(67,"Tanggal Invoice"),i.qZA(),i.TgZ(68,"td",17),i._uU(69,":"),i.qZA(),i.TgZ(70,"td"),i._uU(71),i.qZA(),i.qZA(),i.TgZ(72,"tr"),i.TgZ(73,"td"),i._uU(74,"Tanggal Jatuh Tempo"),i.qZA(),i.TgZ(75,"td",17),i._uU(76,":"),i.qZA(),i.TgZ(77,"td"),i._uU(78,"-"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(79,"hr",18),i.TgZ(80,"h1",19),i._uU(81,"Invoice"),i.qZA(),i.TgZ(82,"div",20),i.TgZ(83,"div",21),i.TgZ(84,"table",22),i.TgZ(85,"thead"),i.TgZ(86,"tr"),i.TgZ(87,"th",23),i._uU(88," No. "),i.qZA(),i.TgZ(89,"th",23),i._uU(90," No DO "),i.qZA(),i.TgZ(91,"th",23),i._uU(92," Koli "),i.qZA(),i.TgZ(93,"th",23),i._uU(94," Nama Barang "),i.qZA(),i.TgZ(95,"th",23),i._uU(96," Berat (KG) "),i.qZA(),i.TgZ(97,"th",23),i._uU(98," Harga per KG "),i.qZA(),i.TgZ(99,"th",23),i._uU(100," Total Biaya(Rp) "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(101,"tbody",24),i.YNc(102,g,15,7,"tr",25),i.qZA(),i.TgZ(103,"tfoot",26),i.TgZ(104,"tr"),i.TgZ(105,"td",27),i._uU(106,"Total"),i.qZA(),i.TgZ(107,"td",28),i._uU(108),i.qZA(),i._UZ(109,"td",28),i.TgZ(110,"td",28),i._uU(111),i.qZA(),i._UZ(112,"td",28),i.TgZ(113,"td",28),i._uU(114),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(115,"div",29),i.TgZ(116,"div",30),i.TgZ(117,"table"),i.TgZ(118,"thead"),i.TgZ(119,"tr"),i.TgZ(120,"td",31),i.TgZ(121,"h3",32),i._uU(122,"Pembayaran bisa dilakukan di:"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(123,"tbody"),i.TgZ(124,"tr"),i.TgZ(125,"td",33),i._uU(126,"No Rekening"),i.qZA(),i.TgZ(127,"td",34),i._uU(128,":"),i.qZA(),i.TgZ(129,"td"),i._uU(130,"978378276732"),i.qZA(),i.qZA(),i.TgZ(131,"tr"),i.TgZ(132,"td",33),i._uU(133,"Atas Nama"),i.qZA(),i.TgZ(134,"td",34),i._uU(135,":"),i.qZA(),i.TgZ(136,"td"),i._uU(137,"Islakhun Nur Dzaki"),i.qZA(),i.qZA(),i.TgZ(138,"tr"),i.TgZ(139,"td",33),i._uU(140,"Bank"),i.qZA(),i.TgZ(141,"td",34),i._uU(142,":"),i.qZA(),i.TgZ(143,"td"),i._uU(144,"BCA"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(145,"div",35),i.TgZ(146,"div",30),i.TgZ(147,"h3",32),i._uU(148,"Authorized:"),i.qZA(),i.TgZ(149,"h3",36),i._uU(150,"Finance"),i.qZA(),i.qZA(),i.TgZ(151,"div",30),i.TgZ(152,"h3",32),i._uU(153,"Mengetahui,"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.hij(" ",e.customer,""),i.xp6(2),i.Q6J("routerLink",i.DdM(12,Z)),i.xp6(3),i.Q6J("hidden",!e.isLoading),i.xp6(26),i.Oqu(e.customer),i.xp6(7),i.Oqu(e.customers.nohp),i.xp6(7),i.Oqu(e.customers.alamat),i.xp6(15),i.Oqu(e.no_invoice),i.xp6(7),i.Oqu(e.tanggal(e.invoices.tanggal)),i.xp6(31),i.Q6J("ngForOf",e.data.data),i.xp6(6),i.Oqu(e.data.koli),i.xp6(3),i.Oqu(e.data.berat),i.xp6(3),i.Oqu(e.data.biaya))},directives:[r.Od,r.rH,o.sg],styles:[""]}),t})();function p(t,e,n,o,i,r,a){try{var d=t[r](a),s=d.value}catch(l){return void n(l)}d.done?e(s):Promise.resolve(s).then(o,i)}var m=n(2501),h=n.n(m),A=n(1462);function T(t,e){if(1&t&&(i.TgZ(0,"span",38),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.Oqu(t.no_smu)}}function q(t,e){if(1&t&&(i.TgZ(0,"tr"),i.TgZ(1,"td",39),i._uU(2),i.qZA(),i.TgZ(3,"td",40),i._uU(4),i.qZA(),i.TgZ(5,"td",40),i._uU(6),i.qZA(),i.TgZ(7,"td",40),i._uU(8),i.qZA(),i.TgZ(9,"td",40),i._uU(10),i.qZA(),i.TgZ(11,"td",40),i._uU(12),i.qZA(),i.TgZ(13,"td",40),i._uU(14),i.qZA(),i.TgZ(15,"td",39),i._uU(16),i.qZA(),i.TgZ(17,"td",40),i._uU(18),i.qZA(),i.qZA()),2&t){const t=e.$implicit,n=e.index;i.xp6(2),i.hij(" ",n+1," "),i.xp6(2),i.hij(" ",t.tanggal," "),i.xp6(2),i.hij(" ",t.no_do," "),i.xp6(2),i.hij(" ",t.koli," "),i.xp6(2),i.hij(" ",t.nama_barang," "),i.xp6(2),i.hij(" ",t.tps," "),i.xp6(2),i.hij(" ",t.berat," "),i.xp6(2),i.hij(" ",t.harga_per_kg," "),i.xp6(2),i.hij(" ",t.biaya," ")}}const x=function(){return["/dokumen/invoice"]};let f=(()=>{class t{constructor(t,e,n,o){var i=this;this.fb=t,this.router=e,this.activateROute=n,this.apiService=o,this.isLoading=!1,this.detail={},this.invoice=[],this.data=[],this.smu=[],this.isi_kiriman=[],this.form=t.group({alamat:[""],no_hp:[""],isi_kiriman:[""]}),this.no_invoice=n.snapshot.paramMap.get("no_invoice"),this.customer=n.snapshot.paramMap.get("agen"),o.invoice_detail(this.customer).subscribe(function(){var t,e=(t=function*(t){return i.isi_kiriman=t.invoice.map(t=>t.nama_barang),i.detail=t.detail,i.invoice=t.invoice,i.smu=t.smu,yield 0},function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function a(t){p(r,o,i,a,d,"next",t)}function d(t){p(r,o,i,a,d,"throw",t)}a(void 0)})});return function(t){return e.apply(this,arguments)}}())}ngOnInit(){}save(){let t={};t.detail=this.detail,t.invoice=this.invoice,t.smu=this.smu,h().fire({title:"Apakah anda yakin?",text:"Anda yakin ingin invoice "+this.customer+" !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Setuju!",cancelButtonText:"Batal"}).then(e=>{e.isConfirmed&&this.apiService.cetak_invoice({data:t,no_invoice:this.no_invoice}).subscribe(t=>{console.log(t),h().fire("Berhasil!","invoice "+this.customer+" diriwayatkan","success").then(()=>{this.router.navigate(["/dokumen/invoice/riwayat"])})},t=>{h().fire("Gagal!","invoice "+this.customer+" gagal riwayatkan","error")})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(A.qu),i.Y36(r.F0),i.Y36(r.gz),i.Y36(u.s))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-detail"]],decls:84,vars:13,consts:[[3,"formGroup"],[1,"p-4"],[1,"flex","justify-between"],[1,"ml-4"],[1,"text-4xl","font-bold","text-blue-500"],[1,"flex","justify-end","gap-2"],["routerLinkActive","router-link-active",1,"flex","items-center","gap-2","px-8","py-2","font-semibold","text-white","bg-red-500","rounded-md",3,"routerLink"],[1,"flex","items-center","justify-center","px-4","py-2","text-sm","font-normal","text-white","bg-blue-500","rounded","min-h-10","hover:bg-blue-700",3,"click"],[1,"w-3","h-3","mr-2","border-t-2","border-b-2","border-white","rounded-full","animate-spin",3,"hidden"],[1,"grid","w-full","grid-cols-2","gap-8","mt-8"],[1,"col-span-1"],[1,"w-full","ml-4"],["for","price",1,"block","text-sm","font-medium","text-gray-700"],[1,"flex","flex-wrap","my-2"],["class","px-4 py-1 mx-1 my-1 text-sm bg-blue-300 rounded-md",4,"ngFor","ngForOf"],[1,"w-full","mt-4","ml-4"],[1,"relative","mt-1","rounded-md","shadow-sm"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-3","pointer-events-none"],["formControlName","isi_kiriman","readonly","","type","text","name","price","id","price","placeholder","Isi Kiriman",1,"block","w-full","border-gray-300","rounded-md","form-input","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModel","ngModelChange"],["type","text","readonly","","formControlName","no_hp","name","price","id","price","placeholder","No. Hp Customer",1,"block","w-full","border-gray-300","rounded-md","form-input","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModel","ngModelChange"],[1,"grid","grid-cols-3","gap-2","ml-4"],[1,"col-span-1","text-left"],[1,"font-medium","text-gray-400","text-md"],[1,"text-xl","font-semibold","text-blue-500"],[1,"col-span-1","text-center"],[1,"col-span-1","text-right"],["formControlName","alamat","type","text","readonly","","name","price","id","price","placeholder","Alamat Customer",1,"block","w-full","border-gray-300","rounded-md","form-input","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModel","ngModelChange"],[1,"px-8","py-4"],[1,"text-2xl","font-semibold","leading-tight"],[1,"flex","flex-col","my-2","sm:flex-row"],[1,"px-2","py-2","-mx-4","overflow-x-auto","sm:-mx-8","sm:px-8"],[1,"inline-block","min-w-full","overflow-hidden","rounded-lg","shadow"],[1,"leading-normal","min-w-ful"],["scope","col",1,"px-5","py-3","text-xs","font-semibold","text-left","text-gray-600","uppercase","bg-gray-100","border-b-2","border-gray-200","lg:lowercase","lg:hidden"],["scope","col",1,"px-5","py-3","text-xs","font-semibold","text-left","text-gray-600","uppercase","bg-gray-100","border-b-2","border-gray-200","lg:lowercase"],["scope","col",1,"px-5","py-3","text-xs","font-semibold","text-left","text-gray-600","uppercase","bg-gray-100","border-b-2","border-gray-200","lg:hidden","lg:lowercase"],[1,"bg-white","divide-y","divide-gray-200"],[4,"ngFor","ngForOf"],[1,"px-4","py-1","mx-1","my-1","text-sm","bg-blue-300","rounded-md"],[1,"px-6","py-4","text-sm","text-gray-500","lg:hidden","whitespace-nowrap"],[1,"px-6","py-4","text-sm","text-gray-500","whitespace-nowrap"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"h1",4),i._uU(5),i.qZA(),i.qZA(),i.TgZ(6,"div",5),i.TgZ(7,"button",6),i._uU(8," Kembali"),i.qZA(),i.TgZ(9,"button",7),i.NdJ("click",function(){return e.save()}),i._UZ(10,"div",8),i._uU(11," Cetak Invoices "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"div",9),i.TgZ(13,"div",10),i.TgZ(14,"div",11),i.TgZ(15,"label",12),i._uU(16,"No SMU"),i.qZA(),i.TgZ(17,"div",13),i.YNc(18,T,2,1,"span",14),i.qZA(),i.qZA(),i.TgZ(19,"div",15),i.TgZ(20,"label",12),i._uU(21,"Isi Kiriman"),i.qZA(),i.TgZ(22,"div",16),i._UZ(23,"div",17),i.TgZ(24,"input",18),i.NdJ("ngModelChange",function(t){return e.isi_kiriman=t}),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"div",15),i.TgZ(26,"label",12),i._uU(27,"No. Hp Customer"),i.qZA(),i.TgZ(28,"div",16),i._UZ(29,"div",17),i.TgZ(30,"input",19),i.NdJ("ngModelChange",function(t){return e.detail.no_hp=t}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(31,"div",10),i.TgZ(32,"div",20),i.TgZ(33,"div",21),i.TgZ(34,"div",22),i._uU(35,"Qty"),i.qZA(),i.TgZ(36,"div",23),i._uU(37),i.qZA(),i.qZA(),i.TgZ(38,"div",24),i.TgZ(39,"div",22),i._uU(40,"Total Berat"),i.qZA(),i.TgZ(41,"div",23),i._uU(42),i.qZA(),i.qZA(),i.TgZ(43,"div",25),i.TgZ(44,"div",22),i._uU(45,"Diterima dari"),i.qZA(),i.TgZ(46,"div",23),i._uU(47),i.qZA(),i.qZA(),i.qZA(),i.TgZ(48,"div",15),i.TgZ(49,"label",12),i._uU(50,"Alamat Customer"),i.qZA(),i.TgZ(51,"div",16),i._UZ(52,"div",17),i.TgZ(53,"input",26),i.NdJ("ngModelChange",function(t){return e.detail.alamat=t}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(54,"div",27),i.TgZ(55,"div"),i.TgZ(56,"h2",28),i._uU(57,"Riwayat"),i.qZA(),i.qZA(),i._UZ(58,"div",29),i.TgZ(59,"div",30),i.TgZ(60,"div",31),i.TgZ(61,"table",32),i.TgZ(62,"thead"),i.TgZ(63,"tr"),i.TgZ(64,"th",33),i._uU(65," No. "),i.qZA(),i.TgZ(66,"th",34),i._uU(67," Tanggal AWB "),i.qZA(),i.TgZ(68,"th",34),i._uU(69," No DO "),i.qZA(),i.TgZ(70,"th",34),i._uU(71," Koli "),i.qZA(),i.TgZ(72,"th",34),i._uU(73," Nama Barang "),i.qZA(),i.TgZ(74,"th",34),i._uU(75," TPS "),i.qZA(),i.TgZ(76,"th",34),i._uU(77," Berat (KG) "),i.qZA(),i.TgZ(78,"th",35),i._uU(79," Harga per KG "),i.qZA(),i.TgZ(80,"th",34),i._uU(81," Total Biaya(Rp) "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(82,"tbody",36),i.YNc(83,q,19,9,"tr",37),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.form),i.xp6(5),i.hij(" ",e.customer,""),i.xp6(2),i.Q6J("routerLink",i.DdM(12,x)),i.xp6(3),i.Q6J("hidden",!e.isLoading),i.xp6(8),i.Q6J("ngForOf",e.smu),i.xp6(6),i.Q6J("ngModel",e.isi_kiriman),i.xp6(6),i.Q6J("ngModel",e.detail.no_hp),i.xp6(7),i.Oqu(e.detail.koli),i.xp6(5),i.hij("",e.detail.berat," KG"),i.xp6(5),i.Oqu(e.detail.biaya),i.xp6(6),i.Q6J("ngModel",e.detail.alamat),i.xp6(30),i.Q6J("ngForOf",e.invoice))},directives:[A._Y,A.JL,A.sg,r.Od,r.rH,o.sg,A.Fj,A.JJ,A.u],styles:[""]}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-checker"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Checker"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-customer"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Customer"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-acceptance"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Acceptance"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-btb"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"BTB"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),U=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-dashboard"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Dashboard"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-dokumen"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Dokumen"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-harga"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"Harga"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})();const C=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dokumen/invoice/detail/:agen/:no_invoice",component:f},{path:"dokumen/invoice/cetak/:agen/:no_invoice",component:c},{path:"dashboard",component:U,loadChildren:()=>n.e(127).then(n.bind(n,2127)).then(t=>t.DashboardModule)},{path:"acceptance",component:_,loadChildren:()=>n.e(627).then(n.bind(n,7627)).then(t=>t.AcceptanceModule)},{path:"btb",component:y,loadChildren:()=>n.e(788).then(n.bind(n,5788)).then(t=>t.BtbModule)},{path:"dokumen",component:w,loadChildren:()=>Promise.resolve().then(n.bind(n,5544)).then(t=>t.DokumenModule)},{path:"user",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-user"]],decls:3,vars:0,consts:[[1,"text-2xl","font-bold","text-gray-700"]],template:function(t,e){1&t&&(i.TgZ(0,"h1",0),i._uU(1,"User"),i.qZA(),i._UZ(2,"router-outlet"))},directives:[r.lC],styles:[""]}),t})(),loadChildren:()=>Promise.resolve().then(n.bind(n,1101)).then(t=>t.UserModule)},{path:"harga",component:k,loadChildren:()=>Promise.resolve().then(n.bind(n,1476)).then(t=>t.HargaModule)},{path:"customer",component:b,loadChildren:()=>Promise.resolve().then(n.bind(n,6403)).then(t=>t.CustomerModule)},{path:"checkers",component:v,loadChildren:()=>Promise.resolve().then(n.bind(n,5700)).then(t=>t.CheckerModule)},{path:"admin-operasional",component:a,loadChildren:()=>n.e(397).then(n.bind(n,8397)).then(t=>t.AdminOperasionalModule)},{path:"team",component:v,loadChildren:()=>Promise.resolve().then(n.bind(n,5700)).then(t=>t.CheckerModule)}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.Bz.forChild(C)],r.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,O,A.u5,A.UX]]}),t})()}}]);