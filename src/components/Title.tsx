import '@styles/Title.scss';

function Title({ content }: { content: string }) {
  return <div className='title'>{content}</div>;
}

export default Title;
