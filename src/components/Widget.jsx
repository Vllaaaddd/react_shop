import React from "react";
import ExchangeWidget from "react-exchange-widget";

export const Widget = () => {
  return (
    <div>
      <ExchangeWidget serviceApiConfig={Widget} />
    </div>
  );
};
