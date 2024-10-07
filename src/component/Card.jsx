export default function Card({ card }) {
  return (
    <div
      style={{
        backgroundColor: `${
          card.background_color ? card.background_color : "#f2f2f2"
        }`,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      className="flex flex-col w-full h-full  border rounded-sm  md:flex-row md:max-w-xl "
    >
      <img
        className="object-fit h-32 "
        src={card.image ? card.image : "/images/profile.jpg"}
        alt="profile image"
      />
      <div className="flex flex-col justify-between px-3 leading-normal">
        <p className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {card.name}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.post}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.rank}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.city}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.code}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.phone}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
          {card.email}
        </p>
      </div>
    </div>
  );
}
