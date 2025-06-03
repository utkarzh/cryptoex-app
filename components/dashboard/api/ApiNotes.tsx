import React from "react";

const ApiNotes = () => {
  return (
    <div className="w-full">
      <h4 className="text-xs font-light mb-3">Note</h4>
      <ul className="space-y-2 list-disc text-[10px] font-normal pl-4">
        <li className="">
          {" "}
          We provides you with a strong REST and Websocket API, through which
          you can enjoy services such as Market Query, Automatic Trading,
          etc.please view the API document.{" "}
        </li>
        <li className=""> One account can create up to 5 API secret keys.</li>
        <li>
          To avoid loss of assets, please do not disclose your API Key to
          anybody. For security reasons, we recommend that each API Key should
          bind 5 IP addresses at most. If there is only one IP address, you can
          enter it directly.
          <p>
            {" "}
            If there are more than one IP addresses, you should separate them
            with comma (e.g. 192.168.1.1,192.168.1.2,192.168.1.3).
          </p>
        </li>

        <li>
          For Trading API , a single IP restricts 100 requests per minute.
        </li>
        <li>
          Each API key is valid for 100 days and if crossed it will
          automatically change to inactive mode.
        </li>
        <li>
          If you have any question please reach us{" "}
          <a
            href="mailto:support@indoex.io"
            className="text-green-600 underline"
          >
            support@indoex.io
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ApiNotes;
