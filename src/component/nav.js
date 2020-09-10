import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <div className="wrap">
        <h1 id="logo">KaiKeBa</h1>
        <nav className="nav">
          <Link to="/">首页</Link>

          <Link to="/about">关于我们</Link>

          <Link to="/joinUS">加入我们</Link>
          <a href="https://wwww.baidu.com" target="_blank">
            百度搜索
          </a>
        </nav>
      </div>
    </header>
  );
}
