"use client";

import React, { useEffect, useRef, memo } from "react";

type TradingViewWidgetProps = {
  symbol?: string;
  interval?: string;
  theme?: "light" | "dark";
  locale?: string;
  backgroundColor?: string;
};

function TradingViewWidget({
  symbol = "NASDAQ:AAPL",
  interval = "D",
  theme = "dark",
  locale = "en",
  backgroundColor = "rgba(255,255,255,1)",
}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clean up previous widgets
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const config = {
      autosize: true,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme,
      style: "1",
      locale,
      // withdateranges: true,
      hide_side_toolbar: false,
      backgroundColor,
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
      show_popup_button: true,
      popup_width: "1000",
      popup_height: "650",
    };

    script.innerHTML = JSON.stringify(config);
    container.current.appendChild(script);
  }, [symbol, interval, theme, locale, backgroundColor]);

  return (
    <div className="w-full h-[500px] lg:h-full  rounded-md">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
