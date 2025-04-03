import LexicalReadOnly from '@/components/LexicalReadOnly';

type BlogContentProps = {
    blogPostBody: any; // Type this properly based on your Lexical data structure
};

export default function BlogContent({ blogPostBody }: BlogContentProps) {
    return (
        <div className="mt-6 md:mt-12 mb-6 md:mb-12">
            <LexicalReadOnly jsonData={blogPostBody} />
        </div>
    );
}
