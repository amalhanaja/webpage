import { ArticleList } from "@components/Articles/ArticleList";
import { OutlinedButton } from "@components/Button";
import { ArticleListItemModel } from "@libs/articles";
import { FC } from "react";

interface ArticlesProps {
  articles: ArticleListItemModel[];
}

export const Articles: FC<ArticlesProps> = ({ articles }) => {
  return (
    <section id="articles" className="px-4 py-4">
      <h3 className="text-secondary text-2xl font-bold">
        I love to share my knowledge through writing.
      </h3>
      <ArticleList articles={articles} className="mt-2" />
    </section>
  );
};
