import React, { Fragment } from "react";

type Props = {
  title: string;
};

export default ({ title }: Props) => (
  <Fragment>
    <h1 className="center">合同会社分散型ソーシャルネットワーク機構</h1>
    <h2 className="center">{title}</h2>
  </Fragment>
);
