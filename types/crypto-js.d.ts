// types/crypto-js.d.ts
declare module 'crypto-js/enc-hex' {
  import { Encoder } from 'crypto-js';
  const Hex: Encoder;
  export default Hex;
}
