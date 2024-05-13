type CardProps = {
  rank: number;
  description: string;
};

const Card = ({ rank, description }: CardProps) => {
  return (
    <div className='card flex gap-4 py-4'>
      <div className=''>{rank}</div>
      <div className='relative flex-1 max-h-[130px]'>{description}</div>
    </div>
  );
};

export default Card;
