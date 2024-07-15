var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(r,n){function i(e){try{s(l.next(e))}catch(e){n(e)}}function o(e){try{s(l.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(i=0)),i;)try{if(a=1,l&&(r=2&o[0]?l.return:o[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,o[1])).done)return r;switch(l=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,l=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],l=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var l,r=0,n=t.length;r<n;r++)!l&&r in t||(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=l(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function l(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),l=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",r=parseInt(l,10);if(!l)return e;if(u(e,["detik","segundo","second","วินาที"]))a=a.subtract(r,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(r,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(r,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(r,"days");else if(u(e,["week","semana"]))a=a.subtract(r,"week");else if(u(e,["month","mes"]))a=a.subtract(r,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;a=a.subtract(r,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(2+a),this.options=e.options,this.filters=e.filters}return l.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,n.load)(e.html()||""),l=t.html()||"";l=(l=l.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(l),e.find(":not(:has(*))").each((function(e,l){var r,n=t(l),i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=n.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=i.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");n.html((null===(r=n.html())||void 0===r?void 0:r.replace(n.text(),u).replace("\n","<br>"))||"")}))}return e},l.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},l.prototype.getCheerio=function(a,l){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=n.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},l.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,l){var r=e(l).find(".post-title").text().trim(),n=e(l).find(".post-title").find("a").attr("href")||"";if(r&&n){var o=e(l).find("img"),s={name:r,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||i.defaultCover,path:n.replace(/https?:\/\/.*?\//,"/")};t.push(s)}})),t},l.prototype.popularNovels=function(a,l){return e(this,arguments,void 0,(function(e,a){var l,r,n,i,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in l=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(l+="&m_orderby=latest"),u)if("object"==typeof u[r].value)for(n=0,i=u[r].value;n<i.length;n++)o=i[n],l+="&".concat(r,"=").concat(o);else u[r].value&&(l+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(l,!1)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},l.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,l,u,c,h,p,v,d,b,f=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Genre":case"Tags":case"Género(s)":case"التصنيفات":l.genres?l.genres+=", "+a:l.genres=a;break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=a;break;case"Status":case"Novel":case"Estado":l.status=a.includes("OnGoing")||a.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script,noscript").remove(),u=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),l.summary=this.translateDragontea(u).text().trim(),c=[],h="",(null===(b=this.options)||void 0===b?void 0:b.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return h=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(v=new FormData).append("action","manga_get_chapters"),v.append("manga",p),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:v}).then((function(e){return e.text()}))];case 4:h=t.sent(),t.label=5;case 5:return"0"!==h&&(e=(0,n.load)(h)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var l=e(a).find("a").text().trim(),r=e(a).find("span.chapter-release-date").text().trim();r=r?f.parseData(r):(0,s.default)().format("LL");var n=e(a).find("a").attr("href")||"";n&&"#"!=n&&c.push({name:l,path:n.replace(/https?:\/\/.*?\//,"/"),releaseTime:r||null,chapterNumber:d-t})})),l.chapters=c.reverse(),[2,l]}}))}))},l.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),l=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&l.find('span[style*="opacity: 0; position: fixed;"]').remove(),l.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(l).html()||""]}}))}))},l.prototype.searchNovels=function(a,l){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+l+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},l}())({id:"riwyat",sourceSite:"https://riwyatspace.com/",sourceName:"Riwyat",options:{useNewChapterEndpoint:!0,lang:"Arabic",versionIncrements:3},filters:{filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"أكشن",value:"أكشن"},{label:"أيتشي",value:"أيتشي"},{label:"استراتجي",value:"استراتجي"},{label:"العصر الحديث",value:"العصر-الحديث"},{label:"انتقام",value:"انتقام"},{label:"بالغ",value:"بالغ"},{label:"بناء مملكة",value:"بناء-مملكة"},{label:"بوليسي",value:"بوليسي"},{label:"تاريخي",value:"تاريخي"},{label:"جوسي",value:"جوسي"},{label:"حريم",value:"حريم"},{label:"حياة يومية",value:"حياة-يومية"},{label:"خيال",value:"خيال"},{label:"خيال علمي",value:"خيال-علمي"},{label:"دراما",value:"دراما"},{label:"رعب",value:"رعب"},{label:"رومانسية",value:"رومانسية"},{label:"رياضي",value:"رياضي"},{label:"زيانشيا",value:"xianxia"},{label:"سنين",value:"سنين"},{label:"شريحة حياة",value:"شريحة-حياة"},{label:"شوانهوان",value:"xuanhuan"},{label:"شوجو",value:"شوجو"},{label:"شونين",value:"شونين"},{label:"شيانشيا",value:"شيانشيا"},{label:"عسكري",value:"عسكري"},{label:"غموض",value:"غموض"},{label:"فانتازيا",value:"فانتازيا"},{label:"فنون قتالية",value:"فنون-قتالية"},{label:"قوى خارقة",value:"قوى-خارقة"},{label:"كوميديا",value:"كوميديا"},{label:"كوميك",value:"كوميك"},{label:"للكبار",value:"للكبار"},{label:"مأساة",value:"مأساة"},{label:"مانجا",value:"مانجا"},{label:"مانها",value:"مانها"},{label:"مانهوا",value:"مانهوا"},{label:"مدرسي",value:"مدرسي"},{label:"مصاصي دماء",value:"مصاصي-دماء"},{label:"مغامرة",value:"مغامرة"},{label:"مكتملة",value:"مكتملة"},{label:"نفسي",value:"نفسي"},{label:"نهاية العالم",value:"نهاية-العالم"},{label:"واب تون",value:"واب-تون"},{label:"وان شوت",value:"وان-شوت"}]},op:{type:"Switch",label:"having all selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"مستمرة",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}}});exports.default=c;