import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-primary text-background px-4 rounded-lg w-fit"
      >
        <MoveLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
