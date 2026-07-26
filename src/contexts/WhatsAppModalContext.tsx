import { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(null);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WhatsAppModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error("useWhatsAppModal must be used within a WhatsAppModalProvider");
  }
  return context;
}
