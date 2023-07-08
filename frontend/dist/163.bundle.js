"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[163],{40163:function(t,e,r){r.r(e),r.d(e,{Marketplace:function(){return c}});var i=r(84277),a=r(40262),s=r(9279),n=r(2593),o=r(38776);r(13550),r(25025),r(70332),r(8455),r(26219),r(68834),r(65660),r(61303),r(71497),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(59190),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(86841),r(49561),r(80580),r(40246),r(54253),r(91559),r(40553),r(26),r(69392),r(29526),r(24601),r(46878),r(77033),r(87033),r(5158),r(27761),r(20583),r(92355),r(84194),r(51121),r(58613),r(32484),r(78435),r(54098),r(54146),r(62555),r(40721),r(77437),r(59189),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(65815),r(52378),r(55173),r(51375),r(43320),r(77191);class c{get chainId(){return this._chainId}constructor(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.cM(t,e,n,s);(0,i._)(this,"abi",void 0),(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"direct",void 0),(0,i._)(this,"auction",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"getAll",this.getAllListings),this._chainId=o,this.abi=n,this.contractWrapper=d,this.storage=r,this.metadata=new a.am(this.contractWrapper,a.cP,this.storage),this.roles=new a.an(this.contractWrapper,c.contractRoles),this.encoder=new a.al(this.contractWrapper),this.estimator=new a.aW(this.contractWrapper),this.direct=new a.aT(this.contractWrapper,this.storage),this.auction=new a.aU(this.contractWrapper,this.storage),this.events=new a.aX(this.contractWrapper),this.platformFees=new a.aZ(this.contractWrapper),this.interceptor=new a.aY(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getListing(t){const e=await this.contractWrapper.readContract.listings(t);if(e.assetContract===s.d)throw new a.br(this.getAddress(),t.toString());switch(e.listingType){case a.b3.Auction:return await this.auction.mapListing(e);case a.b3.Direct:return await this.direct.mapListing(e);default:throw new Error(`Unknown listing type: ${e.listingType}`)}}async getActiveListings(t){const e=await this.getAllListingsNoFilter(!0),r=this.applyFilter(e,t),i=n.O$.from(Math.floor(Date.now()/1e3));return r.filter((t=>t.type===a.b3.Auction&&n.O$.from(t.endTimeInEpochSeconds).gt(i)&&n.O$.from(t.startTimeInEpochSeconds).lte(i)||t.type===a.b3.Direct&&t.quantity>0))}async getAllListings(t){const e=await this.getAllListingsNoFilter(!1);return this.applyFilter(e,t)}async getTotalCount(){return await this.contractWrapper.readContract.totalListings()}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.readContract.hasRole((0,a.bC)("lister"),s.d)}async getBidBufferBps(){return this.contractWrapper.readContract.bidBufferBps()}async getTimeBufferInSeconds(){return this.contractWrapper.readContract.timeBuffer()}async getOffers(t){const e=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(e.map((async e=>await(0,a.cQ)(this.contractWrapper.getProvider(),n.O$.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror}))))}async buyoutListing(t,e,r){const i=await this.contractWrapper.readContract.listings(t);if(i.listingId.toString()!==t.toString())throw new a.br(this.getAddress(),t.toString());switch(i.listingType){case a.b3.Direct:return(0,o.Z)(void 0!==e,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing(t,e,r);case a.b3.Auction:return await this.auction.buyoutListing(t);default:throw Error(`Unknown listing type: ${i.listingType}`)}}async makeOffer(t,e,r){const i=await this.contractWrapper.readContract.listings(t);if(i.listingId.toString()!==t.toString())throw new a.br(this.getAddress(),t.toString());const s=await this.contractWrapper.getChainID();switch(i.listingType){case a.b3.Direct:return(0,o.Z)(r,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer(t,r,(0,a.cR)(i.currency)?a.cf[s].wrapped.address:i.currency,e);case a.b3.Auction:return await this.auction.makeBid(t,e);default:throw Error(`Unknown listing type: ${i.listingType}`)}}async setBidBufferBps(t){await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const e=await this.getTimeBufferInSeconds();await this.contractWrapper.sendTransaction("setAuctionBuffers",[e,n.O$.from(t)])}async setTimeBufferInSeconds(t){await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const e=await this.getBidBufferBps();await this.contractWrapper.sendTransaction("setAuctionBuffers",[n.O$.from(t),e])}async allowListingFromSpecificAssetOnly(t){const e=[];(await this.roles.get("asset")).includes(s.d)&&e.push(this.encoder.encode("revokeRole",[(0,a.bC)("asset"),s.d])),e.push(this.encoder.encode("grantRole",[(0,a.bC)("asset"),t])),await this.contractWrapper.multiCall(e)}async allowListingFromAnyAsset(){const t=[],e=await this.roles.get("asset");for(const r in e)t.push(this.encoder.encode("revokeRole",[(0,a.bC)("asset"),r]));t.push(this.encoder.encode("grantRole",[(0,a.bC)("asset"),s.d])),await this.contractWrapper.multiCall(t)}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map((async e=>{let r;try{r=await this.getListing(e)}catch(t){return t instanceof a.br?void 0:void console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`)}if(r.type===a.b3.Auction)return r;if(t){const{valid:t}=await this.direct.isStillValidListing(r);if(!t)return}return r})))).filter((t=>void 0!==t))}applyFilter(t,e){let r=[...t];const a=n.O$.from(e?.start||0).toNumber(),s=n.O$.from(e?.count||i.c).toNumber();return e&&(e.seller&&(r=r.filter((t=>t.sellerAddress.toString().toLowerCase()===e?.seller?.toString().toLowerCase()))),e.tokenContract&&(r=r.filter((t=>t.assetContractAddress.toString().toLowerCase()===e?.tokenContract?.toString().toLowerCase()))),void 0!==e.tokenId&&(r=r.filter((t=>t.tokenId.toString()===e?.tokenId?.toString()))),r=r.filter(((t,e)=>e>=a)),r=r.slice(0,s)),r}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return this.contractWrapper.call(t,...r)}}(0,i._)(c,"contractRoles",["admin","lister","asset"])}}]);