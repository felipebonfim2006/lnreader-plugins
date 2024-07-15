var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/filterInputs"),r=require("@libs/fetch"),i=require("cheerio"),o=function(){function o(){var t=this;this.id="TopLiba",this.name="ТопЛиба",this.site="https://topliba.com",this.version="1.0.0",this.icon="src/ru/topliba/icon.png",this._token="",this.popularNovels=this.fetchNovels,this.resolveUrl=function(e,n){return t.site+(n?"/books/"+e:"/reader/"+e.split("?")[0])},this.filters={sort:{label:"Сортировка:",value:"rating",options:[{label:"По рейтингу",value:"rating"},{label:"По популярности",value:"num_downloads"},{label:"По году выхода",value:"year"},{label:"По дате добавления",value:"date"},{label:"По названию",value:"title"}],type:n.FilterTypes.Picker}}}return o.prototype.fetchNovels=function(n,i,o){return t(this,arguments,void 0,(function(t,n,i){var o,a,s,l,c,u=this,h=n.showLatestNovels,p=n.filters;return e(this,(function(e){switch(e.label){case 0:return o=new URLSearchParams({order_field:h?"date":(null===(l=null==p?void 0:p.sort)||void 0===l?void 0:l.value)||"rating",p:t}),i&&o.append("q",i),[4,(0,r.fetchApi)(this.site+"/?"+o.toString()).then((function(t){return t.text()}))];case 1:return a=e.sent(),s=[],this._token=null===(c=a.match(/<meta name="_token" content="(.*?)"/))||void 0===c?void 0:c[1],(a.match(/<img class="cover" data-original=".*>/g)||[]).forEach((function(t){var e=t.match(/data-original=".*covers\/(.*?)_.*title="(.*?)"/)||[],n=e[1],r=e[2];n&&r&&s.push({name:r,cover:u.site+"/covers/"+n+".jpg",path:n})})),[2,s]}}))}))},o.prototype.searchNovels=function(n,r){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){return t={showLatestNovels:!1,filters:{}},[2,this.fetchNovels(r,t,n)]}))}))},o.prototype.parseNovel=function(n){return t(this,void 0,void 0,(function(){var t,o,a,s,l,c,u;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.resolveUrl(n,!0)).then((function(t){return t.text()}))];case 1:return t=e.sent(),o=(0,i.load)(t),a={path:n,name:o("div > h1").text().trim(),cover:this.site+"/covers/"+n+".jpg",summary:o(".description").text().trim(),author:o(".book-author > a").text().trim(),genres:o(".book-genres > div > a").map((function(t,e){return o(e).text()})).get().join(",")},[4,(0,r.fetchApi)(this.resolveUrl(n)).then((function(t){return t.text()}))];case 2:return s=e.sent(),this._token=(null===(c=s.match(/<meta name="_token" content="(.*?)"/))||void 0===c?void 0:c[1])||(null===(u=t.match(/<meta name="_token" content="(.*?)"/))||void 0===u?void 0:u[1])||this._token,l=[],(s.match(/<li class="padding-\d+" data-capter="\d+">([\s\S]*?)</g)||[]).forEach((function(t,e){var r=t.match(/class="padding-(\d+)" data-capter="(\d+)">([\s\S]*?)</)||[],i=r[1],o=r[2],a=r[3];if(i&&o&&a){var s="0"===i?o:i+"-"+(parseInt(o,10)-1);l.push({name:a.trim(),path:n+"?"+s,releaseTime:null,chapterNumber:e+1})}})),a.chapters=l,[2,a]}}))}))},o.prototype.parseChapter=function(n){return t(this,void 0,void 0,(function(){var t,i,o,a,s;return e(this,(function(e){switch(e.label){case 0:return t=n.split("?"),i=t[0],o=t[1],this._token?[3,2]:[4,(0,r.fetchApi)(this.resolveUrl(i)).then((function(t){return t.text()}))];case 1:a=e.sent(),this._token=null===(s=a.match(/<meta name="_token" content="(.*?)"/))||void 0===s?void 0:s[1],e.label=2;case 2:return[4,(0,r.fetchApi)(this.resolveUrl(i)+"/chapter",{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Referer:this.resolveUrl(i),Origin:this.site},method:"POST",body:new URLSearchParams({chapter:o,_token:this._token}).toString()}).then((function(t){return t.text()}))];case 3:return[2,e.sent()]}}))}))},o}();exports.default=new o;