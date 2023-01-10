import 'highlight.js/styles/night-owl.css'

type Props = {
  body: string
}

export const PostBody: React.FC<Props> = ({ body }) => {
  return (
    <div className={'markdown mx-auto'}>
      <div
        dangerouslySetInnerHTML={{
          __html: `${body}`,
        }}
      />
    </div>
  )
}

export default PostBody
