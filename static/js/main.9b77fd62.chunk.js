(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,t,a){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__hdVR-"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3Bm8i",ImageGalleryItem:"ImageGallery_ImageGalleryItem__3ESQa"}},24:function(e,t,a){e.exports={notification:"Notification_notification__EqAeH"}},26:function(e,t,a){e.exports={loader:"Loader_loader__22LJc"}},27:function(e,t,a){e.exports=a(71)},32:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2T23c",SearchForm:"Searchbar_SearchForm__281Cg",SearchFormButton:"Searchbar_SearchFormButton__2Yj4H",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__K6T3p",SearchFormInput:"Searchbar_SearchFormInput__3Q3ve"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=(a(32),a(3)),i=a(4),s=a(6),u=a(5),m=(a(11),a(21)),d=a.n(m),h="https://pixabay.com/api/?q=",g="image_type=photo&orientation=horizontal&per_page=12",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flower",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return d.a.get("".concat(h).concat(e,"&page=").concat(t,"&key=").concat("12685146-fdd2799488131e47273c0b199","&").concat(g))},f=a(22),v=a.n(f),y=function(e){var t=e.item,a=e.onClickImage;return r.a.createElement("img",{onClick:a,src:t.webformatURL,"data-src":t.largeImageURL,alt:"",className:v.a.ImageGalleryItemImage})},_=a(23),b=a.n(_),S=function(e){var t=e.items,a=e.onClickImage;return t.length>0&&r.a.createElement("ul",{className:b.a.ImageGallery},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y,{item:e,onClickImage:a}))})))},I=a(7),E=a.n(I),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleInputChange=function(t){e.setState({searchValue:t.target.value})},e.handleSubmit=function(t){var a=e.props.onSubmit,n=e.state.searchValue;t.preventDefault(),a(n),e.resetForm()},e.resetForm=function(){e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchValue;return r.a.createElement("header",{className:E.a.Searchbar},r.a.createElement("form",{className:E.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{className:E.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit",className:E.a.SearchFormButton},r.a.createElement("span",{className:E.a.SearchFormButtonLabel},"Search"))))}}]),a}(n.Component),O=a(24),k=a.n(O),F=function(e){var t=e.message;return r.a.createElement("div",{className:k.a.notification},r.a.createElement("h1",null,"Oops : ",t,"..."))},C=a(8),L=a.n(C),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).overlayRef=Object(n.createRef)(),e.hadleKeypress=function(t){var a=e.props.onCloseModal;"Escape"===t.code&&a()},e.handleOverlayCLick=function(t){var a=e.props.onCloseModal;t.target===e.overlayRef.current&&a()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hadleKeypress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hadleKeypress)}},{key:"render",value:function(){var e=this.props.url;return r.a.createElement("div",{className:L.a.Overlay,ref:this.overlayRef,onClick:this.handleOverlayCLick},r.a.createElement("div",{className:L.a.Modal},r.a.createElement("img",{src:e,alt:"",className:L.a.image})))}}]),a}(n.Component),N=a(9),B=a.n(N),j=function(e){var t=e.title,a=e.OnloadMore,n=e.disadled,o=n?B.a.disabled:B.a.Button;return r.a.createElement("div",{className:B.a.container},r.a.createElement("button",{type:"button",className:o,onClick:a,disabled:n},t))};j.defaultProps={OnloadMore:null};var P=j,x=a(25),G=a.n(x),Q=a(26),R=a.n(Q),U=function(){return r.a.createElement("div",{className:R.a.loader},r.a.createElement(G.a,{type:"ThreeDots",color:"#403a39",height:100,width:100,timeout:5e3}))},V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,isLoading:!1,IsModalOpen:!1,imageForModal:null,currentQuery:"",currentPage:1,isLastPage:!1,isImagesNotFound:!1},e.fetchImages=function(t,a){e.setState({isLoading:!0}),p(t,a).then((function(t){var a=t.data,n=e.state.currentPage,r=a.hits.length;e.setState((function(e){return{isLastPage:r>0&&r<12||!1,images:e.images.concat(a.hits),isImagesNotFound:r<1,error:200===t.status?null:a.status}})),n>1&&e.scrollPage()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onSubmit=function(t){e.updateCurrentQueryParams(t)},e.closeModal=function(){e.setState({IsModalOpen:!1})},e.getUrlForModal=function(t){var a=t.target.dataset.src;e.setState({imageForModal:a,IsModalOpen:!0})},e.scrollPage=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.OnloadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.updateCurrentQueryParams=function(t){e.setState({images:[],currentQuery:t,currentPage:1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({currentQuery:"Skywalker"})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.currentPage,r=a.currentQuery;t.currentPage===n&&t.currentQuery===r||this.fetchImages(r,n)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.IsModalOpen,l=e.imageForModal,c=e.isLastPage,i=e.isImagesNotFound;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{onSubmit:this.onSubmit}),n&&r.a.createElement(F,{message:n.message}),o&&r.a.createElement(w,{url:l,onCloseModal:this.closeModal}),t.length>0&&r.a.createElement(S,{items:t,onClickImage:this.getUrlForModal}),!c&&!i&&!n&&!a&&r.a.createElement(P,{title:"Load More",OnloadMore:this.OnloadMore,disadled:!1}),c&&!a&&r.a.createElement(P,{title:"Sorry, that's all",disadled:!0}),i&&r.a.createElement(F,{message:"Images not found,try something else"}),a&&r.a.createElement(U,null))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3z_sK",Modal:"Modal_Modal__2xQOx",image:"Modal_image__33vj9"}},9:function(e,t,a){e.exports={container:"Button_container__2xpLX",Button:"Button_Button__261or",disabled:"Button_disabled__2Z_Mv Button_Button__261or"}}},[[27,1,2]]]);
//# sourceMappingURL=main.9b77fd62.chunk.js.map