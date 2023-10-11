
import { Magic } from "magic-sdk"

// Initialize the Magic instance
const API: string = process.env.MAGIC_API
export const magic = new Magic(API, {
  network: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    chainId: 11155111,
  },
})
