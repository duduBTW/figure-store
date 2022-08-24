export interface OrderListApiResponse {}

export const getOrderList = async (
  searchValue?: string
): Promise<OrderListApiResponse[]> => {
  return new Promise((res) => {
    res([]);
  });
};
