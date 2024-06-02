import '@styles/Title.scss';

function Title({ content }: { content: string }) {
  return <h1 className='title'>{content}</h1>;
}

export default Title;
