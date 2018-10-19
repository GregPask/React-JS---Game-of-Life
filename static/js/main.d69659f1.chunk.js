(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(4),o=a(3),c=a(5),l=a(0),i=a.n(l),u=a(7),m=a.n(u),p=(a(14),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).selectState=function(){a.props.selectState(a.props.rows,a.props.cols)},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.selectState,id:this.props.id,className:this.props.class})}}]),t}(i.a.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.rows;t++)for(var a=0;a<this.props.cols;a++){var r=this.props.board[t][a]?"square true":"square false",n=t+"-"+a;e.push(i.a.createElement(p,{rows:t,cols:a,class:r,id:n,key:n,selectState:this.props.selectState}))}return i.a.createElement("div",{className:"board"},e)}}]),t}(i.a.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).selectState=function(t,a){var r=JSON.parse(JSON.stringify(e.state.board));r[t][a]=!r[t][a],e.setState({board:r})},e.seed=function(){for(var t=JSON.parse(JSON.stringify(e.state.board)),a=0;a<e.rows;a++)for(var r=0;r<e.cols;r++)1===Math.floor(8*Math.random())&&(t[a][r]=!0);e.setState({board:t})},e.gameLoop=function(){clearInterval(e.interval),e.interval=setInterval(e.playGame,80)},e.playGame=function(){for(var t=e.state.board,a=JSON.parse(JSON.stringify(e.state.board)),r=0;r<e.rows;r++)for(var n=0;n<e.cols;n++){var s=0;r>0&&n>0&&t[r-1][n-1]&&s++,r>0&&t[r-1][n]&&s++,r>0&&n<e.cols-1&&t[r-1][n+1]&&s++,n>0&&t[r][n-1]&&s++,n<e.cols-1&&t[r][n+1]&&s++,r<e.rows-1&&n>0&&t[r+1][n-1]&&s++,r<e.rows-1&&t[r+1][n]&&s++,r<e.rows-1&&n<e.cols-1&&t[r+1][n+1]&&s++,t[r][n]&&(s<2||s>3)&&(a[r][n]=!1),t[r][n]||3!==s||(a[r][n]=!0)}e.setState({board:a,generation:e.state.generation+1})},e.pauseGame=function(){clearInterval(e.interval)},e.clearGame=function(){var t=Array(e.rows).fill().map(function(){return Array(e.cols).fill(!1)});e.setState({board:t})},e.rows=30,e.cols=50,e.state={board:Array(e.rows).fill().map(function(){return Array(e.cols).fill(!1)}),generation:0},e}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.seed(),this.gameLoop()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Game of Life"),i.a.createElement("h3",null,"Generation: ",this.state.generation),i.a.createElement("div",{className:"width"},i.a.createElement("hr",{className:"hr"})),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{onClick:this.pauseGame,className:"btn btn1"},"Pause"),i.a.createElement("button",{onClick:this.clearGame,className:"btn btn2"},"Clear"),i.a.createElement("button",{onClick:this.seed,className:"btn btn3"},"Seed")),i.a.createElement("div",{className:"wrap"},i.a.createElement(b,{rows:this.rows,cols:this.cols,board:this.state.board,selectState:this.selectState})),i.a.createElement("div",{className:"play"},i.a.createElement("button",{onClick:this.gameLoop,className:"btn btn4"},"Play"),i.a.createElement("p",{style:{"font-size":"1.5em"}},"Pause and Clear to select your own starting seed!")))}}]),t}(i.a.Component);m.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.d69659f1.chunk.js.map