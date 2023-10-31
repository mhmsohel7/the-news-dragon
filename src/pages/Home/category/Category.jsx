import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();

  //category wise data from routers loader funtion.
  const categoryNews = useLoaderData();

  return (
    <div>
      <h2>Total Category news is : {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
<h2>This is Category.</h2>;
