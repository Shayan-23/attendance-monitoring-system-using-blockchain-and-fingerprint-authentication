"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[802],{77802:function(t,r,e){e.r(r),e.d(r,{Edition:function(){return s}});var n=e(84277),i=e(40262),a=e(9279);e(13550),e(25025),e(70332),e(8455),e(26219),e(68834),e(65660),e(61303),e(71497),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(58613),e(32484),e(78435),e(54098),e(54146),e(62555),e(40721),e(77437),e(59189),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),e(77191);class s extends i.aS{constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cM(t,r,c,a),e,o),(0,n._)(this,"abi",void 0),(0,n._)(this,"metadata",void 0),(0,n._)(this,"roles",void 0),(0,n._)(this,"sales",void 0),(0,n._)(this,"platformFees",void 0),(0,n._)(this,"encoder",void 0),(0,n._)(this,"estimator",void 0),(0,n._)(this,"events",void 0),(0,n._)(this,"royalties",void 0),(0,n._)(this,"signature",void 0),(0,n._)(this,"interceptor",void 0),(0,n._)(this,"erc1155",void 0),(0,n._)(this,"owner",void 0),this.abi=c,this.metadata=new i.am(this.contractWrapper,i.cO,this.storage),this.roles=new i.an(this.contractWrapper,s.contractRoles),this.royalties=new i.ao(this.contractWrapper,this.metadata),this.sales=new i.ap(this.contractWrapper),this.encoder=new i.al(this.contractWrapper),this.estimator=new i.aW(this.contractWrapper),this.events=new i.aX(this.contractWrapper),this.platformFees=new i.aZ(this.contractWrapper),this.interceptor=new i.aY(this.contractWrapper),this.signature=new i.aP(this.contractWrapper,this.storage,this.roles),this.erc1155=new i.aL(this.contractWrapper,this.storage,o),this.owner=new i.a$(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,i.bC)("transfer"),a.d)}async mint(t){return this.erc1155.mint(t)}async mintTo(t,r){return this.erc1155.mintTo(t,r)}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async mintAdditionalSupply(t,r){return this.erc1155.mintAdditionalSupply(t,r)}async mintAdditionalSupplyTo(t,r,e){return this.erc1155.mintAdditionalSupplyTo(t,r,e)}async mintBatch(t){return this.erc1155.mintBatch(t)}async mintBatchTo(t,r){return this.erc1155.mintBatchTo(t,r)}async burn(t,r){return this.erc1155.burn(t,r)}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];return this.contractWrapper.call(t,...e)}}(0,n._)(s,"contractRoles",["admin","minter","transfer"])}}]);