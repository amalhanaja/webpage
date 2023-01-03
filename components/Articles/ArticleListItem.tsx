import { ArticleListItemModel } from "@libs/articles";
import { FC } from "react";

interface ArticleListItemProps {
  article: ArticleListItemModel;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ article }) => {
  return (
     <a href={article.url} target="__blank" className="hover:bg-background-dark hover:rounded-lg">
      <div className="p-2 flex flex-col">
        <h4 className="font-semibold text-lg">{article.title}</h4>
        <div className="mt-1 text-content-200-dark">
          Dec 2020 - {article.readTimeInMinutes} Minutes
        </div>
      </div>
    </a>
  );
};
