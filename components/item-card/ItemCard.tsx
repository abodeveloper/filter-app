import { Typography } from "../typography/Typography";

type ItemCardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
  titleClassName?: string;
  animation: string;
};

const ItemCard = ({
  title,
  desc,
  icon,
  className,
  titleClassName,
  animation = "zoom-in",
}: ItemCardProps) => {
  return (
    <div
      data-aos={animation}
      className={`${className} flex flex-col relative p-8 overflow-hidden`}
    >
      <img
        src="/images/Pattern.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <div className="mb-8">{icon}</div>
        <Typography
          variant="body"
          size="md"
          as="p"
          className={`${titleClassName} mb-3`}
          weight="semi-bold"
        >
          {title}
        </Typography>
        <Typography
          variant="body"
          size="sm"
          as="p"
          className="text-textSecondary"
        >
          {desc}
        </Typography>
      </div>
    </div>
  );
};

export default ItemCard;
