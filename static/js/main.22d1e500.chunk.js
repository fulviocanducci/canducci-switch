(this["webpackJsonpcanducci-switch-example"]=this["webpackJsonpcanducci-switch-example"]||[]).push([[0],{10:function(e,n,t){e.exports=t(19)},18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);t(11);var r,a=t(0),l=t.n(a),c=t(5),o=t.n(c),i=t(6);!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(r||(r={}));var u=r;function m(){var e,n,t=(e=["\n    position: relative;\n    display: inline-block;\n  \n    ","\n    ","\n    ","\n  \n    input {\n      display: none;\n    }\n  \n    span {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: ",";\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n      ","\n      ","\n      ","\n    }\n  \n    span:before {\n      position: absolute;\n      content: '';\n      ","\n      ","\n      ","\n      \n      background-color: ",";\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n      ","\n    }\n  \n    input:checked + span {\n      background-color: ",";\n    }\n  \n    input:focus + span {\n      box-shadow: 0 0 1px ",";\n    }\n  \n    input:checked + span:before {\n      ","\n      ","\n      ","\n    }\n  "],n||(n=e.slice(0)),e.raw=n,e);return m=function(){return t},t}var s=i.a.label(m(),(function(e){return e.size===u.Big&&"width:60px;height:34px;"}),(function(e){return e.size===u.Medium&&"width:45px;height:25px;"}),(function(e){return e.size===u.Small&&"width:30px;height:17px;"}),(function(e){return e.backgroundColorOff}),(function(e){return e.round&&e.size===u.Big&&"border-radius: 34px;"}),(function(e){return e.round&&e.size===u.Medium&&"border-radius: 25px;"}),(function(e){return e.round&&e.size===u.Small&&"border-radius: 17px;"}),(function(e){return e.size===u.Big&&"height:26px;width:26px;left:4px;bottom:4px;"}),(function(e){return e.size===u.Medium&&"height:19px;width:19px;left:3px;bottom:3px;"}),(function(e){return e.size===u.Small&&"height:13px;width:13px;left:2px;bottom:2px;"}),(function(e){return e.cicleColor}),(function(e){return e.round&&"border-radius: 50%;"}),(function(e){return e.backgroundColorOn}),(function(e){return e.backgroundColorOn}),(function(e){return e.size===u.Big&&"-webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);"}),(function(e){return e.size===u.Medium&&"-webkit-transform: translateX(19px);\n        -ms-transform: translateX(19px);\n        transform: translateX(19px);"}),(function(e){return e.size===u.Small&&"-webkit-transform: translateX(13px);\n          -ms-transform: translateX(13px);\n          transform: translateX(13px);"})),d=function(e){return l.a.createElement("input",Object.assign({type:"checkbox"},e))},f=function(){return l.a.createElement("span",null)},p=function(e){var n=e.round,t=e.size,r=e.backgroundColorOn,a=e.backgroundColorOff,c=e.cicleColor,o=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["round","size","backgroundColorOn","backgroundColorOff","cicleColor"]);return l.a.createElement(s,{round:!!n,size:t,backgroundColorOn:r,backgroundColorOff:a,cicleColor:c},l.a.createElement(d,Object.assign({},o)),l.a.createElement(f,null))};p.defaultProps={round:!1,size:u.Medium,backgroundColorOn:"#2196f3",backgroundColorOff:"#ccc",cicleColor:"#ffffff"};var b=p,E=(t(18),function(){return l.a.createElement("div",null,l.a.createElement("main",{role:"main",className:"flex-shrink-0"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mt-5"},"Canducci Switch"),l.a.createElement("p",{className:"lead"},"Switch Input type Checkbox"),l.a.createElement("h3",null,"Normal"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"<CanducciSwitch />"))),l.a.createElement("div",null,l.a.createElement(b,null)),l.a.createElement("p",null,l.a.createElement("pre",null,"<CanducciSwitch round/>")),l.a.createElement("div",null,l.a.createElement(b,{round:!0})),l.a.createElement("br",null),l.a.createElement("h3",null,"3 Sizes"),l.a.createElement("hr",null),l.a.createElement("p",null,"There are 3 settings: ",l.a.createElement("code",null,"'Big', 'Medium', 'Small'")," and two Edges: ",l.a.createElement("code",null,"round={true}")," or"," ",l.a.createElement("code",null,"round={false}"),":"),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"<CanducciSwitch size={Size.Big} />",l.a.createElement("br",null),"<CanducciSwitch size={Size.Medium} />",l.a.createElement("br",null),"<CanducciSwitch size={Size.Small} />",l.a.createElement("br",null),"<CanducciSwitch size={Size.Big} round/>",l.a.createElement("br",null),"<CanducciSwitch size={Size.Medium} round/>",l.a.createElement("br",null),"<CanducciSwitch size={Size.Small} round/>"))),l.a.createElement("div",null,l.a.createElement(b,{size:u.Big})," ",l.a.createElement(b,{size:u.Medium})," ",l.a.createElement(b,{size:u.Small})," ",l.a.createElement(b,{size:u.Big,round:!0})," ",l.a.createElement(b,{size:u.Medium,round:!0})," ",l.a.createElement(b,{size:u.Small,round:!0})," "),l.a.createElement("br",null),l.a.createElement("h3",null,"Change Colors"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("pre",null,"<CanducciSwitch "," ",l.a.createElement("br",null),"  size={Size.Big} "," ",l.a.createElement("br",null),'  cicleColor={"white"} '," ",l.a.createElement("br",null),'  backgroundColorOn={"red"} '," ",l.a.createElement("br",null),'  backgroundColorOff={"blue"} />'," ",l.a.createElement("br",null),l.a.createElement("br",null),"<CanducciSwitch "," ",l.a.createElement("br",null),"  size={Size.Big} "," ",l.a.createElement("br",null),'  cicleColor={"#87a38f"} '," ",l.a.createElement("br",null),'  backgroundColorOn={"#01611b"} '," ",l.a.createElement("br",null),'  backgroundColorOff={"#213326"} />'," ",l.a.createElement("br",null))),l.a.createElement("div",null,l.a.createElement(b,{size:u.Big,cicleColor:"white",backgroundColorOn:"red",backgroundColorOff:"blue"})," ",l.a.createElement("br",null),l.a.createElement(b,{size:u.Big,cicleColor:"#87a38f",backgroundColorOn:"#01611b",backgroundColorOff:"#213326",round:!0})," "))),l.a.createElement("footer",{className:"footer mt-auto py-3"},l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"text-muted"},"Place sticky footer content here."))))});o.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.22d1e500.chunk.js.map