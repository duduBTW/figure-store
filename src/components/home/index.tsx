// components
import AlertCard from "components/alert/card";
import ProductCard from "components/product/card";
import Text from "components/text";
import HomeBanner from "./banner";

// styles
import { AlertList, Container, ProductGrid, Section } from "./styles";

const alerts = [
  "Shipping method suspension and resumption updates (Updated Jul 29, 2022)",
  "Revised Shipping fees for Japan Post, June 2022 (Updated Jun 2, 2022)",
  "COVID-19 shipping restrictions (Updated Mar 10, 2022)",
];

const Home = () => {
  return (
    <Container>
      <AlertList>
        {alerts.map((alert) => (
          <AlertCard type="warning" key={alert}>
            {alert}
          </AlertCard>
        ))}
      </AlertList>
      <Section>
        <Text variant="title-1">Top rakings</Text>
        <ProductGrid>
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220530/12762/99333/large/e670a1becfe735bfca40dd2b8abda5ad.jpg"
            price={344.0}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220715/12989/101592/large/d683b470dd6e99093148b0bee1d1cf51.jpg"
            price={344.0}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220627/12900/100706/large/2570a5fe81b4ce5aad2987849808e7d2.jpg"
            price={200.22}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220715/12985/101568/large/c38957b86eaa5e874afcace5c81169da.jpg"
            price={300}
          />
        </ProductGrid>
      </Section>
      <Section>
        <Text variant="title-1">New</Text>
        <ProductGrid>
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220622/12855/100321/large/96deb2f35d61d78716d2ecd0c234b593.jpg"
            price={1244.0}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220516/12702/98795/large/2bbc78d5ce05c27f46008d1f02e509cf.jpg"
            price={344.0}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220427/12661/98441/large/58a06a59c2523075a7b62a22da452fcf.jpg"
            price={140}
          />
          <ProductCard
            miniature="https://images.goodsmile.info/cgm/images/product/20220412/12571/97596/large/3ab1893d409b5d8a063d0202908aa2a0.jpg"
            price={300}
          />
        </ProductGrid>
      </Section>
    </Container>
  );
};

export default Home;
