import { ArticleListItemModel } from "@libs/articles";
import classNames from "classnames";
import { FC } from "react";
import { ArticleListItem } from "./ArticleListItem";

interface ProjectListProps {
    articles: ArticleListItemModel[]
    className?: string
}

export const ArticleList: FC<ProjectListProps> = ({ articles, className }) => {
    return (
        <div className={classNames("grid", "grid-cols-1", "gap-2", className)}>
            {articles.map((article) => (<ArticleListItem key={article.slug} article={article} />))}
        </div>
    )
}