import Image, { StaticImageData } from "next/image";
import { Typography } from "../typography/Typography";

interface UniversityCardProps {
  image: StaticImageData;
  name: string;
  made_in: string;
  price: string;
  for_text: string;
  animation: string;
}

const UniversityCard = ({
  image,
  name,
  made_in,
  price,
  for_text,
  animation = "fade-up",
}: UniversityCardProps) => {
  return (
    <div data-aos={animation}>
      <Image
        src={image}
        alt="boston-technology"
        width={500}
        height={300}
        className="w-full h-[290px] rounded-xl object-cover transition-transform duration-300 transform hover:scale-105 peer border-[1px] [border-color:#d0d0d0] p-4"
      />
      <Typography
        variant="body"
        size="md"
        className="text-primary mt-4"
        weight="semi-bold"
      >
        {name}
      </Typography>
      <div className="flex flex-col gap-3 mt-4">
        {made_in && (
          <div className="flex items-center justify-between gap-4">
            <Typography
              size="sm"
              weight="medium"
              variant="body"
              className="text-secondaryText"
            >
              Made in
            </Typography>
            <Typography variant="body" size="sm" className="text-dark">
              {made_in}
            </Typography>
          </div>
        )}
        {for_text && (
          <div className="flex items-center justify-between gap-4">
            <Typography
              size="sm"
              weight="medium"
              variant="body"
              className="text-secondaryText"
            >
              For
            </Typography>
            <Typography variant="body" size="sm" className="text-dark">
              {for_text}
            </Typography>
          </div>
        )}
        {price && (
          <div className="flex items-center justify-between gap-4">
            <Typography
              size="sm"
              weight="medium"
              variant="body"
              className="text-secondaryText"
            >
              Price
            </Typography>
            <Typography variant="body" size="sm" className="text-dark">
              {price}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityCard;
