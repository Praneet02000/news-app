(this["webpackJsonpalan-ai"]=this["webpackJsonpalan-ai"]||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(10),c=n.n(a),r=(n(87),n(37)),o=n(38),s=n.n(o),l=n(171),d=n(163),b=n(164),j=n(165),h=n(166),m=n(167),p=n(168),x=n(161),f=Object(x.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),g=(n(90),n(3)),u=function(e){var t=e.article,n=t.description,a=t.publishedAt,c=t.source,o=t.title,s=t.url,x=t.urlToImage,u=e.activeArticle,O=e.i,y=f(),w=Object(i.useState)([]),v=Object(r.a)(w,2),C=v[0],N=v[1];return Object(i.useEffect)((function(){window.scroll(0,0),N((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;O===u&&C[u]&&(e=C[u],window.scroll(0,e.current.offsetTop-50))}),[O,u,C]),Object(g.jsxs)(l.a,{ref:C[O],className:u===O?y.activeCard:y.card,children:[Object(g.jsxs)(d.a,{href:s,target:"_blank",children:[Object(g.jsx)(b.a,{className:y.media,image:x||"https://sadbhawnapaati.com/wp-content/uploads/2021/03/news.jpg"}),Object(g.jsxs)("div",{className:y.details,children:[Object(g.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(a).toDateString()}),Object(g.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(g.jsx)(j.a,{className:y.title,gutterBottom:!0,variant:"h5",children:o}),Object(g.jsx)(h.a,{children:Object(g.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(g.jsxs)(m.a,{className:y.cardActions,children:[Object(g.jsx)(p.a,{size:"small",color:"primary",children:"Learn More"}),Object(g.jsx)(j.a,{variant:"h5",color:"textSecondary",children:O+1})]})]})},O=n(170),y=n(169),w=Object(x.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),v=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],C=function(e){var t=e.articles,n=e.activeArticle,i=w();return t.length?Object(g.jsx)(O.a,{in:!0,children:Object(g.jsx)(y.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(g.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(g.jsx)(u,{article:e,i:t,activeArticle:n})})}))})}):Object(g.jsx)(O.a,{in:!0,children:Object(g.jsx)(y.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:v.map((function(e){return Object(g.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:i.infoCard,children:Object(g.jsxs)("div",{className:i.card,style:{backgroundColor:e.color},children:[Object(g.jsx)(j.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(g.jsxs)(j.a,{variant:"h6",component:"h6",children:[Object(g.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(g.jsx)("br",{}),e.info]}):null,Object(g.jsxs)(j.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(g.jsx)("br",{})," ",Object(g.jsx)("i",{children:e.text})]})]})})}))})})},N=n(26),A=Object(x.a)((function(e){return{footer:Object(N.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(N.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(N.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(N.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),S=n(76),k=n.n(S),B=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(-1),o=Object(r.a)(c,2),l=o[0],d=o[1],b=A();return Object(i.useEffect)((function(){s()({key:"d5cfd5d3faea5b7e31a9fc00bda86cf82e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)a(n),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var c=i.length>2?k()(i,{fuzzy:!0}):i,r=n[c-1];c>n.length?s()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),s()().playText("Opening...")):s()().playText("Please try that again...")}}})}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"NEWS READER"}),Object(g.jsx)("div",{className:b.logoContainer,children:Object(g.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvriv_KJwJ95OpMkS0bLinjBgvjKbpsV7FRDU3izH3RYQ6bj8FknBNuK15A5eE_ezliwA&usqp=CAU",className:b.alanLogo,alt:"ai image"})}),Object(g.jsx)(C,{articles:n,activeArticle:l})]})};c.a.render(Object(g.jsx)(B,{}),document.getElementById("root"))},87:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.8decae53.chunk.js.map