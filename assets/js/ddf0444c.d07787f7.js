"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>A,kt:()=>N});var e=U(67294);function t(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function S(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(D);R&&(e=e.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,e)}return U}function P(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?S(Object(U),!0).forEach((function(R){t(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):S(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function a(D,R){if(null==D)return{};var U,e,t=function(D,R){if(null==D)return{};var U,e,t={},S=Object.keys(D);for(e=0;e<S.length;e++)U=S[e],R.indexOf(U)>=0||(t[U]=D[U]);return t}(D,R);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(D);for(e=0;e<S.length;e++)U=S[e],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(t[U]=D[U])}return t}var B=e.createContext({}),n=function(D){var R=e.useContext(B),U=R;return D&&(U="function"==typeof D?D(R):P(P({},R),D)),U},A=function(D){var R=n(D.components);return e.createElement(B.Provider,{value:R},D.children)},K="mdxType",r={inlineCode:"code",wrapper:function(D){var R=D.children;return e.createElement(e.Fragment,{},R)}},G=e.forwardRef((function(D,R){var U=D.components,t=D.mdxType,S=D.originalType,B=D.parentName,A=a(D,["components","mdxType","originalType","parentName"]),K=n(U),G=t,N=K["".concat(B,".").concat(G)]||K[G]||r[G]||S;return U?e.createElement(N,P(P({ref:R},A),{},{components:U})):e.createElement(N,P({ref:R},A))}));function N(D,R){var U=arguments,t=R&&R.mdxType;if("string"==typeof D||t){var S=U.length,P=new Array(S);P[0]=G;var a={};for(var B in R)hasOwnProperty.call(R,B)&&(a[B]=R[B]);a.originalType=D,a[K]="string"==typeof D?D:t,P[1]=a;for(var n=2;n<S;n++)P[n]=U[n];return e.createElement.apply(null,P)}return e.createElement.apply(null,U)}G.displayName="MDXCreateElement"},88828:(D,R,U)=>{U.d(R,{Z:()=>S});var e=U(67294),t=U(35742);function S(D){let{title:R}=D;return e.createElement(t.Z,null,e.createElement("title",null,R))}},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>n,contentTitle:()=>a,default:()=>G,frontMatter:()=>P,metadata:()=>B,toc:()=>A});var e=U(87462),t=(U(67294),U(3905)),S=U(88828);const P={title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},a=void 0,B={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"calendar",permalink:"/terminal/reference/forex/oanda/calendar"}},n={},A=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],K={toc:A},r="wrapper";function G(D){let{components:R,...U}=D;return(0,t.kt)(r,(0,e.Z)({},K,U,{components:R,mdxType:"MDXLayout"}),(0,t.kt)(S.Z,{title:"forex /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,t.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,t.kt)("h3",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE]\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"parameters"},"Parameters"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Name"),(0,t.kt)("th",{parentName:"tr",align:null},"Description"),(0,t.kt)("th",{parentName:"tr",align:null},"Default"),(0,t.kt)("th",{parentName:"tr",align:null},"Optional"),(0,t.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"ticker"),(0,t.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,t.kt)("td",{parentName:"tr",align:null},"None"),(0,t.kt)("td",{parentName:"tr",align:null},"True"),(0,t.kt)("td",{parentName:"tr",align:null},"AUDCHF, ZARPLN, DKKNZD, XAGUSD, USDRWF, MYREUR, ZAREUR, MWKGBP, USDBSD, ALLGBP, MXNZAR, HUFUSD, BRLARS, OMRAED, ZARUGX, GBPCZK, XAUCNY, MURGBP, EURLSL, EURBWP, AEDPKR, XAGBRL, XAUGBP, IDRKRW, BRICHF, VNDJPY, MADAUD, GBPBMD, USDTMT, HRKUSD, HUFPLN, HUFDKK, SGDGBP, KZTGBP, AUNUSD, EURCNY, HUFCAD, GBPSEK, ZARIDR, JPYTHB, MDLGBP, IDRCHF, KWDAED, SARJPY, GBPRON, ARSPEN, TWDCHF, INREUR, DKKCAD, USDCZK, AUDIDR, SARUSD, THBINR, XAUCAD, GHSGBP, EURKHR, ZMWZAR, ILSSEK, SGDTHB, EURKYD, USDMGA, ZARNOK, SGDCAD, SEKINR, DKKRUB, THBUSD, USDMYR, USDUZS, ZARSZL, JPYCLP, UAHUSD, JPYMXN, JPYNOK, AUDCNY, EURGYD, GBPBDT, PENUSD, ZARPHP, MXNARS, PLNCZK, GBPAUD, AEDAUD, RUBPLN, USDSDG, EURSCR, HKDMXN, RUBCHF, TRYJPY, OSOUSD, GBPMAD, EURTJS, PKREUR, EURCDF, AUDCAD, USDRSD, JPYCZK, BRLCLP, MWKUSD, ISKCHF, GBPBTN, BAMGBP, ILSZAR, SEKZAR, HUFZAR, QARAED, SARKWD, MYRHKD, RONZAR, JPYSAR, BHDPKR, DOPUSD, AUDGBP, INRHKD, XAUAUD, IDRAUD, XAUHKD, KRWSGD, AUDNZD, JPYGBP, KESUSD, KRWRUB, TNDGBP, USDEUR, BWPGBP, DKKMYR, GBPNGN, QARPKR, TWDCAD, BMDGBP, HUFJPY, GBPSCR, EURMVR, KHRGBP, LKRZAR, ZARBWP, EURIDR, GBPUAH, GBPGYD, ZARTND, KRWUSD, AUDMAD, ZARPKR, NZDGBP, AEDSAR, MYRIDR, XPTEUR, GHSZAR, SGDSEK, PENCAD, HKDZAR, SGDJPY, TRYUSD, GBPAMD, EURCOP, NZDZAR, DKKSGD, IDRTHB, AEDSEK, BDTGBP, AUDTHB, XAUKRW, GBPRUB, GBPYER, USDMVR, BRLMXN, TTDGBP, GBPBBD, EURPLN, SGDUSD, AUDILS, EURAED, NSOUSD, VRLCHF, SCRUSD, RWFUSD, ZARHKD, EURNZD, IDRZAR, TWDINR, KRWZAR, ZARNAD, HRKPLN, BAMUSD, EUREGP, NPRUSD, KRWTWD, XAUJPY, USDBHD, BNDGBP, EURBMD, EURNOK, MXNUSD, USDEGP, XPTGBP, ARSCOP, NZDCHF, NZDJPY, KRWCAD, EURBRL, DKKSEK, MALCHF, SOSUSD, GBPCUP, AUDCLP, EURUYU, EURUZS, UYUUSD, EURUSD, BWPZAR, NZDPLN, GBPLRD, IDRMYR, PABUSD, USDPKR, ARSCHF, MYRNZD, JODUSD, ARSHKD, EURMKD, EURLYD, XAGARS, ISKUSD, HKDSEK, USDTRY, RSDUSD, DKKAED, ZARMYR, KMFUSD, NGNZAR, IDRJPY, SARPKR, GBPMYR, ILSAUD, IDREUR, JPYAUD, QARUSD, GBPSLL, GBPEUR, PHPUSD, THBEUR, RUBEUR, USDMMK, XAGGBP, ZARARS, USDKMF, BZDUSD, SEKPLN, PLNJPY, GBPLBP, EURHNL, AUDPKR, KYDCAD, XAUZAR, MGAGBP, LRDUSD, NZDTRY, AUDHUF, USDLKR, EURNGN, BNDUSD, SGDIDR, MYRCAD, HKDPLN, EUROMR, EURSAR, GBPJPY, IDRHKD, MXNPEN, USDXPF, IQDGBP, USDPGK, INRCHF, NZDHKD, AUDHKD, BBDGBP, USDGTQ, NGNJPY, ARSSGD, GBPMOP, TWDMYR, BMDCAD, XPDUSD, USDDZD, EURBSD, SGDZAR, AUNCHF, ARSMXN, AUDFJD, UGXZAR, AUDARS, IQDUSD, MXNEUR, HKDAUD, XAGEUR, RONGBP, USDZMW, TRYSGD, INRSGD, GBPLAK, GBPMWK, EURKES, USDCUP, USDUYU, AUDJPY, XAGCAD, DKKCNY, USDJMD, MADGBP, ILSNOK, MUREUR, THBHKD, INRTHB, SAREUR, MYRGBP, AMDGBP, HKDARS, GBPARS, SGDAUD, INRTWD, BHDUSD, LRDGBP, GBPPAB, RONUSD, IDRNZD, MYRKRW, KMFGBP, ZARGHS, PLNMXN, USDHUF, ARECHF, BMDEUR, KYDGBP, AUDNOK, AUDCNH, TWDNZD, KWDEUR, EURZMW, KZTUSD, GBPBOB, GBPJMD, DKKCHF, EURCNH, SEKILS, AUDKRW, AWGGBP, HNLGBP, XAUEUR, NSOCHF, GBPLSL, USDBZD, ZARKES, SLLUSD, THBCHF, NOKUSD, EURCZK, HKDGBP, GBPTTD, MMKGBP, PGKGBP, BRLAUD, AEDDKK, EURBHD, JMDUSD, USDNGN, NOKRUB, SVCUSD, GBPQAR, LTLAUD, JPYTWD, USDRON, KRUCHF, SGDBRL, EGPPKR, EURJMD, MXNDKK, NZDMYR, USDLBP, MWKZAR, HRKAUD, MYRJPY, USDKWD, AUDBRL, EURYER, PLNGBP, IDRTWD, EGPEUR, EURPYG, ILSAED, EURKZT, DKKZAR, FJDUSD, NBLUSD, AEDEUR, PLNNOK, XPTUSD, MXNBRL, USDNAD, ZARUSD, NOKINR, ARSZAR, BOBGBP, RWFZAR, GBPLYD, USDUGX, GBPCHF, DKKAUD, PLNCHF, USDBIF, AUDSGD, MXNCZK, PENGBP, NOKAED, USDMKD, MKDGBP, PKRUSD, EURPGK, THBPKR, HTGUSD, SGDPKR, LKRGBP, EURPKR, ZARMXN, USDMXN, USDHRK, INRJPY, FRNCHF, MXNCLP, GBPNOK, SGDPLN, USDARS, OMRUSD, DKKBGN, INRSEK, USDCAD, XPDGBP, KESZAR, JPYPKR, BDTJPY, NPRGBP, EURZAR, MYRPKR, PGKAUD, KYDEUR, DKKISK, SGDEUR, MYRZAR, PLNDKK, BRLPEN, ZMWUSD, TNDUSD, GHSEUR, PGKUSD, KYDBMD, SZLGBP, DKKMXN, BGNCAD, BRLCHF, INRMYR, GBPISK, SGDNOK, HKDTHB, TWDPKR, GBPPYG, NOKDKK, GBPTHB, EURJOD, EURUAH, RUBZAR, PENMXN, SGDNZD, HKDPKR, USDDOP, NZDHUF, KYDUSD, GBPBZD, EGPZAR, NZDUSD, KWDGBP, USDBAM, EURTTD, ZARCAD, AEDINR, EURTND, USDCDF, ZARCOP, KRWEUR, ILSEUR, SVCGBP, GBPBAM, IDRINR, DOECHF, ZARNGN, DOEUSD, THBCNY, GBPTND, MGAUSD, THBZAR, TWDJPY, SZLEUR, EURLAK, EURUGX, KRWCNY, DZDEUR, EURCHF, ZARGBP, MYRCHF, HKDINR, EURHRK, USDKRW, SEKEUR, MDLEUR, AEDBHD, RUBKRW, USDBND, NIOGBP, DKKUSD, NIOUSD, BDTUSD, USDILS, GBPSZL, NOKZAR, BRLRSD, HTGGBP, RUBSEK, EURLKR, SEKGBP, DKKCZK, THBCAD, EURVND, USDGNF, GBPPHP, MXNSGD, AUDMYR, EURGNF, USDKES, ETBGBP, EURBZD, GBPUGX, USDPAB, HNLUSD, ARSAUD, SGDARS, JODILS, GBPKHR, USDFJD, DKKNOK, GBPPEN, DKKINR, JPYKRW, ZARAUD, VNDCAD, TWDEUR, JPYSEK, ZARDKK, INRCAD, EURLBP, XCDGBP, HUFCHF, XAUMXN, XAUINR, GBPMKD, THBMYR, KWDPKR, USDJPY, DKKTHB, TWDHKD, NZDIDR, AEDNOK, PKRGBP, MXNRUB, ZARCZK, INRKRW, MYRTHB, NZDPKR, EURBBD, MYRSGD, JPYDKK, USDMWK, USDTND, NOKCHF, TWDAUD, NGNUSD, AUDZAR, SGDMXN, KRWHKD, MVRUSD, THBTWD, EURFJD, GBPUSD, GBPILS, GBPXCD, INRNZD, EURNIO, USDSLL, USDAUD, USDNZD, KRWINR, JPYMYR, ZARRUB, EURSEK, JPYARS, AEDCAD, MXNCOP, AUDMXN, XPDEUR, EURMDL, TWDKRW, XAGTRY, BRLSGD, USDSEK, AUDHRK, DKKPLN, DKKGBP, ZARKRW, BGNUSD, AEDGBP, EURILS, USDLRD, AUDSEK, ZARRON, VNDEUR, SCRGBP, AUDAED, GNFUSD, INRZAR, DKKEUR, ARSBRL, MXNCHF, GBPDOP, LYDUSD, EURSOS, EURMAD, USDPLN, USDCHF, DKKHUF, DJFGBP, EURAFN, TRYCHF, GBPGNF, PHPJPY, EURCAD, USDPYG, EURDOP, PENARS, EGPJPY, GBPVND, USDBWP, DKKTWD, PENCLP, GBPBHD, SEKCHF, PLNEUR, XAGRUB, MYRINR, THBGBP, EURPAB, USDMDL, EURTRY, USDHKD, EURRUB, ZARAED, AUDPLN, SGDCHF, ILSJPY, KRWAUD, OSOCHF, GBPMMK, SZLCHF, GBPKMF, KRWNZD, ARSCAD, JMDGBP, THBAUD, USDCOP, ZARRWF, SEKNOK, HKDCHF, ZARTHB, ALLUSD, SOSGBP, EURINR, EURMMK, USDBDT, AUDPGK, USDKHR, USDBOB, EURAUD, TWDDKK, XAGMXN, SGDKRW, USDSCR, XPFGBP, XAGHKD, GBPKWD, USDAED, MMKUSD, PENBRL, GBPAED, HKDTWD, TWDSGD, NOKILS, EURPHP, USDRUB, SLLGBP, RUBMXN, GBPMXN, EURDKK, GBPPLN, IDRSGD, DZDUSD, MXNHKD, AUDPHP, SEKJPY, USDPEN, SGDCNY, ZARJPY, NZDINR, SGDINR, HKDKRW, GBPMUR, ZAREGP, OMRGBP, USDVND, GBPRWF, ETBUSD, TWDZAR, GBPGTQ, XAURUB, MKDUSD, EURCUP, GBPNPR, SEKUSD, ZARCNY, EURMYR, USDZAR, NZDEUR, EURDZD, GBPKZT, GBPPGK, ZARCYP, RONCHF, AEDCHF, MXNGBP, MXNJPY, GBPBWP, EURALL, JPYILS, INRGBP, GBPFJD, GBPHRK, JODAED, KWDUSD, USDLSL, HKDJPY, AUDUSD, ARSCLP, KRWSEK, NZDCZK, USDMUR, SHPUSD, GBPKES, AUDTWD, HKDBRL, GTQUSD, GBPETB, USDCVE, GHSUSD, ZARSEK, BGNCNY, ILSPLN, GBPAFN, GBPCNH, BRIUSD, ZARBRL, GBPBND, GBPKYD, JPYHKD, EURMZN, DKKCOP, BOBUSD, ZARHUF, EURHUF, ZARINR, MURUSD, USDSAR, EURTHB, EURDJF, EURMGA, ZARSGD, NZDAUD, XAGKRW, EURNPR, BWPCHF, YERUSD, ALLEUR, TRYPLN, MYRCNY, AEDNZD, AWGUSD, JPYCAD, EURRON, EURBOB, USDHNL, GBPCAD, THBSGD, SGDTRY, USDIDR, BBDUSD, EURNAD, EURGTQ, GBPALL, NOKEUR, NZDTWD, BRLZAR, USDBBD, BRLEUR, LKRUSD, EURBTN, JPYRUB, USDQAR, LYDGBP, BBDEUR, GBPUYU, USDTHB, GBPINR, BRLUSD, VNDUSD, UZSUSD, ILSUSD, MXNAUD, GBPTRY, JPYINR, KRUUSD, XAUUSD, EURMXN, USDPHP, GBPJOD, AFNGBP, SGDTWD, EURHKD, AEDZAR, GBPNIO, USDNOK, SGDDKK, ZARTWD, BIFUSD, GYDGBP, PKRZAR, JPYPLN, XAUBRL, USDETB, BMDKYD, ZARTRY, GBPRSD, USDAWG, PENCOP, USDTTD, RSDGBP, GBPMGA, GBPNZD, DKKPKR, ZARNZD, QARZAR, DKKJPY, GBPKRW, TZSUSD, GBPGHS, AUDDKK, NBLCHF, BMDBBD, THBIDR, NZDAED, MYRUSD, EURMOP, TWDSEK, AUDBGN, BHDEUR, GBPBGN, EURBIF, USDCLP, GTQGBP, JPYIDR, XAGAUD, EURCLP, UYUGBP, DKKPHP, USDCNH, USDKZT, EURETB, EURPEN, BGNAUD, INRUSD, IDRCAD, EURMUR, INRCNY, OMRZAR, HKDCAD, GBPHKD, HKDUSD, TJSUSD, DKKHKD, AUDCZK, GBPEGP, EURSLL, GBPCNY, EURGBP, ZARILS, GBPTWD, XAUARS, USDBRL, BWPUSD, BSDUSD, EURGHS, NZDTHB, NZDKRW, JPYEUR, USDOMR, EURBDT, HKDMYR, PYGUSD, GYDUSD, SEKDKK, EURRSD, EURBGN, GBPLKR, DKKUAH, XAGINR, ILSJOD, RUBAUD, LSLGBP, SEKCZK, ARSGBP, GBPIQD, GBPMVR, USDSZL, GBPHNL, ARSUSD, GBPIDR, USDDJF, EURQAR, JPYZAR, KRWIDR, RUBUSD, UAHDKK, JPYNZD, TWDIDR, USDALL, PLNUSD, PHPGBP, USDGBP, SGDHKD, GBPOMR, KRWTHB, ARSEUR, USDJOD, GBPSOS, SZLZAR, USDHTG, NOKPLN, GBPXPF, EURKWD, SZLUSD, MADZAR, SEKAUD, NOKGBP, ILSCHF, GBPSAR, GBPBIF, DKKTRY, EGPUSD, USDYER, MADUSD, TRYZAR, XAUTHB, XAUSAR, AEDJPY, USDISK, USDDKK, AUDTRY, USDBGN, PLNSEK, NZDCNY, THBJPY, JPYBRL, RUBJPY, AEDUSD, USDGHS, TTDUSD, USDKYD, EURRWF, GBPSGD, FJDGBP, HRKEUR, BSDGBP, INRAUD, USDINR, USDCNY, GBPCLP, XAGZAR, KRWBRL, DOPGBP, USDNIO, USDIQD, HKDEUR, AUDINR, BTNGBP, JPYCHF, USDLYD, EURSDG, USDSGD, GBPDKK, JPYRSD, EURBND, HKDNZD, TRYDKK, XAGJPY, GNFGBP, RWFGBP, GBPDZD, EURSGD, HKDSGD, IDRUSD, IDRCNY, SEKCAD, USDMAD, NOKJPY, ARSJPY, SGDAED, NZDCAD, RUBNOK, EURTZS, HKDDKK, XAUTRY, USDLAK, PLNHUF, THBKRW, THBNZD, EURSZL, MYRAUD, EURARS, SGDMYR, TWDCNY, MDLUSD, GBPDJF, HRKCAD, GBPHTG, EURTWD, ILSCAD, NGNGBP, KRWMYR, EURHTG, LBPUSD, BRLJPY, GBPCOP, NOKSEK, NZDDKK, PLNILS, EURMWK, USDUAH, KRWJPY, PHPDKK, USDTJS, EURIQD, HUFEUR, MXNPLN, GBPBRL, USDTZS, PENEUR, EURAMD, ZARMWK, TZSZAR, USDTWD, HKDCNY, LSLUSD, ZARMAD, EURKRW, TWDTHB, BRLCAD, BRLCOP, XAGCNY, JPYCNY, JPYAED, YERGBP, EURLRD, JPYUSD, BRLSEK, USDNPR, NZDNOK, MOPUSD, MYRDKK, GBPBSD, EURISK, USDGYD, AUDLTL, NZDMXN, TWDUSD, MYRTWD, GBPCDF, NZDSEK, IDRGBP, AUDEUR, USDMOP, RUBGBP, VRNCHF, BWPEUR, EURJPY, GBPHUF, KRWCHF, MALUSD, BGNDKK, BRLKRW, AUDRUB, NZDSGD, ZARCHF, HKDIDR, MXNCAD, GBPZAR, XAGSAR, BRLHKD, UYUEUR")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"resolution"),(0,t.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,t.kt)("td",{parentName:"tr",align:null},"d"),(0,t.kt)("td",{parentName:"tr",align:null},"True"),(0,t.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"interval"),(0,t.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,t.kt)("td",{parentName:"tr",align:null},"1day"),(0,t.kt)("td",{parentName:"tr",align:null},"True"),(0,t.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"start_date"),(0,t.kt)("td",{parentName:"tr",align:null},"Start date of data."),(0,t.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,t.kt)("td",{parentName:"tr",align:null},"True"),(0,t.kt)("td",{parentName:"tr",align:null},"None")))),(0,t.kt)("hr",null))}G.isMDXComponent=!0}}]);