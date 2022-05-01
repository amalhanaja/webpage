import { ArticleListItemModel } from "@libs/articles";
import { FC } from "react";

interface ArticleListItemProps {
    article: ArticleListItemModel
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ article }) => {
    return (
        <a href={article.url} target="__blank" className="bg-slate-50 rounded-lg flex border-slate-100 border-1 hover:shadow-xl">
            <div className="px-4 py-6">
                <h4 className="font-bold text-lg">{article.title}</h4>
                <div className="mt-2 text-slate-500">Dec 2020 - {article.readTimeInMinutes} Minutes</div>
            </div>
        </a>
    )
}