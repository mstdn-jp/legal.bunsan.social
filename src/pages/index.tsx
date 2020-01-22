import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import "./index.css";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        合同会社分散型ソーシャルネットワーク機構
        分散型ソーシャルネットワーキングサービス運用チーム 公式サイト
      </title>
    </Helmet>
    <Header title="分散型ソーシャルネットワーキングサービス運用チーム 公式サイト" />
    <Link to="/legal/">
      <p className="center">
        {" "}
        分散型ソーシャルネットワーキングサービス 利用条件
      </p>
    </Link>
    <Link to="/privacy/">
      <p className="center">プライバシーポリシー</p>
    </Link>
  </div>
);
