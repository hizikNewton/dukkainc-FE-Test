import { createContext } from "react";

interface IValidationContext {
  getMessagesForField: (field: string) => Array<string>;
}

export const ValidationCtx = createContext<IValidationContext>({
  getMessagesForField: () => [],
});
