import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div
      className={`flex p-5 justify-between   ${mobile({
        padding: "0px",
        flexDirection: "column",
      })}`}
    >
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
