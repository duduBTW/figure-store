export interface FigureApiResponse {
  id: string;
  name: string;
  color: string;
  sold: number;
  stock: number;
  images: string[];
}

export const getProductList = async (): Promise<FigureApiResponse[]> => {
  return new Promise((res) =>
    res([
      {
        id: "1",
        name: "Altria Pendragon",
        sold: 20,
        stock: 3,
        color: "#6A4DA9",
        images: [
          "https://images.goodsmile.info/cgm/images/product/20220325/12506/96972/large/73374ae325eefccbfda81b930c367c55.jpg",
          "https://images.goodsmile.info/cgm/images/product/20220325/12506/96973/large/1fbd32d810fa244206c1131e38fbbfe8.jpg",
          "https://images.goodsmile.info/cgm/images/product/20220325/12506/96974/large/a55f1f7e91faef952dad0b14051609e4.jpg",
        ],
      },
      {
        id: "2",
        name: "Vanilla: Maid Swimsuit ver",
        sold: 20,
        stock: 3,
        color: "#58CEF0",
        images: [
          "https://images.goodsmile.info/cgm/images/product/20220715/12980/101520/large/345c11e1ae1cc73be9a7cf2b7a29590c.jpg",
        ],
      },
    ])
  );
};
