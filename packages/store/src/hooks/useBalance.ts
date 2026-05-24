import { useAtomValue } from "jotai";
import { balanceAtom } from "../atoms/balance";

export function useBalance() {
  const value = useAtomValue(balanceAtom);
  return value;
}
