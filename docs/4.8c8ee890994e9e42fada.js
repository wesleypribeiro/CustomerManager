(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{vfUp:function(e,o,t){"use strict";t.r(o),t.d(o,"CustomersModule",function(){return C});var r=t("ofXK"),n=t("tyNb");const c=[{cpf:"397.808.258-02",nome:"Jose C Macoratti",email:"macoratti@yahoo.com",telefone:"(00) 98987-9088"},{cpf:"397.808.258.01",nome:"Paulo Lima",email:"paulolima@yahoo.com",telefone:"(00) 99887-9088"},{cpf:"397.808.258-00",nome:"Suzana Ribeiro",email:"suzana@net.com",telefone:"(00) 99787-9088"},{cpf:"397.808.258-10",nome:"Paola Fernandes",email:"paolafernand@hotmail.com",telefone:"(00) 99687-9088"},{cpf:"397.808.258-89",nome:"Amelia Souza",email:"amelia@bol.com.br",telefone:"(00) 99855-9088"},{cpf:"397.808.258-88",nome:"Joaquim Souza",email:"joaquim@bol.com.br",telefone:"(00) 99874-9088"},{cpf:"397.808.250-98",nome:"Jorel",email:"jorel@bol.com.br",telefone:"(00) 9987-9088"},{cpf:"397.808.234-88",nome:"Barbara Souza",email:"souza.b@bol.com.br",telefone:"(00) 99873-9088"},{cpf:"397.801.244-89",nome:"Paulo Souza",email:"paulo.souzab@bol.com.br",telefone:"(00) 99870-9088"},{cpf:"353.892.222-81",nome:"Breno Faria",email:"breno.fa@bol.com.br",telefone:"(00) 99870-9188"},{cpf:"353.892.112-81",nome:"Bruno Faria",email:"btru.fa@bol.com.br",telefone:"(00) 99830-9188"},{cpf:"101.321.145-11",nome:"Sueli Pereira",email:"pereira.sueli@gmail.com.br",telefone:"(02) 91870-9188"},{cpf:"193.411.987-12",nome:"Lais Sandra Lima",email:"lima.lais2009@yahoo.com.br",telefone:"(12) 91879-9299"},{cpf:"243.511.911-02",nome:"Humberto Feitosa",email:"humberto-feit01@hotmail.com",telefone:"(12) 98899-2033"},{cpf:"132.400.800-91",nome:"Pedro Cust\xf3dio",email:"custodiopedro@hotmail.com",telefone:"(12) 97788-1922"}];var i=t("fXoL"),a=t("oOf3");function l(e,o){if(1&e&&(i.Vb(0,"tr"),i.Vb(1,"td"),i.qc(2),i.Ub(),i.Vb(3,"td"),i.qc(4),i.Ub(),i.Vb(5,"td"),i.qc(6),i.Ub(),i.Vb(7,"td"),i.qc(8),i.Ub(),i.Ub()),2&e){const e=o.$implicit;i.Gb(2),i.rc(e.cpf),i.Gb(2),i.rc(e.nome),i.Gb(2),i.rc(e.email),i.Gb(2),i.rc(e.telefone)}}const b=function(e,o){return{itemsPerPage:e,currentPage:o}};let m=(()=>{class e{constructor(){this.customers=c,this.pag=1,this.contador=5}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i.Kb({type:e,selectors:[["app-customers"]],decls:18,vars:7,consts:[[1,"container"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"pageChange"],["routerLink","new",1,"btn","btn-success"]],template:function(e,o){1&e&&(i.Vb(0,"div",0),i.Vb(1,"table",1),i.Vb(2,"thead"),i.Vb(3,"tr"),i.Vb(4,"th"),i.qc(5,"CPF"),i.Ub(),i.Vb(6,"th"),i.qc(7,"Nome"),i.Ub(),i.Vb(8,"th"),i.qc(9,"Email"),i.Ub(),i.Vb(10,"th"),i.qc(11,"Telefone"),i.Ub(),i.Ub(),i.Ub(),i.Vb(12,"tbody"),i.pc(13,l,9,4,"tr",2),i.fc(14,"paginate"),i.Ub(),i.Ub(),i.Vb(15,"pagination-controls",3),i.cc("pageChange",function(e){return o.pag=e}),i.Ub(),i.Vb(16,"button",4),i.qc(17,"Novo Cliente"),i.Ub(),i.Ub()),2&e&&(i.Gb(13),i.hc("ngForOf",i.gc(14,1,o.customers,i.jc(4,b,o.contador,o.pag))))},directives:[r.j,a.c,n.a],pipes:[a.b],styles:[".container[_ngcontent-%COMP%]{margin:1rem}button[_ngcontent-%COMP%]{background-color:brown;color:#fff}button[_ngcontent-%COMP%]:hover{filter:opacity(.8);transition:.5s}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0 20px}"]}),e})();var s=t("3Pt+"),u=t("tmjD");const f=function(e,o){return{success:e,error:o}},p=function(e){return{visibility:e}},d=[{path:"",component:m},{path:"new",component:(()=>{class e{constructor(e){this.formBuilder=e,this.isVisible=!1,this.message="",this.isSuccess=!1,this.formulario=this.formBuilder.group({cpf:["",s.m.required],nome:["",s.m.required],email:[""],cep:["",s.m.required],rua:["",s.m.required],numero:["",s.m.required],bairro:["",s.m.required],cidade:["",s.m.required],estado:["",s.m.required],telefone:[""],complemento:[""]})}postar(){this.isVisible=!0,this.formulario.valid?(this.message="Cadastro realizado!",this.isSuccess=!0,this.formulario.reset()):(this.message="Existem campos vazios, favor verificar!",this.isSuccess=!1),setTimeout(()=>this.isVisible=!1,2e3)}}return e.\u0275fac=function(o){return new(o||e)(i.Qb(s.b))},e.\u0275cmp=i.Kb({type:e,selectors:[["new-customer"]],decls:47,vars:9,consts:[[1,"container"],[3,"ngClass","ngStyle"],[3,"formGroup"],[1,"form-group"],["for","cpf"],["type","text","required","","formControlName","cpf","mask","000.000.000-00",1,"form-control"],["for","nome"],["type","text","required","","formControlName","nome",1,"form-control"],["for","email"],["type","email","formControlName","email",1,"form-control"],["for","telefone"],["type","text","formControlName","telefone","mask","(00)00000-0000",1,"form-control"],["for","cep"],["type","text","required","","formControlName","cep",1,"form-control"],["for","rua"],["type","text","required","","formControlName","rua",1,"form-control"],["for","numero"],["type","number","required","","formControlName","numero",1,"form-control"],["for","complemento"],["type","text","formControlName","complemento",1,"form-control"],["for","bairro"],["type","text","required","","formControlName","bairro",1,"form-control"],["for","cidade"],["type","text","required","","formControlName","cidade",1,"form-control"],["for","estado"],["type","text","required","","formControlName","estado",1,"form-control"],[1,"buttons"],["type","submit",1,"btn","btn-success",2,"background-color","darkgreen",3,"click"],["type","button","routerLink","/",1,"btn","btn-secondary",2,"background-color","firebrick"]],template:function(e,o){1&e&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.qc(2),i.Ub(),i.Vb(3,"h2"),i.qc(4,"Cadastrar novo cliente"),i.Ub(),i.Vb(5,"form",2),i.Vb(6,"div",3),i.Vb(7,"label",4),i.qc(8,"CPF:"),i.Ub(),i.Rb(9,"input",5),i.Vb(10,"label",6),i.qc(11,"Nome:"),i.Ub(),i.Rb(12,"input",7),i.Vb(13,"label",8),i.qc(14,"E-mail:"),i.Ub(),i.Rb(15,"input",9),i.Vb(16,"label",10),i.qc(17,"Telefone:"),i.Ub(),i.Rb(18,"input",11),i.Ub(),i.Vb(19,"h3"),i.qc(20,"Endere\xe7o"),i.Ub(),i.Vb(21,"label",12),i.qc(22,"CEP: "),i.Ub(),i.Rb(23,"input",13),i.Vb(24,"label",14),i.qc(25,"Rua: "),i.Ub(),i.Rb(26,"input",15),i.Vb(27,"label",16),i.qc(28,"N\xfamero: "),i.Ub(),i.Rb(29,"input",17),i.Vb(30,"label",18),i.qc(31,"Complemento: "),i.Ub(),i.Rb(32,"input",19),i.Vb(33,"label",20),i.qc(34,"Bairro: "),i.Ub(),i.Rb(35,"input",21),i.Vb(36,"label",22),i.qc(37,"Cidade: "),i.Ub(),i.Rb(38,"input",23),i.Vb(39,"label",24),i.qc(40,"Estado: "),i.Ub(),i.Rb(41,"input",25),i.Vb(42,"div",26),i.Vb(43,"button",27),i.cc("click",function(){return o.postar()}),i.qc(44," CONFIRMAR "),i.Ub(),i.Vb(45,"button",28),i.qc(46," CANCELAR "),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&e&&(i.Gb(1),i.hc("ngClass",i.jc(4,f,1==o.isSuccess,0==o.isSuccess))("ngStyle",i.ic(7,p,o.isVisible?"visible":"hidden")),i.Gb(1),i.rc(o.message),i.Gb(3),i.hc("formGroup",o.formulario))},directives:[r.i,r.l,s.n,s.i,s.d,s.a,u.a,s.l,s.h,s.c,s.j,n.a],styles:[".container[_ngcontent-%COMP%]{margin:1rem}input[_ngcontent-%COMP%]{margin:5px}label[_ngcontent-%COMP%]{width:100px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20rem}button[_ngcontent-%COMP%]{margin-top:10px;margin-left:20px}button[_ngcontent-%COMP%]:first-child{margin-left:0}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{display:inline-block}.success[_ngcontent-%COMP%]{color:green}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({imports:[[n.b.forChild(d)],n.b]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({imports:[[r.b,g,s.e,a.a,s.k,u.b.forChild()]]}),e})()}}]);