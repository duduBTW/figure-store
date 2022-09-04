import { FigureApiResponse } from "server/client/figures";
import create from "zustand";
import { persist } from "zustand/middleware";

export type NewOrderSteps = "adress" | "payment" | "confirm";
interface NewOder {
  total: number;
  deliverPrice: number;
  deliver: string;
  payment: string;
  activeStep: NewOrderSteps;
  figures: FigureApiResponse[];
  addFigures: (figures: FigureApiResponse[]) => void;
  setDeliver: (deliver: string) => void;
  setPayment: (payment: string) => void;
  setActiveStep: (activeStep: NewOrderSteps) => void;
}

const useNewOrderState = create(
  persist<NewOder>(
    (set) => ({
      figures: [],
      total: 0,
      deliverPrice: 0,
      deliver: "",
      activeStep: "adress",
      payment: "",
      addFigures: (figures) => {
        const totalFigures = figures.reduce<number>(
          (acc, figure) => acc + figure.price,
          0
        );
        const deliverPrice = totalFigures * 0.1;
        const total = totalFigures + deliverPrice;

        set({
          activeStep: "adress",
          figures,
          total,
          deliverPrice,
          deliver: "1",
          payment: "1",
        });
      },
      setDeliver: (deliver) => set({ deliver }),
      setActiveStep: (activeStep) => {
        set({ activeStep });

        window.scrollTo({
          top: 0,
        });
      },
      setPayment: (payment) => set({ payment }),
    }),
    {
      name: "new-order",
      getStorage: () => sessionStorage,
    }
  )
);

export default useNewOrderState;
