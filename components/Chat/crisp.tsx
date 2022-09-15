import React from "react";

export default class Crisp extends React.Component {
    componentDidMount () {
      // Include the Crisp code here, without the <script></script> tags
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "552d54a9-3fee-4c73-94f8-19357f185101";
  
      (function() {
        var d = document;
        var s = d.createElement("script");
  
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  
    render () {
      return null;
    }
  }