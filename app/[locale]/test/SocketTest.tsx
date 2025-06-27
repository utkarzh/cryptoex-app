"use client";

import { useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";

const SOCKET_URL_MAIN = "https://socket.indoex.io";
const SOCKET_URL_PROXY = "https://proxysocket.indoex.io";
const COMBINATION = "BTC_USDT";

export default function IndoExSocketWithProfile() {
  const mainSocketRef = useRef<Socket | null>(null);
  const proxySocketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socketMain = io(SOCKET_URL_MAIN, {
      autoConnect: true,
      forceNew: true,
      reconnection: true,
      transports: ["websocket", "polling", "flashsocket"],
    });

    const socketProxy = io(SOCKET_URL_PROXY, {
      autoConnect: true,
      forceNew: true,
      reconnection: true,
      transports: ["websocket", "polling", "flashsocket"],
    });

    mainSocketRef.current = socketMain;
    proxySocketRef.current = socketProxy;

    // 🔌 Connect and emit setmycombinations
    socketMain.on("connect", (data) => {
      console.log("Data at main socket:--", data);
      console.log("✅ Connected to MAIN socket");
      socketMain.emit("setmycombinations", { myordercombination: COMBINATION });
    });

    socketProxy.on("connect", () => {
      console.log("✅ Connected to PROXY socket");
      socketProxy.emit("setmycombinations", {
        myordercombination: COMBINATION,
      });
    });

    // 📥 Listen for response on sendmyprofile
    socketMain.on("myprofile", (data: any) => {
      console.log("📩 [MAIN SOCKET] Received on sendmyprofile:", data);
    });

    socketProxy.on("myprofile", (data: any) => {
      console.log("📩 [PROXY SOCKET] Received on sendmyprofile:", data);
    });

    return () => {
      socketMain.disconnect();
      socketProxy.disconnect();
    };
  }, []);

  // 🔘 Emit sendmyprofile with hardcoded data
  const handleSendProfile = () => {
    const message = {
      type: "custom-profile-request",
      timestamp: new Date().toISOString(),
      combination: COMBINATION,
    };

    if (mainSocketRef.current?.connected) {
      mainSocketRef.current.emit("sendmyprofile");
      console.log("📤 Sent sendmyprofile to MAIN");
    }

    if (proxySocketRef.current?.connected) {
      proxySocketRef.current.emit("sendmyprofile");
      console.log("📤 Sent sendmyprofile to PROXY");
    }
  };

  return (
    <div>
      <h2>IndoEx Dual Socket — Send & Receive on sendmyprofile</h2>
      <p>
        Check the console. It will send and receive on the same event:{" "}
        <code>sendmyprofile</code>.
      </p>
      <button
        onClick={handleSendProfile}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        🔘 Send My Profile
      </button>
    </div>
  );
}
