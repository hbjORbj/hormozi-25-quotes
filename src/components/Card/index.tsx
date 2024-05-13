type CardProps = {
  rank: number;
  description: string;
};

const Card = ({ rank, description }: CardProps) => {
  return (
    <div className='card flex gap-4 py-4'>
      <div className='card-body'>
        <h2 className='card-title'>{`#${rank} ${description}`}</h2>
      </div>
    </div>
  );
};

export default Card;
