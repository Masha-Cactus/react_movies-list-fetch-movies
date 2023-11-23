(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(2)),n=c(1),r=(c(14),c(15),c(16),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=c(8),j=c(6),m=c.n(j);c(18);var b=function(e){var t=e.addMovie,c=e.movies,i=Object(n.useState)(""),s=Object(a.a)(i,2),d=s[0],j=s[1],b=Object(n.useState)(null),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(n.useState)(!1),x=Object(a.a)(O,2),p=x[0],f=x[1],N=Object(n.useState)(!1),g=Object(a.a)(N,2),y=g[0],w=g[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":p}),value:d,onChange:function(e){f(!1),j(e.target.value)}})}),p&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":y}),disabled:0===d.length,onClick:function(e){var t;e.preventDefault(),w(!0),f(!1),(t=d,fetch("".concat("https://www.omdbapi.com/?apikey=a42e44b5","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if("Error"in e)h(null),f(!0);else{var t="N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,c={title:e.Title,description:e.Plot,imgUrl:t,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};h(c),f(!1)}})).finally((function(){return w(!1)}))},children:"Find a movie"})}),v&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(e){e.preventDefault(),v&&!c.some((function(e){return e.imdbId===v.imdbId}))&&t((function(e){return[].concat(Object(o.a)(e),[v])})),j(""),h(null)},children:"Add to the list"})})]})]}),!p&&v&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:v})]})]})},u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{addMovie:i,movies:c})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c90ac86d.chunk.js.map