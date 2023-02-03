import LayoutFlex from '../../../layout-flex';
import ProductSlot from '../../../product-slot';
import './style.scss';

const Showcase = () => {
  return (
    <LayoutFlex flex="between" class="showcase">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((slot) => (
        <ProductSlot key={slot} />
      ))}
    </LayoutFlex>
  );
};

export default Showcase;
