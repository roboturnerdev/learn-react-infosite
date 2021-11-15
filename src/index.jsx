import React from "react";
import ReactDOM from "react-dom";

// resources
import './index.css';

// components
import InfoSite from './componentlib/InfoSite';

ReactDOM.render(<InfoSite />, document.getElementById('root'));



// I think Webpack will help me organize and distribute
// the dependencies. I can already tell there are going to be many
// places requiring many things soon.

// I found a video about aggregate modules that helped understand import/export in es6.
// Watch to the end for info about aggregate modules, aliases, and default exports.
// credit: dcode https://www.youtube.com/watch?v=s9kNndJLOjg