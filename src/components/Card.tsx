import Image from "next/image";

const Card = ({
  title,
  imageSrc,
  altText,
  link,
}: {
  title: string;
  imageSrc: string;
  altText: string;
  link: string;
}) => {
  return (
    <a
      className="hover:scale-105 duration-200 transition-all bg-white rounded-md shadow-lg"
      href={link}
    >
      <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
        <div>
          <Image
            alt={altText}
            loading="lazy"
            width={450}
            height={300}
            className="object-cover w-full"
            src={imageSrc}
          />
        </div>
        <div className="px-4 flex justify-center items-center h-[70px]">
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
