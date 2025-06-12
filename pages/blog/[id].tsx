import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/blog'

interface PostProps {
  postData: PostData
}

const BlogPost: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - King K Consulting Blog</title>
        <meta name="description" content={postData.excerpt} />
        <meta name="keywords" content={postData.tags.join(', ')} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.excerpt} />
      </Head>

      <article className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/blog"
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
            
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {postData.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                {postData.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <span>By {postData.author}</span>
                <time dateTime={postData.date}>
                  {format(new Date(postData.date), 'MMMM d, yyyy')}
                </time>
              </div>
            </header>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-navy-900 prose-headings:font-semibold
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-navy-900 prose-strong:font-semibold
                prose-ul:mb-6 prose-ol:mb-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-primary-300 
                prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:px-6
                prose-blockquote:text-gray-700 prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                prose-a:text-navy-700 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>

          {/* Footer */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Found this helpful? Let's discuss how we can implement these ideas for your business.
              </p>
              <a href="/#contact" className="cta-button">
                Schedule Your Free Consultation
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <Link 
                href="/blog"
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
              >
                ← View All Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData,
    },
  }
}

export default BlogPost