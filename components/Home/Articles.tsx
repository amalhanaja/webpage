import { ArticleList } from "@components/Articles/ArticleList";
import { OutlinedButton } from "@components/Button";
import { ArticleListItemModel } from "@libs/articles";
import { FC } from "react";

interface ArticlesProps {
    articles: ArticleListItemModel[]
}

export const Articles: FC<ArticlesProps> = ({ articles }) => {
    return (
        <section id="articles" className="px-4 py-8">
            <h3 className="font-bold text-2xl">Articles</h3>
            <ArticleList articles={articles} className="mt-6" />
        </section>
    )
}