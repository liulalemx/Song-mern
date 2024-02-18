interface StatsCardProps {
  name: string;
  amount: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ name, amount }) => {
  return (
    <div className="px-8 py-4 flex justify-center gap-x-4 border-2 bg-none rounded-xl  ">
      <p className="text-lg font-medium text-background">{name}</p>
      <p className="text-xl font-bold text-background">{amount}</p>
    </div>
  );
};

export default StatsCard;
