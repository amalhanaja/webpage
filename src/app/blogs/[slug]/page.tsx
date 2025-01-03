export default async function BlogPosts(
    {params}: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug
    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 py-24">
            <h1></h1>
        </section>
    )
}