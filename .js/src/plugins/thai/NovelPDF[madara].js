var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(n,r){function i(e){try{s(l.next(e))}catch(e){r(e)}}function o(e){try{s(l.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,n,r,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(i=0)),i;)try{if(a=1,l&&(n=2&o[0]?l.return:o[0]?l.throw||((n=l.return)&&n.call(l),0):l.next)&&!(n=n.call(l,o[1])).done)return n;switch(l=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,l=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],l=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var l,n=0,r=t.length;n<r;n++)!l&&n in t||(l||(l=Array.prototype.slice.call(t,0,n)),l[n]=t[n]);return e.concat(l||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=l(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function l(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),l=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(l,10);if(!l)return e;if(u(e,["detik","segundo","second","วินาที"]))a=a.subtract(n,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(n,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(n,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(n,"days");else if(u(e,["week","semana"]))a=a.subtract(n,"week");else if(u(e,["month","mes"]))a=a.subtract(n,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;a=a.subtract(n,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(2+a),this.options=e.options,this.filters=e.filters}return l.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,r.load)(e.html()||""),l=t.html()||"";l=(l=l.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(l),e.find(":not(:has(*))").each((function(e,l){var n,r=t(l),i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=r.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=i.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");r.html((null===(n=r.html())||void 0===n?void 0:n.replace(r.text(),u).replace("\n","<br>"))||"")}))}return e},l.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},l.prototype.getCheerio=function(a,l){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=r.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},l.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,l){var n=e(l).find(".post-title").text().trim(),r=e(l).find(".post-title").find("a").attr("href")||"";if(n&&r){var o=e(l).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||i.defaultCover,path:r.replace(/https?:\/\/.*?\//,"/")};t.push(s)}})),t},l.prototype.popularNovels=function(a,l){return e(this,arguments,void 0,(function(e,a){var l,n,r,i,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(n in l=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(l+="&m_orderby=latest"),u)if("object"==typeof u[n].value)for(r=0,i=u[n].value;r<i.length;r++)o=i[r],l+="&".concat(n,"=").concat(o);else u[n].value&&(l+="&".concat(n,"=").concat(u[n].value));return[4,this.getCheerio(l,!1)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},l.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,l,u,c,h,p,v,d,f,b=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Genre":case"Tags":case"Género(s)":case"التصنيفات":l.genres?l.genres+=", "+a:l.genres=a;break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=a;break;case"Status":case"Novel":case"Estado":l.status=a.includes("OnGoing")||a.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script,noscript").remove(),u=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),l.summary=this.translateDragontea(u).text().trim(),c=[],h="",(null===(f=this.options)||void 0===f?void 0:f.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return h=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(v=new FormData).append("action","manga_get_chapters"),v.append("manga",p),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:v}).then((function(e){return e.text()}))];case 4:h=t.sent(),t.label=5;case 5:return"0"!==h&&(e=(0,r.load)(h)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var l=e(a).find("a").text().trim(),n=e(a).find("span.chapter-release-date").text().trim();n=n?b.parseData(n):(0,s.default)().format("LL");var r=e(a).find("a").attr("href")||"";r&&"#"!=r&&c.push({name:l,path:r.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:d-t})})),l.chapters=c.reverse(),[2,l]}}))}))},l.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),l=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&l.find('span[style*="opacity: 0; position: fixed;"]').remove(),l.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(l).html()||""]}}))}))},l.prototype.searchNovels=function(a,l){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+l+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return n=t.sent(),[2,this.parseNovels(n)]}}))}))},l}())({id:"novelpdf",sourceSite:"https://novelpdf.xyz/",sourceName:"Novel PDF",options:{useNewChapterEndpoint:!0,lang:"Thai"},filters:{filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"18+",value:"18"},{label:"กาว",value:"กาว"},{label:"กำลังภายใน",value:"กำลังภายใน"},{label:"ของวิเศษ",value:"ของวิเศษ"},{label:"คลั่งรัก",value:"คลั่งรัก"},{label:"คอเมดี้",value:"คอเมดี้"},{label:"ค้าขาย",value:"ค้าขาย"},{label:"จบ",value:"จบ"},{label:"จอมมาร",value:"จอมมาร"},{label:"จีนโบราณ",value:"จีนโบราณ"},{label:"ชายาอ๋อง",value:"ชายาอ๋อง"},{label:"ซุปเปอร์สตาร์",value:"ซุปเปอร์สตาร์"},{label:"ดราม่า",value:"ดราม่า"},{label:"ต่างโลก",value:"ต่างโลก"},{label:"ทะลุมิติ",value:"ทะลุมิติ"},{label:"ทายาทเศรษฐี",value:"ทายาทเศรษฐี"},{label:"ทำอาหาร",value:"ทำอาหาร"},{label:"นักปรุงยา",value:"นักปรุงยา"},{label:"นางเอกเก่ง",value:"นางเอกเก่ง"},{label:"นิยายจีน",value:"นิยายจีน"},{label:"นิยายรัก",value:"นิยายรัก"},{label:"นิยายแปล",value:"นิยายแปล"},{label:"ผจญภัย",value:"ผจญภัย"},{label:"ย้อนยุค",value:"ย้อนยุค"},{label:"ย้อนเวลา",value:"ย้อนเวลา"},{label:"ระบบ",value:"ระบบ"},{label:"สงครามอวกาศ",value:"สงครามอวกาศ"},{label:"สัตวเลี้ยง",value:"สัตวเลี้ยง"},{label:"สโลไลฟ์",value:"สโลไลฟ์"},{label:"เกิดใหม่",value:"เกิดใหม่"},{label:"เทพอสูร",value:"เทพอสูร"},{label:"เวทมนต์",value:"เวทมนต์"},{label:"แก้แค้น",value:"แก้แค้น"},{label:"แฟนตาซี",value:"แฟนตาซี"},{label:"แอ๊คชัน",value:"แอ๊คชัน"},{label:"แอคชั่น",value:"แอคชั่น"},{label:"โรแมนติก",value:"โรแมนติก"},{label:"ใช้ชีวิต",value:"ใช้ชีวิต"},{label:"ไซไฟ",value:"ไซไฟ"}]},op:{type:"Switch",label:"having all selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}}});exports.default=c;